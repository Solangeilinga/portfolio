import React, { useState } from 'react';
import { FaJava, FaPython, FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiCisco } from "react-icons/si";
import { MdSecurity } from "react-icons/md";


import cssCert from '../assets/css.png';
import html from '../assets/HTML.png';
import Python_data_analysis from '../assets/Python data analysis.png';
import ui from '../assets/UI.png';
import Python_data_structures from '../assets/Python data structures.png';
import wordpress from '../assets/Wordpress.png';
import data from '../assets/data_analysis.png';
import Covid from '../assets/Covid.png';
// ... importez toutes vos images

// Données des certificats
const certificates = [
    {
        id: 1,
        title: "Développement Java Avancé",
        issuer: "Coursera",
        date: "Jan 2023",
        category: "Développement Web",
        credentialLink: "#",
        image: cssCert
    },
    {
        id: 2,
        title: "Data Science with Python",
        issuer: "Coursera",
        date: "Mar 2023",
        category: "Data",
        icon: <FaPython className="text-green-400" />,
        credentialLink: "#",
        image: Python_data_analysis
    },
    {
        id: 3,
        title: "AWS Solutions Architect",
        issuer: "Coursera",
        date: "Mai 2023",
        category: "Développement Web",
        icon: <FaAws className="text-amber-500" />,
        credentialLink: "#",
        image: html
    },
    {
        id: 4,
        title: "Google Cloud Professional",
        issuer: "Coursera",
        date: "Juil 2023",
        category: "Développement Web",
        icon: <FaGoogle className="text-blue-500" />,
        credentialLink: "#",
        image: ui
    },
    {
        id: 5,
        title: "Cybersecurity Fundamentals",
        issuer: "Coursera",
        date: "Sep 2023",
        category: "Développement Web",
        icon: <MdSecurity className="text-purple-500" />,
        credentialLink: "#",
        image: wordpress
    },
    {
        id: 6,
        title: "Microsoft Azure Administrator",
        issuer: "Coursera",
        date: "Nov 2023",
        category: "Data",
        icon: <FaMicrosoft className="text-blue-400" />,
        credentialLink: "#",
        image: data
    },
    {
        id: 7,
        title: "Web Development Bootcamp",
        issuer: "Coursera",
        date: "Déc 2023",
        category: "Data",
        icon: <SiUdemy className="text-purple-600" />,
        credentialLink: "#",
        image: Covid
    },
    {
        id: 8,
        title: "Machine Learning Specialization",
        issuer: "Coursera",
        date: "Fév 2024",
        category: "Data",
        icon: <SiCoursera className="text-blue-600" />,
        credentialLink: "#",
        image: Python_data_structures
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
                            <div className="h-55 overflow-hidden relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />


                            </div>

                            {/* Contenu du certificat */}
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                    </div>
                                    <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                                        {cert.date}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}