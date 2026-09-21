<?php
/**
 * Configuration de l'envoi d'emails — MODÈLE.
 *
 * À copier en `config.php` sur le serveur, puis à compléter.
 * `config.php` n'est jamais versionné : il contient la clé secrète.
 */

return [
    // Clé API Resend (https://resend.com/api-keys) — commence par "re_"
    'api_key' => 'PASTE_YOUR_RESEND_API_KEY_HERE',

    // Expéditeur : le domaine doit être vérifié chez Resend
    'from' => 'MB Patrimoine & Finance <contact@mb-patrimoine-finance.fr>',

    // Destinataire des messages du formulaire
    'to' => 'mbpatrimoine-finance@outlook.fr',

    // Seules ces origines peuvent appeler l'API
    'allowed_origins' => [
        'https://mb-patrimoine-finance.fr',
        'https://www.mb-patrimoine-finance.fr',
    ],
];
