// Import des images depuis assets
import siteVitrine from '../assets/site_vitrine.png';
import quizImage from '../assets/quiz.png';
import socialMediaAnalysis from '../assets/data_analysis.png';
import benevolatImage from '../assets/benevolat.png';
import designThinking from '../assets/css.png';
import portfolio1 from '../assets/portfolio1.png';
import coiffure from '../assets/coiffure.png'
import figure from '../assets/Figure_2.png'
import covid19 from '../assets/covid19.png'

export const projects = [
    {
        id: 1,
        title: "Site Vitrine d'une agence digitale",
        description: "Portfolio moderne et élégant pour une agence digitale, spécialisé en création digitale et gestion de communauté.",
        tags: ["Développement Web"],
        Technologies: ["React", "Tailwind"],
        image: siteVitrine,
        demo: "https://sbureaudigital.netlify.app"
    },
    {
        id: 3,
        title: "Site vitrine d'un Salon de Beauty",
        description: "Site vitrine moderne pour un salon de beauté, avec design élégant et responsive.Animations fluides et navigation intuitive.",
        tags: ["Développement Web"],
        Technologies: ["React", "Tailwind"],
        image: coiffure,
        demo: "https://salontemplats.netlify.app/"
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
        id: 4,
        title: "Quiz interactif avancé (Février 2025)",
        description: "Conçu avec HTML, CSS et JavaScript. Questions à choix multiple avec décompte du score en temps réel et sauvegarde locale.",
        tags: ["Développement Web"],
        Technologies: ["React"],
        image: quizImage,
        demo: "https://solangeilinga.github.io/Quiz/"
    },
    {
        id: 5,
        title: "Analyse des posts sur les réseaux sociaux (Septembre 2025)",
        description: "Projet simulant le rôle d'un analyste de données dans une agence de médias sociaux.",
        tags: ["Data Analysis"],
        image: figure,
        Technologies: ["Python"],
        repo: "https://github.com/Solangeilinga/analyse-donn-e-r-seau_sociaux.git",

    },
    {
        id: 8,
        title: "Analyse de données COVID-19 et indicateurs socio-économiques (Décembre 2025)",
        description: "Analyse de la propagation de la COVID-19 dans différents pays à partir de données réelles.",
        tags: ["Data Analysis"],
        image: covid19,
        Technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        repo: "https://github.com/Solangeilinga/covid19-data-analysis.git",

    },

    {
        id: 7,
        title: "Bénévolat (Août 2024)",
        description: "Organisation d'une journée pour les enfants déplacés internes. Développement de compétences en organisation et communication.",
        tags: ["Bénévolat"],
        Technologies: ["Gestion de Projet"],
        image: benevolatImage
    }
];