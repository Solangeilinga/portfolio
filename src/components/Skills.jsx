import React, { useState, useEffect, useRef } from 'react'
import { FaPython, FaProjectDiagram, FaWordpress } from "react-icons/fa"
import { SiJavascript, SiHtml5, SiCss3, SiMysql } from "react-icons/si"
import { MdOutlineModelTraining } from "react-icons/md"
import { AiFillCode } from "react-icons/ai"
import { GrDocumentExcel } from "react-icons/gr"
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPenAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { SiHootsuite } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import FadeIn from './FadeIn';
import { SiNextdotjs, SiExpress, SiSequelize, SiMongodb } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { SiPandas, SiNumpy,SiScikitlearn, SiPlotly, SiGooglecolab , SiApachehadoop } from "react-icons/si";
import { SiFlutter, SiReact } from "react-icons/si";

const skills = [
    // Développement Web et Mobile
{ name: "JavaScript", category: "Développement Web", icon: <SiJavascript className="text-yellow-400" /> },
{ name: "HTML", category: "Développement Web", icon: <SiHtml5 className="text-orange-500" /> },
{ name: "CSS", category: "Développement Web", icon: <SiCss3 className="text-blue-400" /> },
{ name: "Tailwind CSS", category: "Développement Web", icon: <RiTailwindCssFill className="text-blue-400" /> },
{ name: "WordPress", category: "Développement Web", icon: <FaWordpress className="text-indigo-400" /> },
{ name: "React", category: "Développement Web", icon: <FaReact className="text-blue-400" /> },
{ name: "Next.js", category: "Développement Web", icon: <SiNextdotjs className="text-black" /> },
{ name: "Flutter", category: "Développement Web", icon: <SiFlutter className="text-blue-500" /> },
{ name: "React Native", category: "Développement Web", icon: <SiReact className="text-blue-400" /> },
{ name: "Node.js", category: "Développement Web", icon: <FaNodeJs className="text-green-500" /> },
{ name: "Express.js", category: "Développement Web", icon: <SiExpress className="text-gray-400" /> },
{ name: "Sequelize", category: "Développement Web", icon: <SiSequelize className="text-blue-500" /> },
{ name: "REST API", category: "Développement Web", icon: <FaServer className="text-gray-500" /> },

// Base de données
    { name: "MySQL", category: "Base de données", icon: <SiMysql className="text-blue-500" /> },
    { name: "MongoDB", category: "Base de données", icon: <SiMongodb className="text-green-500" /> },
    { name: "PostgreSQL", category: "Base de données", icon: <BiLogoPostgresql className="text-indigo-400" /> },
    { name: "SQL", category: "Base de données", icon: <SiMysql className="text-blue-500" /> },


    // Data
{ name: "Python", category: "Data", icon: <FaPython className="text-blue-400" /> },
{ name: "Pandas", category: "Data", icon: <SiPandas className="text-purple-500" /> },
{ name: "NumPy", category: "Data", icon: <SiNumpy className="text-blue-500" /> },
{ name: "Scikit-learn", category: "Data", icon: <SiScikitlearn className="text-orange-400" /> },
{ name: "Matplotlib", category: "Data", icon: <SiPlotly className="text-blue-400" /> },
{ name: "Google Colab", category: "Data", icon: <SiGooglecolab className="text-yellow-500" /> },
{ name: "Excel", category: "Data", icon: < GrDocumentExcel className="text-green-500" /> },
{ name: "Power BI", category: "Data", icon: <FaChartBar className="text-yellow-400" /> },

// Optionnel
{ name: "Hadoop", category: "Data", icon: <SiApachehadoop className="text-yellow-600" /> },

    { name: "Git", category: "Gestion & Méthodes", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "UML", category: "Gestion & Méthodes", icon: <MdOutlineModelTraining className="text-purple-400" /> },
    { name: "BPMN", category: "Gestion & Méthodes", icon: <AiFillCode className="text-pink-400" /> },
    { name: "Agile", category: "Gestion & Méthodes", icon: <FaProjectDiagram className="text-purple-500" /> },
    { name: "Design Thinking", category: "Gestion & Méthodes", icon: <FaLightbulb className="text-yellow-500" /> },

    { name: "VS Code", category: "Communication & Outils", icon: <VscCode className="text-blue-400" /> },
    { name: "Hootsuite", category: "Communication & Outils", icon: <SiHootsuite className="text-red-500" /> },
    { name: "Google Analytics", category: "Communication & Outils", icon: <SiGoogleanalytics className="text-orange-500" /> },
    { name: "Stratégie", category: "Communication & Outils", icon: <FaPenAlt className="text-pink-500" /> },
]

const SkillCard = ({ skill, index, isVisible }) => {
    return (
        <FadeIn>
            <div
                className={`group bg-white rounded-xl p-4 border-2 border-[#1a1264] transition-all duration-300 hover:scale-105 hover:shadow-[4px_4px_0px_0px_#1a1264] ${
                    isVisible ? 'animate-[fadeInUp_0.6s_ease-out_forwards]' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
            >
                <div className="flex flex-col items-center text-center space-y-3">
                    <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                    </div>
                    <h3 className="font-bold text-[#1a1264] text-xs uppercase tracking-tight">{skill.name}</h3>
                </div>
            </div>
        </FadeIn>
    )
}

const CategoryCard = ({ category, categorySkills, index, isVisible }) => {
    return (
        <div
            className={`bg-white rounded-2xl p-6 md:p-8 border-2 border-[#1a1264] ${
                isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className="flex items-center gap-3 mb-8">
                {/* Barre de catégorie unie au lieu de dégradée */}
                <div className="w-2 h-8 bg-[#1a1264] rounded-full" />
                <h3 className="text-xl md:text-2xl font-black text-[#1a1264] uppercase tracking-tighter">
                    {category}
                </h3>
            </div>

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
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = []
        acc[skill.category].push(skill)
        return acc
    }, {})

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="min-h-screen py-12 md:py-20 relative bg-[#ebebdf]"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1264] mb-4 tracking-tighter uppercase ${
                        isVisible ? 'animate-fadeInUp' : 'opacity-0'
                    }`}>
                        Mes compétences
                    </h2>
                    <div className={`w-24 h-1.5 bg-[#1a1264] mx-auto transition-all duration-1000 ${
                        isVisible ? 'w-24' : 'w-0'
                    }`} />
                </div>

                <div className="space-y-12">
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
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}