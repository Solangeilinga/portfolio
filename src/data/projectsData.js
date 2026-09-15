// Import des images depuis assets
import siteVitrine from '../assets/site_vitrine.png';
import quizImage from '../assets/quiz.png';
import portfolio1 from '../assets/portfolio1.png';
import coiffure from '../assets/coiffure.png'
import figure from '../assets/Figure_2.png'
import excel from '../assets/excel.png'
import covid19 from '../assets/covid19.png'
import agricultureDashboard from '../assets/agricultureDashboard.png'
import scholarhub from '../assets/scholarhub.jpeg'
import mentalHealthApp from '../assets/mental_prediction.png'
import edublog from '../assets/edublog.png'
import walmartPipeline from '../assets/walmart_pipeline.png';
import bankMarketingCleaning from '../assets/bank_marketing_cleaning.png';
import hospitalisationApp from '../assets/hospitalisation_app.png';
import water_potability from '../assets/water_potability.png';
import innofaso from '../assets/innofaso.png';
import basyam from '../assets/basyam.png';
import tontine from '../assets/matontine.png';
import mathbot from '../assets/mathbot.png'; // TODO: remplacer par une vraie capture d'écran

export const projects = [
    {
        id: 1,
        title: "Walmart E-commerce Data Pipeline",
        description: "Pipeline ETL complet pour analyser l'impact des jours fériés sur les ventes Walmart. Extraction depuis PostgreSQL, nettoyage, agrégation des ventes moyennes mensuelles, chargement CSV et validation.",
        tags: ["Data Engineering", "ETL"],
        Technologies: ["Python", "Pandas", "SQL"],
        image: walmartPipeline,
        repo: "https://github.com/Solangeilinga/walmart-data-pipeline.git",
        demo: "",
        featured: true
    },
    {
        id: 2,
        title: "Bank Marketing Data Cleaning",
        description: "Nettoyage et restructuration de 41 188 enregistrements clients d'une campagne marketing bancaire en trois tables normalisées (client, campagne, indicateurs économiques) prêtes pour import PostgreSQL : recodage des variables catégorielles, conversion de types, reconstruction des dates de contact. L'analyse de la table campagne fait ressortir un taux de conversion de 11,3% sur l'ensemble des appels.",
        tags: ["Data Cleaning", "ETL"],
        Technologies: ["Python", "Pandas", "NumPy"],
        image: bankMarketingCleaning,
        repo: "https://github.com/Solangeilinga/bank-marketing-campaign-data-cleaning.git",
        demo: "",
        featured: true
    },
    {
        id: 3,
        title: "Agricultural Performance & Microcredit Analysis",
        description: "Dashboard Power BI analysant l'octroi de microcrédits agricoles à 50 planteurs sénégalais répartis sur 5 régions, sur la période 2019-2023 (370 observations). Modélisation en étoile (5 tables) et mesures DAX personnalisées. Sur 89,8M FCFA de crédits accordés, le taux de remboursement global atteint 77,8% ; l'arachide ressort comme la culture la plus productive et le Sénégal Oriental comme première région bénéficiaire des financements.",
        tags: ["Data Analysis"],
        Technologies: ["Power BI", "Excel", "Data Visualization"],
        image: agricultureDashboard,
        repo: "https://github.com/Solangeilinga/microcredit-agriculture-powerbi",
        featured: true
    },
 {
  id: 4,
  title: "ScholarHub – Plateforme intelligente de recherche de bourses",
  description:
    "Projet collaboratif conçu autour de la problématique d’accès aux opportunités de bourses pour les étudiants. J’ai participé à la conception et assuré le développement technique de la solution, comprenant une application mobile, une landing page de présentation, un dashboard web administratif ainsi qu’un backend robuste pour la gestion centralisée des données. ScholarHub intègre également un assistant intelligent permettant d’orienter les utilisateurs, de répondre à leurs questions et de faciliter leurs démarches académiques et administratives.",
  tags: ["Développement Web", "Développement Mobile"],
  Technologies: ["Flutter", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Render", "Netlify", "Supabase"],
  image: scholarhub,
  demo: "https://scholarhubsite.netlify.app/",
},
    {
        id: 5,
        title: "Student Mental Health Predictor",
        description: "Application interactive développée avec Streamlit permettant d’évaluer le risque de dépression chez les étudiants à partir de leurs données personnelles, académiques et habitudes de vie. Le projet inclut un modèle de machine learning entraîné avec scikit-learn et un pipeline complet pour le traitement et la prédiction des données.",
        tags: ["Data Science", "Machine Learning"],
        Technologies: ["Python", "Streamlit", "scikit-learn", "pandas", "NumPy"],
        image: mentalHealthApp,
        demo: "https://studentmentalhealthpredictionapp.streamlit.app/",
        repo: "https://github.com/Solangeilinga/Student_Mental_Health_Prediction_App.git",
        featured: true
    },
 {
  id: 6,
  title: "EduBlog – Plateforme éditoriale pour la jeunesse africaine",
  description: "Plateforme de blog full-stack pensée pour accompagner les jeunes africains dans leur orientation, leur carrière et leurs opportunités. Les auteurs publient et gèrent leurs articles depuis un tableau de bord dédié, les lecteurs explorent les contenus par catégorie, likent, commentent et sauvegardent leurs favoris. Authentification sécurisée, upload d'images, emails automatiques et interface optimisée pour le SEO.",
  tags: ["Développement Web"],
  Technologies: ["Next.js", "Node.js", "MySQL", "TypeScript", "Tailwind CSS"],
  image: edublog,
  demo: "https://edublogsite.netlify.app/",
},
{
    id: 7,
    title: "Prédiction d'Hospitalisation aux Urgences",
    description: "Application interactive développée avec Streamlit pour prédire si un patient admis aux urgences sera hospitalisé. Le projet repose sur un dataset de 32 000 patients et compare deux modèles de classification (Random Forest et Régression Logistique) avec un pipeline complet de nettoyage, feature engineering, encodage et normalisation des données. La Régression Logistique a été retenue avec un ROC-AUC de 0.90 et un Recall de 78% sur la classe hospitalisée.",
    tags: ["Data Science", "Machine Learning"],
    Technologies: ["Python", "Streamlit", "scikit-learn", "pandas", "NumPy"],
    image: hospitalisationApp,
    demo: "https://hospitalisation-app-mwwmugbxfzwlhjdciybgez.streamlit.app/",
    repo: "https://github.com/Solangeilinga/hospitalisation-app.git",
    featured: true,
},
    {
        id: 8,
        title: "Site Vitrine d'une agence digitale",
        description: "Site vitrine React 18 / Tailwind CSS pour une agence de création digitale et de gestion de communauté : sections Services, boutique de ressources téléchargeables et prise de contact, animations personnalisées et structure optimisée pour le SEO. Déployé sur Netlify.",
        tags: ["Développement Web"],
        Technologies: ["React", "Tailwind","Netlify"],
        image: siteVitrine,
        demo: "https://sbureaudigital.netlify.app"
    },
    {
    id: 9,
    title: "Projet H2 — Prédiction de la potabilité de l'eau",
    description: "Pipeline complet de Machine Learning pour prédire si l'eau est potable à partir de paramètres physico-chimiques (pH, dureté, solides, chloramines, sulfate, conductivité, matière organique, trihalométhanes). Le projet inclut une analyse exploratoire poussée, la comparaison de 4 modèles (Régression Logistique, Random Forest, XGBoost, SVM), l'optimisation du seuil de classification avec SHAP pour l'interprétabilité, et une application interactive de terrain.",
    tags: ["Data Science", "Machine Learning", "ETL"],
    Technologies: ["Python", "Pandas", "scikit-learn", "XGBoost", "SHAP", "Streamlit", "Matplotlib", "Seaborn"],
    image: water_potability, // À remplacer par le chemin de l'image si disponible
    repo: "https://github.com/Solangeilinga/projet-potabilite-eau.git", // À remplir si vous push ce projet sur GitHub
    demo: "https://projet-potabilite-eau-667gnpnfdko4imxs5vgx8a.streamlit.app/",
    featured: true
},
  {
    id: 10,
    title: "InnoFaso – Digitalisation Maintenance & Production",
    description: "Projet de fin de cycle Bachelor réalisé en équipe de 4 pour l'entreprise agroalimentaire InnoFaso (Burkina Faso). Digitalisation de 51 formulaires métiers (maintenance et production), centralisation des données dans une base PostgreSQL, et exploitation via des tableaux de bord avec indicateurs industriels en temps réel (MTBF, MTTR, taux de disponibilité). Développement d'un module d'Intelligence Artificielle entraîné sur 5 ans d'historique réel avec un modèle XGBoost atteignant un AUC-ROC de 0,99, intégrant également un service NLP de classification des causes de pannes et un assistant conversationnel. Architecture fullstack déployée en production sur Netlify, Render et Supabase.",
    tags: ["Développement Web", "Intelligence Artificielle", "Data Science", "Gestion de Projet"],
    Technologies: ["React.js", "Node.js", "PostgreSQL", "Python", "Flask", "XGBoost", "Supabase", "Tailwind CSS"],
    image: innofaso,
    featured: true
},
    {
        id: 11,
        title: "BASYAM – Application mobile de bien-être mental pour les jeunes",
        description: "Application mobile de bien-être mental dont je suis fondatrice et développeuse, destinée aux jeunes. Elle propose un suivi quotidien de l'humeur avec analyse des tendances, des défis personnalisés recommandés selon l'historique de l'utilisateur, une communauté anonyme et bienveillante, ainsi qu'un annuaire de professionnels de santé mentale avec prise de rendez-vous en ligne. Un bouton d'alerte permet à tout utilisateur en détresse de prévenir immédiatement l'équipe de suivi. L'expérience est renforcée par de la gamification (points, badges, niveaux).",
        tags: ["Développement Mobile", "Développement Web"],
        Technologies: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "Firebase", "Next.js", "TypeScript"],
        image: basyam,
        demo: "https://www.basyam.com", // lien fictif, à remplacer
        links: [
            { label: "Facebook", url: "https://www.facebook.com/share/1L7ypUubdx" },
            { label: "LinkedIn", url: "https://www.linkedin.com/company/basyam" }, 
        ],
        featured: true
    },
    {
        id: 12,
        title: "MaTontine – Application multi-plateforme de gestion de tontines",
        description: "Application multi-plateforme de gestion de tontines (associations d'épargne rotative) pour l'Afrique de l'Ouest. Un gérant crée et administre ses groupes depuis l'app, les membres rejoignent uniquement avec leur numéro de téléphone (authentification par OTP SMS, sans mot de passe), et les cotisations ainsi que les cycles sont suivis automatiquement avec journal d'audit. L'architecture est multi-tenant avec isolation stricte des données entre gérantset l'abonnement Premium se règle via Mobile Money (Orange Money, Moov Money) avec vérification cryptographique des webhooks de paiement.",
        tags: ["Développement Mobile", "Développement Web"],
        Technologies: ["Flutter", "Node.js", "Express.js", "PostgreSQL (Prisma)", "Redis", "JWT", "Africa's Talking (OTP SMS)", "SebPay (Mobile Money)", "Next.js"],
        image: tontine,
        demo: "https://matontineweb.netlify.app",
        featured: true
    },
    {
        id: 19,
        title: "MathBot – Tuteur IA de mathématiques pour le BEPC",
        description: "Application full-stack de tutorat IA pour la préparation au BEPC (examen national du Burkina Faso) : chat pédagogique en streaming, analyse d'exercices par photo, simulateur d'examen chronométré et suivi de progression. Le cœur du projet est un pipeline RAG (Retrieval-Augmented Generation) qui ancre les exercices générés par l'IA sur un corpus de 66 vraies épreuves officielles (5 sessions, sourcées et vérifiées manuellement), plutôt que de laisser le modèle inventer librement. Le projet inclut deux harnais d'évaluation construits pour mesurer objectivement la qualité du système : un pour la pertinence du retrieval (Recall@K, MRR sur un jeu de requêtes étiquetées à la main, un tiers volontairement adversarial), et un en LLM-as-judge pour détecter les erreurs mathématiques et les non-conformités de format générées par le tuteur. Ce travail d'évaluation a permis de détecter et corriger plusieurs bugs réels en production, dont un bug de notation silencieux qui créditait systématiquement la mauvaise réponse aux élèves.",
        tags: ["Intelligence Artificielle", "Data Science", "Développement Web"],
        Technologies: ["Node.js", "Express", "PostgreSQL (pgvector)", "Supabase", "Groq", "Gemini", "React", "Vite", "Vercel", "Render"],
        image: mathbot,
        demo: "https://mathbot-frontend.vercel.app",
        featured: true
    },
    {
        id: 13,
        title: "Analyse de données COVID-19 et indicateurs socio-économiques (Dec 2025)",
        description: "Analyse de la propagation du COVID-19 dans 143 pays croisée avec des indicateurs socio-économiques (PIB par habitant, espérance de vie, liberté de choix, soutien social) du World Happiness Report. Après agrégation par pays et calcul du taux d'infection maximal journalier, les corrélations obtenues restent faibles à modérées (r ≈ 0,29 avec l'espérance de vie, 0,25 avec le PIB par habitant, quasi nulle avec la liberté de choix) : pas de lien direct simple entre richesse d'un pays et vitesse de propagation.",
        tags: ["Data Analysis"],
        image: covid19,
        Technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        repo: "https://github.com/Solangeilinga/covid19-data-analysis.git",
        featured: true
    },
    {
        id: 14,
        title: "Analyse des posts sur les réseaux sociaux (Sept 2025)",
        description: "Exercice guidé de manipulation de données : génération d'un jeu de 500 posts fictifs, nettoyage (doublons, types) et visualisation de l'engagement (histogramme, boxplot par catégorie) avec Pandas et Seaborn. Les données étant simulées aléatoirement, l'exercice porte sur la méthodologie (EDA, agrégation, visualisation) plutôt que sur des insights métier réels.",
        tags: ["Data Analysis"],
        image: figure,
        Technologies: ["Python", "Pandas", "Seaborn"],
        repo: "https://github.com/Solangeilinga/analyse-donn-e-r-seau_sociaux.git",
    },
    {
        id: 15,
        title: "Quiz interactif avancé (Fev 2025)",
        description: "Quiz interactif développé en HTML/CSS/JavaScript à partir d'un projet guidé Coursera : 10 questions tirées aléatoirement parmi 13, 4 choix par question, décompte du score en temps réel (10 points par bonne réponse) et sauvegarde des résultats en local pour suivre sa progression d'une session à l'autre.",
        tags: ["Développement Web"],
        Technologies: ["Javascript", "Html", "Css"],
        image: quizImage,
        demo: "https://solangeilinga.github.io/Quiz/"
    },
    {
        id: 16,
        title: "La conception d'un Portfolio",
        description: "Mon premier portfolio conçu avec Wordpress tout en utilisant des composants html, Css",
        tags: ["Développement Web"],
        Technologies: ["Wordpress"],
        image: portfolio1,
        demo: "https://portfolio32299.wordpress.com/"
    },
    {
        id: 17,
        title: "Analyse du Churn Client (Sept 2025)",
        description: "Analyse Excel de 7 043 clients d'un opérateur télécom (taux de churn global de 26,5%) : construction de KPIs et d'un dashboard pour isoler les facteurs de résiliation. Le type de contrat ressort comme le facteur n°1 (42,7% de churn en mensuel contre 2,8% en engagement 2 ans), suivi du paiement par chèque électronique (45,3% de churn contre 15-19% pour les autres moyens) et de la faible ancienneté (47,4% de churn sur les 12 premiers mois contre 9,5% au-delà de 4 ans).",
        tags: ["Data Analysis"],
        image: excel,
        Technologies: ["Excel"],
        repo: "https://github.com/Solangeilinga/Customer-curn-analysis.git",
        featured: true
    },
    {
        id: 18,
        title: "Site vitrine d'un Salon de Beauté",
        description: "Site vitrine moderne pour un salon de beauté, avec design élégant et responsive. Animations fluides et navigation intuitive.",
        tags: ["Développement Web"],
        Technologies: ["React", "Tailwind"],
        image: coiffure,
        demo: "https://salontemplats.netlify.app/"
    },
  
];