// ============================================================
// FICHIER DE CONFIGURATION DU SITE — MB Patrimoine & Finance
// ============================================================

export const site = {
  name: "MB Patrimoine & Finance",
  tagline: "Comprendre, décider, avancer",
  logo: "MB",
  cta: "Prendre rendez-vous",
};

export const nav = [
  { label: "Les accompagnements", href: "#offres" },
  { label: "Vos projets", href: "#services" },
  { label: "Ma méthode", href: "#accompagnement" },
  { label: "Mes solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title:
    "Comprenez vos finances, reprenez le contrôle, et bâtissez votre patrimoine en toute autonomie.",
  // Mot mis en valeur dans le titre (voir Hero.jsx)
  highlight: "reprenez le contrôle",
  subtitle:
    "Coach et éducatrice financière indépendante. Je vous apprends à décider par vous-même — du budget du quotidien jusqu'à votre stratégie patrimoniale.",
  ctaPrimary: { label: "Trouver mon accompagnement", href: "#offres" },
  ctaSecondary: { label: "Prendre rendez-vous", href: "#contact" },
  badgeText: "Coach & éducatrice financière",
};

export const about = {
  label: "Qui suis-je ?",
  title: "Mélissa Bessonnat, coach et éducatrice financière",
  intro: [
    "Pendant 24 ans, j’ai accompagné des clients en banque. J’aimais mon métier, mais je voyais l’essentiel se perdre : l’écoute, la compréhension, la construction d’une relation de confiance. Des solutions clients qui ne correspondent pas aux objectifs car la banque à un panel de solution réduit.",
    "Quand vendre des produits est devenu plus important que conseiller, j’ai choisi de créer MB Patrimoine & Finance.",
    "Mon rôle aujourd’hui : vous offrir un accompagnement sincère, clair et personnalisé.",
    "Je prends le temps de comprendre votre histoire, vos projets, vos inquiétudes, vos ambitions. Ensemble, nous construisons une stratégie patrimoniale qui vous ressemble.",
  ],
  interventions: {
    label: "J’interviens sur toutes les étapes clés de votre vie :",
    items: [
      "Accompagner vos enfants",
      "Investir intelligemment",
      "Protéger votre famille",
      "Organiser votre transmission",
      "Trouver des solutions adaptées aux familles recomposées",
    ],
    closing:
      "J’accompagne des profils variés, unis par la même volonté : prendre en main leur patrimoine avec confiance et sérénité.",
  },
  values: [
    {
      icon: "ShieldCheck",
      title: "Indépendante & transparente",
      description:
        "Aucun lien bancaire, aucun objectif commercial. Mes recommandations servent uniquement vos intérêts.",
    },
    {
      icon: "Heart",
      title: "Humaine & à l'écoute",
      description:
        "Je prends le temps de comprendre votre situation, vos projets et vos valeurs avant de proposer quoi que ce soit.",
    },
    {
      icon: "TrendingUp",
      title: "Experte & engagée",
      description:
        "Une veille permanente sur les solutions financières et immobilières pour vous proposer le meilleur à chaque étape.",
    },
  ],
  team: [
    {
      name: "Mélissa Bessonnat",
      role: "Conseillère en Gestion de Patrimoine",
      avatar: "MB",
      color: "#0e3f3a",
    },
  ],
};

export const servicesIntro = {
  label: "Les objectifs",
  title: "Vos projets, mon expertise",
  text: "Je vous accompagne pour définir, affiner et concrétiser les objectifs qui comptent vraiment pour vous et votre famille, en vous proposant des conseils attentifs, pertinents et entièrement personnalisés pour aujourd'hui, demain et les générations à venir.",
};

export const services = [
  {
    icon: "ShieldCheck",
    image: "/1.webp",
    title: "Protéger",
    themes: [
      "Protection de la famille",
      "Protection du conjoint (mariage, PACS, union libre)",
      "Couverture des risques majeurs (décès, accident de la vie, perte d'emploi, maladie)",
      "Sécurisation du patrimoine existant",
    ],
    questions: [
      "Si la vie bascule est-ce que ma famille sera à l’abri ",
      "Ai-je une épargne de sécurité suffisante et accessible ?",
      "Je ne sais pas si mon conjoint est vraiment protégé.",
      "Je veux éviter que mes enfants se retrouvent dans une situation compliquée.",
    ],
  },
  {
    icon: "TrendingDown",
    image: "/2.webp",
    title: "Optimiser",
    themes: [
      "Optimisation fiscale",
      "Faire fructifier ma trésorerie",
      "Arbitrage salaire / dividendes",
      "Structuration des flux financiers",
      "Optimisation de la fiscalité du capital",
    ],
    questions: [
      "Je paie trop d'impôts, comment réduire intelligemment ?",
      "Mon patrimoine est-il trop concentré sur un seul type d’actif ?",
      "Ai-je trop de liquidité ?",
      "Mes placements ne sont pas optimisés fiscalement.",
      "Je veux éviter les erreurs qui coûtent cher.",
      "Est-ce que mon immobilier génère trop de revenus imposables ?",
    ],
  },
  {
    icon: "TrendingUp",
    image: "/3.webp",
    title: "Investir",
    themes: [
      "Allocation financière",
      "Diversification (fonds, ETF, private equity)",
      "Immobilier (locatif, SCPI, LMNP)",
      "Stratégie long terme",
      "Gestion du risque",
    ],
    questions: [
      "Je veux investir mais je ne sais pas par où commencer.",
      "Je veux faire mieux que mon livret A.",
      "Je veux diversifier sans prendre des risques inutiles.",
      "Je veux comprendre ce que je fais, pas juste signer.",
      "Je veux une stratégie claire, pas des produits.",
      "Est-ce que mon immobilier locatifs génère trop de revenus imposables ?",
    ],
  },
  {
    icon: "Clock",
    image: "/4.webp",
    title: "Préparer",
    themes: [
      "Préparation de la retraite",
      "Constitution d'un capital",
      "Complément de revenus futurs",
      "Optimisation des dispositifs (PER, etc.)",
      "Projection du niveau de vie",
      "Préparer les études de mes enfants",
    ],
    questions: [
      "Je ne sais pas combien je toucherai à la retraite.",
      "Je veux garder mon niveau de vie.",
      "Quand mes enfants commenceront leurs études ,je paierai encore mon crédit : je dois anticiper.",
      "Je veux comprendre si le PER est adapté à ma situation.",
    ],
  },
  {
    icon: "Heart",
    image: "/5.webp",
    title: "Transmettre",
    themes: [
      "Donations",
      "Anticipation des droits de succession",
      "Protection du conjoint",
      "Transmission d'entreprise",
      "Organisation successorale",
    ],
    questions: [
      "Je veux transmettre sans que mes enfants paient trop.",
      "Sans héritiers direct, comment transmettre ce qui compte vraiment sans que la fiscalité n’en prenne la plus grande partie.",
      "Je veux organiser ma succession pour éviter les conflits.",
      "Je veux transmettre progressivement.",
      "Je veux préparer la transmission de mon entreprise.",
    ],
  },
  {
    icon: "Briefcase",
    image: "/6.webp",
    title: "Dirigeants & Professions Libérales",
    themes: [
      "Optimisation de la rémunération",
      "Structuration du patrimoine pro / perso",
      "Protection du dirigeant",
      "Cession / transmission d'entreprise",
      "Gestion du cash professionnel",
    ],
    questions: [
      "Je ne sais pas si je me rémunère de la meilleure façon.",
      "Je veux protéger ma famille si quelque chose m'arrive.",
      "Je veux préparer la vente de mon entreprise.",
      "J'ai du cash dans ma société : quoi en faire intelligemment ?",
    ],
  },
];

export const offers = {
  label: "Les accompagnements",
  title: "Quel accompagnement vous correspond ?",
  subtitle:
    "Que vous ayez déjà des placements à faire vérifier, un budget à reprendre en main, ou simplement besoin d'y voir plus clair — il y a un accompagnement pour vous.",
  ctaLabel: "En savoir plus",
  // Le tarif n'apparaît pas sur les cartes : il est annoncé une seule fois,
  // en bas de section, pour ne pas mettre le commercial avant le contenu.
  pricingNote:
    "Chaque accompagnement est chiffré après le premier rendez-vous, qui est offert et sans engagement.",
  // Points d'entrée formulés en langage client — chacun renvoie vers une gamme
  needsLabel: "Vous voulez :",
  needs: [
    { label: "Savoir où va votre argent", target: "budget" },
    { label: "Faire un point sur vos finances", target: "budget" },
    { label: "Apprendre à mieux épargner", target: "apprendre" },
    { label: "Comprendre avant de décider", target: "apprendre" },
    { label: "Vérifier vos placements actuels", target: "placements" },
    { label: "Préparer votre retraite", target: "placements" },
    { label: "Protéger votre famille", target: "placements" },
    { label: "Organiser votre transmission", target: "placements" },
  ],
  ranges: [
    {
      id: "budget",
      icon: "Wallet",
      label: "Budget",
      title: "Faire la paix avec son budget",
      intro:
        "Reprendre la main sur son argent au quotidien, sans culpabilité et avec une méthode claire.",
      color: "#0e3f3a",
      offers: [
        {
          title: "Faire la paix avec son budget",
          baseline: "L'audit de départ",
          format: "2 rendez-vous",
          duration: "1 rendez-vous d'audit + 1 rendez-vous de restitution",
          content: [
            "Analyse complète de la situation financière (revenus, charges, épargne, endettement)",
            "Diagnostic du budget mensuel",
            "Identification des points forts et des axes d'amélioration",
            "Recommandations prioritaires",
          ],
        },
        {
          title: "Reprendre le contrôle",
          baseline: "Le programme d'accompagnement",
          format: "1 à 3 mois",
          duration: "Suivi sur 1 à 3 mois — 2 à 3 rendez-vous de suivi",
          content: [
            "Mise en place d'un budget opérationnel",
            "Méthode de gestion mensuelle (répartition, enveloppes, outils)",
            "Suivi régulier jusqu'à l'autonomie complète",
          ],
          audience:
            "Pour les personnes qui veulent structurer leur gestion quotidienne.",
        },
      ],
    },
    {
      id: "apprendre",
      icon: "GraduationCap",
      label: "Apprendre la finance",
      title: "Comprendre pour décider seul",
      intro:
        "Les bases de la finance personnelle et de la gestion des placements, expliquées simplement.",
      color: "#1a6b5a",
      offers: [
        {
          title: "Les bases de la finance personnelle",
          baseline: "Formation",
          format: "Session de 2 h",
          duration: "Session individuelle de 2 h ou atelier en petit groupe",
          content: [
            "Comprendre l'épargne, l'inflation, les taux d'intérêt",
            "Les différents types de placements (livrets, assurance-vie, PEA, PER…)",
            "Comment lire un contrat et comprendre les frais",
            "Les réflexes de protection (prévoyance, assurance)",
          ],
          audience:
            "À l'issue de la formation, vous savez prendre vos décisions financières seul.",
        },
      ],
    },
    {
      id: "placements",
      icon: "LineChart",
      label: "Placements & Patrimoine",
      title: "Le point sur vos placements",
      intro:
        "Vérifier ce que vous avez déjà, puis — si vous le souhaitez — bâtir une stratégie de long terme.",
      color: "#ff6b4a",
      offers: [
        {
          title: "Bilan & optimisation de vos placements",
          baseline: "Analyse de l'existant",
          format: "Analyse complète",
          content: [
            "Analyse des contrats existants (assurance-vie, PEA, PER, livrets)",
            "Vérification des frais, des rendements et de l'adéquation à votre profil",
            "Recommandations d'optimisation, sans obligation de souscrire",
            "Arbitrages proposés si pertinent",
          ],
          audience:
            "Pour les personnes qui ont déjà des placements mais ne savent pas s'ils sont bien placés.",
        },
        {
          title: "Stratégie patrimoniale & objectifs de vie",
          baseline: "Accompagnement clef en main",
          format: "Suivi dans la durée",
          featured: true,
          // Occupe les 2 colonnes restantes de la dernière rangée
          wide: true,
          partner: "Inovea",
          content: [
            "Stratégie long terme : retraite, transmission, investissement immobilier",
            "Mise en place de solutions patrimoniales via le partenaire Inovea",
            "Accompagnement dans la durée",
          ],
          audience:
            "L'étape où, formé et autonome, vous pouvez décider d'aller plus loin avec un accompagnement patrimonial complet.",
          legal:
            "En partenariat avec Inovea — enregistrée à l'ORIAS, statut CIF.",
        },
      ],
    },
  ],
};

export const portfolio = {
  label: "Mon accompagnement",
  title: "Une méthode claire, centrée sur vous",
  subtitle:
    "Un accompagnement structuré en 5 étapes pour construire ensemble une stratégie qui vous ressemble.",
  steps: [
    {
      number: "01",
      icon: "Phone",
      title: "Appel de présentation",
      description:
        "Echange , se présenter : entretien 30 min pour faire connaissance et poser les bases de l’entretien découverte.",
    },
    {
      number: "02",
      icon: "Users",
      title: "Entretien découverte",
      description:
        "Comprendre votre situation personnelle, professionnelle et patrimoniale, et identifier vos objectifs.",
    },
    {
      number: "03",
      icon: "Search",
      title: "Analyse & diagnostic",
      description:
        "J'analyse en profondeur votre patrimoine existant, votre fiscalité, vos contrats et placements pour établir un diagnostic complet et objectif.",
    },
    {
      number: "04",
      icon: "Users",
      title: "Stratégie sur-mesure",
      description:
        "Je vous présente des préconisations personnalisées, claires et adaptées à votre profil : solutions financières, immobilières ou de prévoyance.",
    },
    {
      number: "05",
      icon: "Briefcase",
      title: "Suivi dans la durée",
      description:
        "Votre patrimoine évolue, votre vie aussi. Je vous accompagne dans la durée avec des bilans réguliers pour ajuster la stratégie au fil du temps.",
    },
  ],
};

export const testimonials = {
  label: "Mes solutions",
  title: "Des solutions adaptées à chaque objectif",
  subtitle:
    "Qu'il s'agisse de faire fructifier votre épargne, d'investir dans l'immobilier ou de vous protéger, je vous propose les meilleures solutions du marché.",
  categories: [
    {
      icon: "PiggyBank",
      title: "Placements financiers",
      color: "#0e3f3a",
      items: [
        "Assurance-vie",
        "Plan d'Épargne Retraite (PER)",
        "Épargne salariale",
        "Réduction d'impôts",
        "SCPI",
        "ETF, Private Equaty",
        "GFI",
      ],
    },
    {
      icon: "Building2",
      title: "Investissement immobilier",
      color: "#ff6b4a",
      items: [
        "LMNP (Location Meublée)",
        "Loi Malraux",
        "Loi Denormandie",
        "Monuments historiques",
        "Immobilier géré (résidences services)",
        "Déficit foncier",
        "Nue propriété  ,Colocation",
      ],
    },
    {
      icon: "Shield",
      title: "Prévoyance & protection",
      color: "#1a1f26",
      items: [
        "Assurance décès",
        "Garantie invalidité",
        "Prévoyance TNS",
        "Mutuelle santé",
        "Protection du conjoint",
        "Transmission & succession",
      ],
    },
  ],
};

export const joinUs = {
  label: "Rejoignez-nous",
  title: "Construisez votre avenir professionnel avec MB Patrimoine",
  subtitle:
    "Tu veux un métier qui a <strong>du sens</strong>, de <strong>l'autonomie</strong> et une <strong>vraie liberté</strong>. Tu décides de tout : <strong>tes clients, ton tempo, tes solutions, ton équipe</strong>. Et <strong>tes revenus suivent… sans limite</strong>.<br/><br/>Je t'accompagne <strong>dès le début</strong> : de ton inscription, de ta formation à ton premier rendez-vous. Le réseau t'apportera des <strong>outils innovants</strong>, des <strong>partenaires</strong> et un <strong>support juridique</strong>. L'indépendance ne rime pas avec <strong>solitude</strong> : je n'ai jamais été aussi bien entourée.",
  roles: [
    {
      icon: "Star",
      title: "Ambassadeur",
      description:
        "Partagez nos services autour de vous et percevez une commission pour chaque mise en relation qui aboutit. Sans engagement, à votre rythme.",
      engagement: "Libre",
      compensation: "Commissions sur apport d'affaires",
      requirements: [
        "Aucune qualification requise",
        "Réseau personnel actif",
        "Envie de recommander",
      ],
    },
    {
      icon: "Briefcase",
      title: "Consultant partenaire",
      description:
        "Développez votre propre portefeuille clients en vous appuyant sur nos outils, notre back-office et notre expertise. Idéal pour une activité complémentaire.",
      engagement: "Partiel",
      compensation: "Honoraires partagés + commissions",
      requirements: [
        "Statut indépendant ou salarié",
        "Formation certifiante possible",
      ],
    },
    {
      icon: "Award",
      title: "Conseiller(ère) en patrimoine",
      description:
        "Rejoignez notre réseau en tant que conseiller certifié. Accompagnement complet, formation continue et accès à l'ensemble de notre gamme de solutions.",
      engagement: "Plein temps",
      compensation: "Rémunération attractive + bonus",
      requirements: [
        "Certification AMF ou équivalent",
        "Expérience en gestion de patrimoine",
        "Goût du conseil et de la relation client",
      ],
    },
  ],
};

export const faq = {
  label: "Vos questions",
  title: "Questions fréquentes",
  subtitle:
    "Tout ce que vous souhaitez savoir sur mes accompagnements, du budget à la stratégie patrimoniale.",
  items: [
    {
      question: "Le premier rendez-vous est-il payant ?",
      answer:
        "Non, le premier rendez-vous est entièrement offert et sans engagement. C'est l'occasion de faire connaissance, de comprendre votre situation et vos objectifs, et de voir si mon accompagnement vous correspond.",
    },
    {
      question: "Combien coûte un accompagnement ?",
      answer:
        "Le tarif dépend de la formule choisie et du temps nécessaire à votre situation. Il vous est communiqué à l'issue du premier rendez-vous, qui est offert : vous savez exactement ce que vous engagez avant de décider, sans surprise.",
    },
    {
      question: "Faut-il avoir un patrimoine pour être accompagné ?",
      answer:
        "Non, absolument pas. On peut commencer par reprendre son budget en main ou par comprendre les bases de la finance, sans aucun capital de départ. Que vous ayez 500 € d'épargne ou un patrimoine constitué, il existe un accompagnement adapté à votre situation.",
    },
    {
      question: "Êtes-vous vraiment indépendante des banques ?",
      answer:
        "Absolument. Je ne suis affiliée à aucune banque ni assureur. Je suis libre de comparer l'ensemble du marché et de vous recommander uniquement ce qui sert vos intérêts, sans objectif commercial à atteindre.",
    },
    {
      question: "Les placements que vous proposez sont-ils risqués ?",
      answer:
        "Tout investissement comporte un niveau de risque. Mon rôle est de vous présenter clairement le rapport risque/rendement de chaque solution et de vous proposer des options parfaitement adaptées à votre profil et vos objectifs.",
    },
    {
      question: "Comment se déroulent les rendez-vous ?",
      answer:
        "Les rendez-vous peuvent avoir lieu en présentiel partout dans l'Ain, ou à distance par visioconférence. Je m'adapte à vos disponibilités et à votre préférence.",
    },
    {
      question: "Combien de temps dure un accompagnement ?",
      answer:
        "La relation est pensée sur le long terme. Après la mise en place de votre stratégie, nous faisons des bilans réguliers (annuels ou à chaque événement de vie) pour adapter vos placements à l'évolution de votre situation.",
    },
  ],
};

export const contact = {
  label: "Contact",
  title: "Parlons de vos projets",
  subtitle:
    "Un premier échange offert, sans engagement, pour faire connaissance et comprendre votre situation.",
  // Reprend à l'identique les 5 offres de la section « accompagnements »,
  // groupées par gamme. Toute modification d'une offre doit être
  // répercutée ici pour que le formulaire reste le miroir de l'offre.
  subjectLabel: "Quel accompagnement vous intéresse ?",
  subjectPlaceholder: "Choisir un accompagnement…",
  subjectGroups: [
    {
      gamme: "Budget",
      options: ["Faire la paix avec son budget", "Reprendre le contrôle"],
    },
    {
      gamme: "Apprendre la finance",
      options: ["Les bases de la finance personnelle"],
    },
    {
      gamme: "Placements & Patrimoine",
      options: [
        "Bilan & optimisation de vos placements",
        "Stratégie patrimoniale & objectifs de vie",
      ],
    },
    {
      gamme: "Vous hésitez ?",
      options: ["Je ne sais pas encore, j'aimerais en discuter"],
    },
  ],
  // Affiné une fois l'accompagnement choisi
  stageLabel: "Où en êtes-vous ?",
  stagePlaceholder: "Choisir…",
  stages: [
    "Je découvre, je me renseigne",
    "J'ai un projet précis en tête",
    "J'ai déjà des placements à faire vérifier",
    "Je veux démarrer rapidement",
  ],
  // Ce qui se passe pendant le premier rendez-vous
  rdvHeading: "Ce premier rendez-vous sert à :",
  rdvPoints: [
    "Faire connaissance",
    "Comprendre votre situation et vos objectifs",
    "Identifier ce que vous avez déjà mis en place",
    "Voir si mon accompagnement vous correspond",
  ],
  email: "mbpatrimoine-finance@outlook.fr",
  phone: "+33 6 60 84 00 94",
  address: "01100 Martignat",
  social: [
    {
      platform: "Linkedin",
      href: "https://www.linkedin.com/in/m%C3%A9lissa-bessonnat-0089a592/?originalSubdomain=fr",
      icon: "Linkedin",
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/mb_patrimoine_finance",
      icon: "Instagram",
    },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} MB Patrimoine & Finance — Tous droits réservés.`,
  certifications: ["Enregistrée ORIAS", "Membre CNCEF", "Sous contrôle AMF"],
  legalMention:
    "Mélissa Bessonnat — Siren 940 924 202 — RSAC Bourg-en-Bresse — Orias n°25004769",
  partnerMention:
    "Activité de conseil en investissement financier exercée en partenariat avec Inovea — enregistrée à l'ORIAS, statut CIF.",
  links: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
};
