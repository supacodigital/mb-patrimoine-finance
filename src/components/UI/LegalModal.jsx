import { X } from "lucide-react";
import "../Footer/Footer.css";

export const MODAL_CONTENT = {
  privacy: {
    title: "Politique de confidentialité",
    date: "Dernière mise à jour : janvier 2025",
    body: (
      <>
        <p>
          MB Patrimoine & Finance (Mélissa Bessonnat) s'engage à protéger la vie privée
          des personnes qui utilisent ce site. Cette page explique quelles données sont
          collectées, pourquoi, et comment elles sont protégées.
        </p>

        <h3>1. Responsable du traitement</h3>
        <p>
          <strong>MB Patrimoine & Finance</strong><br />
          Mélissa Bessonnat<br />
          Oyonnax, Ain (01)<br />
          <a href="mailto:mbpatrimoine-finance@outlook.fr">mbpatrimoine-finance@outlook.fr</a>
        </p>

        <h3>2. Données collectées</h3>
        <p>Le seul formulaire présent sur ce site collecte :</p>
        <ul>
          <li>Votre <strong>nom complet</strong></li>
          <li>Votre <strong>adresse e-mail</strong></li>
          <li>Le <strong>contenu de votre message</strong></li>
        </ul>
        <p>
          Ces données sont transmises directement par e-mail via le service EmailJS
          et ne sont pas stockées dans une base de données.
        </p>

        <h3>3. Finalité du traitement</h3>
        <p>Vos données sont utilisées uniquement pour :</p>
        <ul>
          <li>Répondre à votre demande de contact ou de rendez-vous</li>
          <li>Assurer le suivi de notre relation commerciale si vous devenez client</li>
        </ul>
        <p>Elles ne sont <strong>jamais vendues, louées ni cédées</strong> à des tiers.</p>

        <h3>4. Base légale</h3>
        <p>
          Le traitement repose sur votre <strong>consentement explicite</strong> (case à
          cocher RGPD) au moment de l'envoi du formulaire, conformément à l'article 6(1)(a)
          du RGPD.
        </p>

        <h3>5. Durée de conservation</h3>
        <p>
          Vos données sont conservées le temps nécessaire au traitement de votre demande,
          puis supprimées. En cas de relation commerciale, elles sont conservées{" "}
          <strong>3 ans</strong> à compter du dernier contact, conformément à la
          réglementation en vigueur.
        </p>

        <h3>6. Vos droits</h3>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Accès</strong> : obtenir une copie de vos données</li>
          <li><strong>Rectification</strong> : corriger des données inexactes</li>
          <li><strong>Suppression</strong> : demander l'effacement de vos données</li>
          <li><strong>Opposition</strong> : vous opposer au traitement</li>
          <li><strong>Portabilité</strong> : recevoir vos données dans un format lisible</li>
        </ul>
        <p>
          Pour exercer ces droits, écrivez à :{" "}
          <a href="mailto:mbpatrimoine-finance@outlook.fr">mbpatrimoine-finance@outlook.fr</a>.
          Vous pouvez également déposer une réclamation auprès de la{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener">CNIL</a>.
        </p>

        <h3>7. Cookies et traceurs</h3>
        <p>
          Ce site <strong>n'utilise pas de cookies publicitaires</strong> ni de traceurs
          analytics (Google Analytics, Meta Pixel, etc.). Les seules connexions tierces sont :
        </p>
        <ul>
          <li>Google Fonts (chargement des polices de caractères)</li>
          <li>EmailJS (envoi du formulaire de contact)</li>
        </ul>

        <h3>8. Sécurité</h3>
        <p>
          Le site est servi en <strong>HTTPS</strong>. Les clés d'accès au service
          d'envoi d'e-mails ne sont pas exposées publiquement. Aucune donnée sensible
          (financière, médicale) n'est collectée via ce site.
        </p>

        <hr />
        <p className="legal-modal__note">
          Pour toute question relative à cette politique, contactez-nous à{" "}
          <a href="mailto:mbpatrimoine-finance@outlook.fr">mbpatrimoine-finance@outlook.fr</a>.
        </p>
      </>
    ),
  },
  legal: {
    title: "Mentions légales",
    date: "Dernière mise à jour : janvier 2025",
    body: (
      <>
        <h3>1. Éditeur du site</h3>
        <p>
          <strong>MB Patrimoine & Finance</strong><br />
          Mélissa Bessonnat — Conseillère en Gestion de Patrimoine Indépendante (CGPI)<br />
          Oyonnax, Ain (01), France<br />
          E-mail : <a href="mailto:mbpatrimoine-finance@outlook.fr">mbpatrimoine-finance@outlook.fr</a>
        </p>

        <h3>2. Statut professionnel</h3>
        <p>
          Mélissa Bessonnat exerce en tant que Conseillère en Investissements Financiers (CIF)
          et Courtier en Assurance, enregistrée à l'<strong>ORIAS</strong> (Organisme pour
          le Registre des Intermédiaires en Assurance) sous le numéro disponible sur
          demande à l'adresse e-mail ci-dessus.
        </p>
        <p>
          Activité encadrée par l'<strong>Autorité des Marchés Financiers (AMF)</strong> et
          la <strong>CNCEF Patrimoine</strong>.
        </p>

        <h3>3. Hébergement</h3>
        <p>
          Ce site est hébergé par un prestataire tiers. Pour toute demande relative à
          l'hébergement, contactez l'éditeur à l'adresse mentionnée ci-dessus.
        </p>

        <h3>4. Propriété intellectuelle</h3>
        <p>
          L'ensemble du contenu de ce site (textes, images, logo, graphismes) est la
          propriété exclusive de MB Patrimoine & Finance, sauf mention contraire.
          Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
        </p>

        <h3>5. Responsabilité</h3>
        <p>
          Les informations présentées sur ce site ont un caractère purement informatif et
          ne constituent pas un conseil en investissement au sens réglementaire. MB Patrimoine
          & Finance s'efforce d'assurer l'exactitude des informations publiées mais ne saurait
          être tenue responsable des erreurs ou omissions.
        </p>

        <h3>6. Liens externes</h3>
        <p>
          Ce site peut contenir des liens vers des sites tiers. MB Patrimoine & Finance ne
          contrôle pas ces sites et décline toute responsabilité quant à leur contenu.
        </p>

        <h3>7. Droit applicable</h3>
        <p>
          Le présent site et ses mentions légales sont soumis au droit français.
          Tout litige sera de la compétence exclusive des tribunaux compétents.
        </p>

        <hr />
        <p className="legal-modal__note">
          Pour toute question, contactez-nous à{" "}
          <a href="mailto:mbpatrimoine-finance@outlook.fr">mbpatrimoine-finance@outlook.fr</a>.
        </p>
      </>
    ),
  },
};

export default function LegalModal({ modalKey, onClose }) {
  const content = MODAL_CONTENT[modalKey];
  if (!content) return null;

  return (
    <div
      className="legal-modal__overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="legal-modal__card">
        <div className="legal-modal__header">
          <div>
            <h2 id="legal-modal-title" className="legal-modal__title">{content.title}</h2>
            <p className="legal-modal__date">{content.date}</p>
          </div>
          <button className="legal-modal__close" onClick={onClose} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>
        <div className="legal-modal__body">
          {content.body}
        </div>
      </div>
    </div>
  );
}
