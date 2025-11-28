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
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
const skills = [
    // Développement 
    { name: "JavaScript", category: "Développement Web", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML", category: "Développement Web", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", category: "Développement Web", icon: <SiCss3 className="text-blue-400" /> },
    { name: "TailWind", category: "Développement Web", icon: <RiTailwindCssFill className="text-blue-400" /> },
    { name: "WordPress", category: "Développement Web", icon: <FaWordpress className="text-indigo-400" /> },
    { name: "React", category: "Développement Web", icon: <FaReact className="text-blue-400" /> },
    { name: "VS Code", category: "Développement Web", icon: <VscCode className="text-blue-400" /> },
    { name: "Node.js", category: "Développement Web", icon: <FaNodeJs className="text-green-500" /> },

    // Data & Analytics
    { name: "Python", category: "Data Analysis", icon: <FaPython className="text-green-400" /> },
    { name: "SQL", category: "Data Analysis", icon: <SiMysql className="text-indigo-400" /> },

    { name: "Excel avancé ", category: "Data Analysis", icon: <GrDocumentExcel className="text-green-500" /> },

    // Gestion & Méthodes
    { name: "Git", category: "Gestion & Méthodes", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "UML", category: "Gestion & Méthodes", icon: <MdOutlineModelTraining className="text-purple-400" /> },
    { name: "BPMN", category: "Gestion & Méthodes", icon: <AiFillCode className="text-pink-400" /> },
    { name: "Méthodes agiles", category: "Gestion & Méthodes", icon: <FaProjectDiagram className="text-purple-500" /> },

    // Communication & Outils
    { name: "Word", category: "Communication & Outils", icon: <GrDocumentWord className="text-blue-600" /> },
    { name: "PowerPoint", category: "Communication & Outils", icon: <GrDocument className="text-orange-500" /> },
    { name: "Réseaux sociaux", category: "Communication & Outils", icon: <FaRegChartBar className="text-blue-400" /> },
    { name: "Stratégie de contenu", category: "Communication & Outils", icon: <SiFigma className="text-pink-500" /> },
]

const categories = [
    { name: "Développement Web", color: "from-indigo-500 to-blue-500" },
    { name: "Data Analysis", color: "from-purple-500 to-pink-500" },
    { name: "Gestion & Méthodes", color: "from-orange-500 to-yellow-500" },
    { name: "Communication & Outils", color: "from-green-500 to-teal-500" }
]

const SkillCard = ({ skill, index, isVisible }) => {
    return (
        <div
            className={`group bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_forwards]' : 'opacity-0 translate-y-8'
                }`}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                </div>
                <h3 className="font-medium text-white text-sm">{skill.name}</h3>
            </div>
        </div>
    )
}

const CategoryCard = ({ category, categorySkills, index, isVisible }) => {
    const categoryData = categories.find(c => c.name === category)

    return (
        <div
            className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0'
                }`}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${categoryData.color}`} />
                <h3 className="text-xl md:text-2xl font-semibold text-white">{category}</h3>

            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
            { threshold: 0.1 }
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
            className="min-h-screen py-12 md:py-20 relative overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight ${isVisible ? 'animate-fadeInUp' : 'opacity-0'
                        }`}>
                        Mes compétences
                    </h2>
                    <div className={`w-24 h-1 bg-blue-500 mx-auto rounded-full transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'
                        }`} />
                </div>

                {/* Categories */}
                <div className="space-y-8">
                    {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
                        <CategoryCard
                            key={category}
                            category={category}
                            categorySkills={categorySkills}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>

            <style>{`
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
            `}</style>
        </section>
    )
}