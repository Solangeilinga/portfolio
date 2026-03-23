import React, { useState } from 'react';
import { FaDatabase, FaRobot, FaClipboard } from "react-icons/fa";
import { SiCoursera, SiDatacamp } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BiLogoMeta } from "react-icons/bi";

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
        title: "Visual Elements of UI Design",
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
        title: "Traitement des données Excel",
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
        category: "Cloud & Data",
        icon: <SiCoursera className="text-blue-600" />,
        credentialLink: "https://coursera.org/verify/CUP06ECD5DVN",
        color: "#FFFFFF"
    },
    {
        id: 10,
        title: "Gestion de Projet",
        issuer: "MOOC GDP",
        category: "Gestion de projet",
        icon: <FaClipboard className="text-yellow-600" />,
        credentialLink: "https://certification.gestiondeprojet.pm/GdP23AP2/GdP23PA-ILJVDVDKA.pdf",
        color: "#FFFFFF"
    },
    {
        id: 11,
        title: "Intelligence Artificielle",
        issuer: "FORCE N",
        category: "IA",
        icon: <FaRobot className="text-blue-600" />,
        credentialLink: "https://formation.force-n.sn/mod/customcert/verify_certificate.php?contextid=705283&code=WBuasrNRz9&qrcode=1",
        color: "#FFFFFF"
    }
];

const uniqueCategories = ["Tous", ...new Set(certificates.map(cert => cert.category))];

export default function Certificates() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredCertificates = activeCategory === "Tous"
        ? certificates
        : certificates.filter(cert => cert.category === activeCategory);

    return (
        <section id="certificates" className="min-h-screen py-20 bg-[#ebebdf]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1264] mb-4 uppercase tracking-tighter">
                        Mes Certifications
                    </h2>
                    <div className="w-24 h-1.5 bg-[#1a1264] mx-auto mb-8 rounded-full" />
                    <p className="text-[#1a1264]/70 max-w-2xl mx-auto text-lg font-medium">
                        Une collection de mes certifications attestant de mon engagement envers l'apprentissage continu.
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {uniqueCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold border-2 ${
                                activeCategory === category
                                ? 'text-[#ebebdf] bg-[#1a1264] border-[#1a1264]'
                                : 'text-[#1a1264] border-[#1a1264] hover:bg-[#1a1264] hover:text-[#ebebdf]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grille de certificats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative bg-white rounded-2xl p-6 border-2 border-[#1a1264] hover:shadow-[8px_8px_0px_0px_rgba(26,18,100,1)] transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Logo de l'émetteur avec couleur d'origine conservée pour l'icône */}
                                <div 
                                    className="w-20 h-20 flex items-center justify-center rounded-2xl mb-6 shadow-inner border border-[#1a1264]/10"
                                    style={{ backgroundColor: cert.color }}
                                >
                                    <div className="text-4xl">
                                        {cert.icon}
                                    </div>
                                </div>

                                <p className="text-[#1a1264]/60 text-xs font-bold uppercase tracking-widest mb-1">
                                    {cert.issuer}
                                </p>
                                
                                <h3 className="text-[#1a1264] font-black text-lg mb-6 line-clamp-2 min-h-[3.5rem] leading-tight">
                                    {cert.title}
                                </h3>

                                <a
                                    href={cert.credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1264] text-[#ebebdf] text-xs font-black uppercase rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Vérifier
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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