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
import mathbotPlaceholder from '../assets/mathbot-placeholder.svg';

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
        description: "Nettoyage et normalisation d’un fichier CSV de campagne marketing bancaire pour import PostgreSQL. Nettoyage et partitionnement en trois tables (client, campagne, économie).",
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
        description: "Analyse des performances agricoles et de l’impact du microcrédit sur les agriculteurs au Sénégal (2019–2023) à travers un dashboard interactif.",
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
        description: "Portfolio moderne et élégant pour une agence digitale, spécialisé en création digitale et gestion de communauté.",
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
        id: 13,
        title: "Analyse de données COVID-19 et indicateurs socio-économiques (Dec 2025)",
        description: "Analyse de la propagation de la COVID-19 dans différents pays à partir de données réelles.",
        tags: ["Data Analysis"],
        image: covid19,
        Technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        repo: "https://github.com/Solangeilinga/covid19-data-analysis.git",
        featured: true
    },
    {
        id: 14,
        title: "Analyse des posts sur les réseaux sociaux (Sept 2025)",
        description: "Projet simulant le rôle d'un analyste de données dans une agence de médias sociaux.",
        tags: ["Data Analysis"],
        image: figure,
        Technologies: ["Python"],
        repo: "https://github.com/Solangeilinga/analyse-donn-e-r-seau_sociaux.git",
        featured: true
    },
    {
        id: 15,
        title: "Quiz interactif avancé (Fev 2025)",
        description: "Conçu avec HTML, CSS et JavaScript. Questions à choix multiple avec décompte du score en temps réel et sauvegarde locale.",
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
        description: "Analyse complète des données clients pour identifier les facteurs d'attrition et créer un dashboard stratégique de suivi du churn.",
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