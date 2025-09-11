import React, { useState } from 'react';
import { FaJava, FaPython, FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiCisco } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

// Données des certificats
const certificates = [
    {
        id: 1,
        title: "Développement Java Avancé",
        issuer: "Oracle",
        date: "Jan 2023",
        category: "Développement",
        icon: <FaJava className="text-red-500" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    },
    {
        id: 2,
        title: "Data Science with Python",
        issuer: "Coursera",
        date: "Mar 2023",
        category: "Data Science",
        icon: <FaPython className="text-green-400" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    },
    {
        id: 3,
        title: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        date: "Mai 2023",
        category: "Cloud",
        icon: <FaAws className="text-amber-500" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    },
    {
        id: 4,
        title: "Google Cloud Professional",
        issuer: "Google",
        date: "Juil 2023",
        category: "Cloud",
        icon: <FaGoogle className="text-blue-500" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    },
    {
        id: 5,
        title: "Cybersecurity Fundamentals",
        issuer: "Cisco",
        date: "Sep 2023",
        category: "Sécurité",
        icon: <MdSecurity className="text-purple-500" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    },
    {
        id: 6,
        title: "Microsoft Azure Administrator",
        issuer: "Microsoft",
        date: "Nov 2023",
        category: "Cloud",
        icon: <FaMicrosoft className="text-blue-400" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    },
    {
        id: 7,
        title: "Web Development Bootcamp",
        issuer: "Udemy",
        date: "Déc 2023",
        category: "Développement",
        icon: <SiUdemy className="text-purple-600" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    },
    {
        id: 8,
        title: "Machine Learning Specialization",
        issuer: "Coursera",
        date: "Fév 2024",
        category: "Data Science",
        icon: <SiCoursera className="text-blue-600" />,
        credentialLink: "#",
        image: "/api/placeholder/300/200"
    }
];

// Extraire les catégories uniques à partir des certificats
const uniqueCategories = [...new Set(certificates.map(cert => cert.category))];

// Couleurs pour les catégories
const categoryColors = {
    "Développement": "#3B82F6",
    "Data Science": "#8B5CF6",
    "Cloud": "#F59E0B",
    "Sécurité": "#10B981"
};

export default function Certificates() {
    const [activeCategory, setActiveCategory] = useState(uniqueCategories[0]);

    // Filtrer les certificats par catégorie
    const filteredCertificates = certificates.filter(cert => cert.category === activeCategory);

    return (
        <section id="certificates" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Arrière-plan avec effets */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-green-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mes Certificats
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Une collection de mes certifications et formations qui attestent de mes compétences et de mon engagement envers l'apprentissage continu.
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {uniqueCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center ${activeCategory === category
                                ? 'bg-gray-800 text-white shadow-lg'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                            style={activeCategory === category ? {
                                borderLeft: `4px solid ${categoryColors[category]}`,
                                backgroundColor: `${categoryColors[category]}20`
                            } : {}}
                        >
                            <span className="mr-2">{category}</span>
                            <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">
                                {certificates.filter(cert => cert.category === category).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Grille de certificats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCertificates.map((cert) => (
                        <div key={cert.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                            {/* Image du certificat */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                <div className="absolute top-4 right-4 text-3xl">
                                    {cert.icon}
                                </div>
                            </div>

                            {/* Contenu du certificat */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-semibold text-white text-lg mb-1">{cert.title}</h3>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                    </div>
                                    <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                                        {cert.date}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xs px-2 py-1 rounded-full font-medium"
                                        style={{
                                            backgroundColor: `${categoryColors[cert.category]}20`,
                                            color: categoryColors[cert.category]
                                        }}
                                    >
                                        {cert.category}
                                    </span>
                                    <a
                                        href={cert.credentialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                                    >
                                        Voir le certificat
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}