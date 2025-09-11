import React, { useState, useEffect, useRef } from 'react'
import { FaJava, FaPython, FaProjectDiagram, FaWordpress, FaRegChartBar } from "react-icons/fa"
import { SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiFigma, SiMysql } from "react-icons/si"
import { MdOutlineModelTraining } from "react-icons/md"
import { AiFillCode } from "react-icons/ai"
import { BsBarChartLine } from "react-icons/bs"
import { RiTeamLine } from "react-icons/ri"
import { GrDocumentWord, GrDocumentExcel } from "react-icons/gr"
import { GrDocument } from "react-icons/gr"
import { FaChartBar } from "react-icons/fa";

// Organisation simplifiée en 4 catégories principales
const skills = [
    // Développement (fusion Programmation + Dev Web)
    { name: "Python", level: 85, category: "Développement", icon: <FaPython className="text-green-400" />, subcategory: "Backend" },
    { name: "Java", level: 80, category: "Développement", icon: <FaJava className="text-red-500" />, subcategory: "Backend" },
    { name: "C++", level: 75, category: "Développement", icon: <SiCplusplus className="text-blue-500" />, subcategory: "Backend" },
    { name: "JavaScript", level: 85, category: "Développement", icon: <SiJavascript className="text-yellow-400" />, subcategory: "Frontend" },
    { name: "HTML", level: 95, category: "Développement", icon: <SiHtml5 className="text-orange-500" />, subcategory: "Frontend" },
    { name: "CSS", level: 90, category: "Développement", icon: <SiCss3 className="text-blue-400" />, subcategory: "Frontend" },
    { name: "WordPress", level: 80, category: "Développement", icon: <FaWordpress className="text-indigo-400" />, subcategory: "CMS" },
    { name: "UI/UX Design", level: 70, category: "Développement", icon: <SiFigma className="text-pink-500" />, subcategory: "Design" },

    // Data & Analytics
    { name: "SQL", level: 75, category: "Data & Analytics", icon: <SiMysql className="text-indigo-400" /> },
    { name: "Excel avancé", level: 85, category: "Data & Analytics", icon: <GrDocumentExcel className="text-green-500" /> },
    { name: "Analyse de données", level: 80, category: "Data & Analytics", icon: <BsBarChartLine className="text-blue-300" /> },
    { name: "Visualisation", level: 70, category: "Data & Analytics", icon: <FaChartBar className="text-yellow-500" /> },

    // Gestion de projet & Méthodes (fusion Ingénierie logicielle + Gestion de projet)
    { name: "UML", level: 80, category: "Gestion & Méthodes", icon: <MdOutlineModelTraining className="text-purple-400" /> },
    { name: "BPMN", level: 70, category: "Gestion & Méthodes", icon: <AiFillCode className="text-pink-400" /> },
    { name: "Méthodes agiles", level: 80, category: "Gestion & Méthodes", icon: <FaProjectDiagram className="text-purple-500" /> },
    { name: "Planification", level: 75, category: "Gestion & Méthodes", icon: <RiTeamLine className="text-red-400" /> },

    // Communication & Outils (fusion Outils bureautiques + Communication digitale)
    { name: "Word", level: 90, category: "Communication & Outils", icon: <GrDocumentWord className="text-blue-600" /> },
    { name: "PowerPoint", level: 85, category: "Communication & Outils", icon: <GrDocument className="text-orange-500" /> },
    { name: "Réseaux sociaux", level: 80, category: "Communication & Outils", icon: <FaRegChartBar className="text-blue-400" /> },
    { name: "Stratégie de contenu", level: 75, category: "Communication & Outils", icon: <SiFigma className="text-pink-500" /> },
]

const categories = {
    "Développement": "#3B82F6",
    "Data & Analytics": "#8B5CF6",
    "Gestion & Méthodes": "#F59E0B",
    "Communication & Outils": "#10B981"
}

const ProgressBar = ({ level, color, isVisible }) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setWidth(level), 200)
            return () => clearTimeout(timer)
        }
    }, [isVisible, level])

    return (
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                    width: `${width}%`,
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}50`
                }}
            />
        </div>
    )
}

const SkillCard = ({ skill, index, isVisible }) => {
    const color = categories[skill.category]

    return (
        <div
            className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'animate-[slideUp_0.6s_ease-out_forwards]' : 'opacity-0 translate-y-8'
                }`}
            style={{
                animationDelay: `${index * 0.1}s`,
                background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(55, 65, 81, 0.4) 100%)`
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                            <h3 className="font-semibold text-white">{skill.name}</h3>
                            {skill.subcategory && (
                                <span className="text-xs text-gray-400 block">
                                    {skill.subcategory}
                                </span>
                            )}
                            <span
                                className="text-xs px-2 py-1 rounded-full font-medium inline-block mt-1"
                                style={{
                                    backgroundColor: `${color}20`,
                                    color: color
                                }}
                            >
                                {skill.category}
                            </span>
                        </div>
                    </div>
                    <span className="text-2xl font-bold" style={{ color }}>
                        {skill.level}%
                    </span>
                </div>

                <ProgressBar level={skill.level} color={color} isVisible={isVisible} />
            </div>

            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
            </div>
        </div>
    )
}

const CategorySection = ({ category, categorySkills, color, index, isVisible }) => {
    return (
        <div className={`mb-12 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-white mr-4">{category}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent" style={{ background: `linear-gradient(to right, ${color}50, transparent)` }}></div>
                <span className="text-sm text-gray-400 ml-4">{categorySkills.length} compétences</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categorySkills.map((skill, skillIndex) => (
                    <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </div>
    )
}

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = []
        }
        acc[skill.category].push(skill)
        return acc
    }, {})

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-20 relative overflow-hidden"
        >
            {/* Arrière-plan avec particules */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-green-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Titre */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out]' : 'opacity-0'}`}>
                        Mes compétences
                    </h2>
                    <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 ${isVisible ? 'animate-[expandWidth_1s_ease-out_0.5s_forwards]' : 'w-0'}`} />
                </div>

                {/* Contenu par catégories */}
                <div className="space-y-16">
                    {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
                        <CategorySection
                            key={category}
                            category={category}
                            categorySkills={categorySkills}
                            color={categories[category]}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* Légende des catégories */}
                <div className="mt-16 flex flex-wrap justify-center gap-4">
                    {Object.entries(categories).map(([category, color]) => (
                        <div key={category} className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                            <span className="text-sm text-gray-300">{category}</span>
                            <span className="text-xs text-gray-500">
                                ({groupedSkills[category]?.length || 0})
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(32px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes expandWidth {
                    from { width: 0; }
                    to { width: 6rem; }
                }
            `}</style>
        </section>
    )
}