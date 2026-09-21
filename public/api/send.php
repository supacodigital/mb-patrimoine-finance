<?php
/**
 * Endpoint d'envoi du formulaire de contact via Resend.
 *
 * La clé API Resend est secrète : elle ne doit JAMAIS se retrouver dans le
 * JavaScript. Elle est lue ici, côté serveur, depuis api/config.php — un
 * fichier non versionné (voir .gitignore).
 *
 * Déploiement : ce dossier est copié tel quel dans public_html/api/.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// ── Seul POST est accepté ────────────────────────────────────────────
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['error' => 'Méthode non autorisée.']);
    exit;
}

$config = __DIR__ . '/config.php';
if (!is_file($config)) {
    error_log('send.php : api/config.php manquant');
    http_response_code(500);
    echo json_encode(['error' => "Le service d'envoi n'est pas configuré."]);
    exit;
}
$cfg = require $config;

// ── Le formulaire et l'API doivent être sur le même domaine ──────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, $cfg['allowed_origins'], true)) {
    http_response_code(403);
    echo json_encode(['error' => 'Origine non autorisée.']);
    exit;
}

// ── Lecture du corps JSON ────────────────────────────────────────────
$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 20000) {
    http_response_code(413);
    echo json_encode(['error' => 'Requête trop volumineuse.']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Requête invalide.']);
    exit;
}

$field = static fn (string $k): string => trim((string)($data[$k] ?? ''));

// ── Piège à robots : on renvoie un succès sans rien envoyer ──────────
if ($field('website') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = $field('name');
$email   = $field('email');
$phone   = $field('phone');
$subject = $field('subject');
$stage   = $field('stage');
$message = $field('message');

// ── Validation (le navigateur peut être contourné) ───────────────────
$errors = [];
if ($name === '' || mb_strlen($name) > 120) {
    $errors[] = 'nom';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 180) {
    $errors[] = 'email';
}
if ($message === '' || mb_strlen($message) > 2000) {
    $errors[] = 'message';
}
if ($errors !== []) {
    http_response_code(422);
    echo json_encode(['error' => 'Champs invalides : ' . implode(', ', $errors)]);
    exit;
}

// ── Limite de débit : 3 envois par heure et par IP ───────────────────
$ip     = $_SERVER['REMOTE_ADDR'] ?? 'inconnue';
$bucket = sys_get_temp_dir() . '/mbpf_rate_' . sha1($ip);
$window = 3600;
$max    = 3;

$hits = is_file($bucket)
    ? array_filter((array)json_decode((string)file_get_contents($bucket), true),
        static fn ($t) => is_numeric($t) && $t > time() - $window)
    : [];

if (count($hits) >= $max) {
    http_response_code(429);
    echo json_encode(['error' => 'Trop de messages envoyés. Réessayez dans une heure.']);
    exit;
}
$hits[] = time();
@file_put_contents($bucket, json_encode(array_values($hits)), LOCK_EX);

// ── Corps de l'email ─────────────────────────────────────────────────
$esc  = static fn (string $v): string => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
$line = static function (string $label, string $value) use ($esc): string {
    if (trim($value) === '') {
        return '';
    }
    return '<tr>'
        . '<td style="padding:6px 16px 6px 0;color:#5a5f6a;white-space:nowrap;vertical-align:top;">'
        . $esc($label) . '</td>'
        . '<td style="padding:6px 0;color:#1a1f26;"><strong>' . $esc($value) . '</strong></td>'
        . '</tr>';
};

$html = '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">'
    . '<div style="background:#0e3f3a;padding:20px 24px;border-radius:8px 8px 0 0;">'
    . '<p style="margin:0;color:#fff;font-size:16px;font-weight:bold;">Nouveau message depuis le site</p>'
    . '</div>'
    . '<div style="background:#f3e9dd;padding:24px;border-radius:0 0 8px 8px;">'
    . '<table style="width:100%;border-collapse:collapse;font-size:14px;">'
    . $line('Nom', $name)
    . $line('Email', $email)
    . $line('Téléphone', $phone)
    . $line('Accompagnement', $subject)
    . $line('Situation', $stage)
    . '</table>'
    . '<p style="margin:20px 0 6px;color:#5a5f6a;font-size:14px;">Message :</p>'
    . '<div style="background:#fff;padding:16px;border-radius:6px;color:#1a1f26;'
    . 'font-size:14px;line-height:1.6;white-space:pre-wrap;">' . $esc($message) . '</div>'
    . '</div></div>';

$text = "Nouveau message depuis le site\n\n"
    . "Nom : $name\nEmail : $email\n"
    . ($phone !== '' ? "Téléphone : $phone\n" : '')
    . ($subject !== '' ? "Accompagnement : $subject\n" : '')
    . ($stage !== '' ? "Situation : $stage\n" : '')
    . "\nMessage :\n$message\n";

// ── Envoi via l'API Resend ───────────────────────────────────────────
$payload = [
    'from'     => $cfg['from'],
    'to'       => [$cfg['to']],
    'reply_to' => $email,          // répondre écrit directement au prospect
    'subject'  => 'Site — ' . ($subject !== '' ? $subject : 'nouveau message') . ' — ' . $name,
    'html'     => $html,
    'text'     => $text,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $cfg['api_key'],
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE),
]);

$response = curl_exec($ch);
$status   = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    // Détail dans les logs serveur uniquement : rien d'interne côté client.
    error_log(sprintf(
        'Resend a échoué (HTTP %d) : %s',
        $status,
        $curlErr !== '' ? $curlErr : (string)$response
    ));
    http_response_code(502);
    echo json_encode(['error' => "L'envoi a échoué. Réessayez ou écrivez-nous directement."]);
    exit;
}

echo json_encode(['ok' => true]);
