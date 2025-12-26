import React, { useState } from 'react';
import { FaDatabase } from "react-icons/fa";
import { SiCoursera, } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BiLogoMeta } from "react-icons/bi";
import { SiDatacamp } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { FaClipboard } from "react-icons/fa";

// Données des certificats
const certificates = [

    {
        id: 1,
        title: "Data Engineering",
        issuer: "FORCE N",
        category: "Cloud & Data",
        icon: <FaDatabase className="text-blue-600" />,
        credentialLink: "https://formation.force-n.sn/mod/customcert/verify_certificate.php?contextid=490352&code=muiefUr5UB&qrcode=1",
        color: "#FFFFFF"
    },
    {
        id: 13,
        title: "Data Engineer in Python",
        issuer: "Datacamp",
        date: "Fév 2025",
        category: "Cloud & Data",
        icon: <SiDatacamp className="text-black" />,
        credentialLink: "https://www.datacamp.com/completed/statement-of-accomplishment/track/deb150393539fbc00a35b9a0f1441b412929bbd8",
        color: "#3AC65A"
    },
    {
        id: 3,
        title: "Data Analysis with Python",
        issuer: "Coursera",
        category: "Cloud & Data",
        icon: <SiCoursera className="text-blue-600" />,
        credentialLink: "https://coursera.org/verify/9SBJ3PEHWUHR",
        color: "#FFFFFF"
    },

    
    {
        id: 12,
        title: "Understanding Cloud Computing",
        issuer: "Datacamp",
        date: "Mar 2025",
        category: "Cloud & Data",
        icon: <SiDatacamp className="text-black" />,
        credentialLink: "https://www.datacamp.com/completed/statement-of-accomplishment/course/75d80ed637aef9ca030ba52c7b84d4040adc645c",
        color: "#3AC65A"
    },
    
    {
        id: 4,
        title: "Introduction to HTML5",
        issuer: "Coursera",
        category: "Développement Web",
        icon: <SiCoursera className="text-blue-600" />,
        credentialLink: "https://coursera.org/verify/P4QF0AUVE21C",
        color: "#FFFFFF"
    },
    {
        id: 14,
        title: "Gestion de Projet",
        issuer: "MOOC GDP",
        date: "Mai 2024",
        category: "Gestion de projet",
        icon: <FcGoogle className="text-gray-800" />,
        credentialLink: "https://coursera.org/verify/N6L67BJU60SS",
        color: "#FFFFFF"
    },
    {
        id: 5,
        title: "Introduction to CSS3",
        issuer: "Coursera",
        category: "Développement Web",
        credentialLink: "https://coursera.org/verify/NYWZOENZH0G5",
        icon: <SiCoursera className="text-blue-600" />,
        color: "#FFFFFF"
    },
    {
        id: 6,
        title: "Visual Elements of User Interface Design",
        issuer: "Coursera",
        category: "Développement Web",
        icon: <SiCoursera className="text-blue-600" />,
        credentialLink: "https://coursera.org/verify/S08RBZDCBAQM",
        color: "#FFFFFF"
    },
    {
        id: 7,
        title: "Programming with JavaScript",
        issuer: "Meta",
        category: "Développement Web",
        icon: <BiLogoMeta className="text-blue-600" />,
        credentialLink: "https://coursera.org/verify/9M7MNMT4CEL9",
        color: "#FFFFFF"
    },

    {
        id: 8,
        title: "Traitement des données avec Excel ",
        issuer: "FORCE N",
        category: "Cloud & Data",
        icon: <RiFileExcel2Fill className="text-green-500" />,
        credentialLink: "https://formation.force-n.sn/mod/customcert/verify_certificate.php?contextid=679055&code=HKwJAnrGs2&qrcode=1",
        color: "#FFFFFF"
    },
    {
        id: 9,
        title: "Python Data Structures",
        issuer: "Coursera",
        date: "Déc 2024",
        category: "Cloud & Data",
        icon: <SiCoursera className="text-blue-600" />,
        credentialLink: "https://coursera.org/verify/CUP06ECD5DVN",
        color: "#FFFFFF"
    },
    {
        id: 10,
        title: "Gestion de Projet",
        issuer: "MOOC GDP",
        date: "Mai 2024",
        category: "Gestion de projet",
        icon: <FaClipboard className="text-yellow-600" />,
        credentialLink: "https://certification.gestiondeprojet.pm/GdP23AP2/GdP23PA-ILJVDVDKA.pdf",
        color: "#FFFFFF"
    },
    
    {
        id: 11,
        title: "Intelligence Artificielle pour tous",
        issuer: "FORCE N",
        date: "Nov 2025",
        category: "IA",
        icon: <FaRobot className="text-blue-600" />,
        credentialLink: "https://formation.force-n.sn/mod/customcert/verify_certificate.php?contextid=705283&code=WBuasrNRz9&qrcode=1",
        color: "#FFFFFF"
    },


];

// Extraire les catégories uniques
const uniqueCategories = [...new Set(certificates.map(cert => cert.category))];

// Ajouter "Tous" comme première catégorie
const allCategories = ["Tous", ...uniqueCategories];

export default function Certificates() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    // Filtrer les certificats par catégorie
    const filteredCertificates = activeCategory === "Tous"
        ? certificates
        : certificates.filter(cert => cert.category === activeCategory);

    // Couleurs par catégorie
    const getCategoryColor = (category) => {
        const colors = {
            "Développement Web": "#3B82F6",
            "Data": "#8B5CF6",
            "Cloud": "#F59E0B",
            "IA": "#10B981",
            "Sécurité": "#EF4444",
            "Gestion de projet": "#8B5CF6"
        };
        return colors[category] || "#6B7280";
    };

    return (
        <section id="certificates" className="min-h-screen py-20 relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mes <span className="text-blue-500">Certifications</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Une collection de mes certifications et formations qui attestent de mes compétences et de mon engagement envers l'apprentissage continu.
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full transition-all duration-300 text-sm md:text-base border ${activeCategory === category
                                ? 'text-white border-blue-500 bg-blue-500/10'
                                : 'text-gray-400 border-white/10 hover:text-white hover:border-blue-500 hover:bg-blue-500/5'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grille de certificats */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {filteredCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative bg-gradient-to-b from-white/5 to-transparent rounded-xl overflow-hidden border border-white/10 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
                        >

                            {/* Effet de brillance au survol */}
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at top, ${cert.color}15, transparent 60%)`
                                }}
                            />

                            {/* Contenu du certificat */}
                            <div className="p-3 relative">
                                {/* Logo de l'émetteur */}
                                <div className="flex flex-col items-center mb-6">
                                    <div
                                        className="w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: `${cert.color}`,
                                            border: `1px solid ${cert.color}30`
                                        }}
                                    >
                                        <div className="text-4xl">
                                            {cert.icon}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>

                                    </div>
                                    {/* Titre du certificat */}
                                    <h3 className="text-white font-semibold text-lg mb-4 text-center line-clamp-2 min-h-[3.5rem]">
                                        {cert.title}
                                    </h3>
                                </div>
                                <a
                                    href={cert.credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1"
                                >
                                    Voir
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}