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

export const projects = [
        {
    id: 1,
    title: "Agricultural Performance & Microcredit Analysis",
    description: "Analyse des performances agricoles et de l’impact du microcrédit sur les agriculteurs au Sénégal (2019–2023) à travers un dashboard interactif.",
    tags: ["Data Analysis"],
    Technologies: ["Power BI", "Excel", "Data Visualization"],
    image: agricultureDashboard,
    demo: "https://github.com/Solangeilinga/microcredit-agriculture-powerbi"
},
{
    id: 2,
    title: "ScholarHub – Plateforme intelligente de bourses",
    description: "Solution digitale complète composée d’une application mobile et d’un dashboard web admin permettant aux étudiants d’accéder facilement à des opportunités de bourses. Le système inclut un backend robuste pour la gestion des données et une interface intuitive pour les administrateurs.",
    tags: ["Développement Web", "Développement Mobile"],
    Technologies: ["Flutter", "Node.js", "PostgreSQL", "Next.js", "Render", "Netlify"],
    image: scholarhub,
    demo: ""
},

    {
        id: 3,
        title: "Site Vitrine d'une agence digitale",
        description: "Portfolio moderne et élégant pour une agence digitale, spécialisé en création digitale et gestion de communauté.",
        tags: ["Développement Web"],
        Technologies: ["React", "Tailwind","Netlify"],
        image: siteVitrine,
        demo: "https://sbureaudigital.netlify.app"
    },
     {
        id: 5,
        title: "Analyse de données COVID-19 et indicateurs socio-économiques (Dec 2025)",
        description: "Analyse de la propagation de la COVID-19 dans différents pays à partir de données réelles.",
        tags: ["Data Analysis"],
        image: covid19,
        Technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        repo: "https://github.com/Solangeilinga/covid19-data-analysis.git",

    },
   
      {
        id: 4,
        title: "Analyse des posts sur les réseaux sociaux (Sept 2025)",
        description: "Projet simulant le rôle d'un analyste de données dans une agence de médias sociaux.",
        tags: ["Data Analysis"],
        image: figure,
        Technologies: ["Python"],
        repo: "https://github.com/Solangeilinga/analyse-donn-e-r-seau_sociaux.git",

    },
    {
        id: 9,
        title: "Quiz interactif avancé (Fev 2025)",
        description: "Conçu avec HTML, CSS et JavaScript. Questions à choix multiple avec décompte du score en temps réel et sauvegarde locale.",
        tags: ["Développement Web"],
        Technologies: ["Javascript", "Html", "Css"],
        image: quizImage,
        demo: "https://solangeilinga.github.io/Quiz/"
    },
    {
        id: 6,
        title: "La conception d'un Porfolio",
        description: "Mon premier portfolio conçu avec Wordpress tout en utilisant des composants html, Css",
        tags: ["Développement Web"],
        Technologies: ["Wordpress"],
        image: portfolio1,
        demo: "https://portfolio32299.wordpress.com/"
    },
  
    {
        id: 7,
        title: "Analyse du Churn Client (Sept 2025)",
        description: "Analyse complète des données clients pour identifier les facteurs d'attrition et créer un dashboard stratégique de suivi du churn.",
        tags: ["Data Analysis"],
        image: excel,
        Technologies: ["Excel"],
        repo: "https://github.com/Solangeilinga/Customer-curn-analysis.git",

    },
     {
        id: 8,
        title: "Site vitrine d'un Salon de Beauty",
        description: "Site vitrine moderne pour un salon de beauté, avec design élégant et responsive.Animations fluides et navigation intuitive.",
        tags: ["Développement Web"],
        Technologies: ["React", "Tailwind"],
        image: coiffure,
        demo: "https://salontemplats.netlify.app/"
    },
   
];