// Import des images depuis assets
import siteVitrine from '../assets/site_vitrine.png';
import quizImage from '../assets/quiz.png';
import socialMediaAnalysis from '../assets/data_analysis.png';
import benevolatImage from '../assets/benevolat.png';
import designThinking from '../assets/css.png';

export const projects = [
    {
        id: 1,
        title: "Analyse des posts sur les réseaux sociaux (Septembre 2025)",
        description: "Projet simulant le rôle d'un analyste de données dans une agence de médias sociaux.",
        tags: ["Data Analysis"],
        image: socialMediaAnalysis,
        repo: "https://github.com/Solangeilinga/analyse-donn-e-r-seau_sociaux.git",
        demo: "https://solangeilinga.github.io/Quiz/"

    },
    {
        id: 2,
        title: "Site Vitrine d'une agence digitale",
        description: "Projet d'équipe visant à concevoir un site statique sur la culture, la géographie et l'histoire du Japon. J'ai pris en charge la page culture.",
        tags: ["Développement Web"],
        image: siteVitrine,
        demo: "https://sbureaudigital.netlify.app"
    },
    {
        id: 4,
        title: "Quiz interactif avancé (Février 2025)",
        description: "Conçu avec HTML, CSS et JavaScript. Questions à choix multiple avec décompte du score en temps réel et sauvegarde locale.",
        tags: ["Développement Web"],
        image: quizImage,
        demo: "https://solangeilinga.github.io/Quiz/"
    },
    {
        id: 7,
        title: "Bénévolat (Août 2024)",
        description: "Organisation d'une journée pour les enfants déplacés internes. Développement de compétences en organisation et communication.",
        tags: ["Bénévolat"],
        image: benevolatImage
    },
    {
        id: 8,
        title: "Design Thinking (Février 2024)",
        description: "Projet en équipe pour améliorer l'expérience client dans un restaurant scolaire. Solutions centrées sur l'utilisateur.",
        tags: ["Innovation"],
        image: designThinking
    }
];