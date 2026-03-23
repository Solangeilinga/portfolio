import React, { useState, useEffect, useRef } from 'react'
import { Book, FolderOpen, Code2, Rocket } from 'lucide-react';

const stats = [
    { number: "3ème", label: "Année de Bachelor of Engineering", icon: <Book size={24} /> },
    { number: "10+", label: "Projets réalisés", icon: <FolderOpen size={24} /> },
    { number: "8+", label: "Technologies utilisées", icon: <Code2 size={24} /> },
    { number: "100%", label: "Motivation", icon: <Rocket size={24} /> }
];

const CounterAnimation = ({ end, isVisible }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isVisible) return
        const duration = 2000
        const steps = 60
        const increment = end / steps
        const stepTime = duration / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, stepTime)
        return () => clearInterval(timer)
    }, [end, isVisible])

    return <span>{count}</span>
}

export default function About() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )
        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="about" className="min-h-screen py-20 w-full relative overflow-hidden bg-[#ebebdf]">
            {/* Background effects : Supprimés (gradients/blurs) pour un design épuré */}

            <div className="container mx-auto px-4 relative z-10">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1264] mb-4 tracking-tight">
                        À propos de moi
                    </h2>
                    {/* Barre de soulignement en bleu profond */}
                    <div className={`h-1 bg-[#1a1264] mx-auto rounded-full transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />
                </div>

                {/* Main content card */}
                <div className={`bg-white rounded-2xl p-8 md:p-12 border-2 border-[#1a1264] mb-12 shadow-xl ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    <div className="max-w-5xl mx-auto">
                        <p className="text-[#1a1264] leading-relaxed mb-6 text-lg">
                            Je suis une étudiante passionnée par la technologie, actuellement en <span className="font-bold">Bachelor of Engineering </span>, un diplôme conjoint entre <span className="font-bold"> l’École Centrale Casablanca</span> et <span className="font-bold">l’Institut International d’Ingénierie de l’Eau et de l’Environnement (2iE) </span>. Boursière de la Fondation Mastercard, je bénéficie d’un environnement qui encourage l’excellence, le leadership et l’engagement social.
                        </p>
                        <p  className="text-[#1a1264] leading-relaxed mb-6 text-lg" >
                            Je m’intéresse particulièrement au <span className="font-bold"> développement web et aux domaines de la data </span>. Curieuse et motivée, j’aime apprendre en réalisant des projets concrets qui répondent à des problématiques réelles, notamment dans les domaines sociaux et éducatifs.</p>

                        <p className="text-[#1a1264] leading-relaxed text-lg mb-8">
                            <span className="font-bold">Mon ambition :</span> contribuer à des projets innovants qui combinent technologie et impact positif, tout en développant mes compétences dans un cadre professionnel stimulant.
                        </p>

                        {/* Quote : Aplat uni au lieu du gradient */}
                        <div className="bg-[#1a1264] rounded-xl p-6 text-center">
                            <div className="text-4xl mb-3">💡</div>
                            <blockquote className="text-[#ebebdf] italic text-base font-medium">
                                "Créer, apprendre et évoluer : voilà ma vision du futur"
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Statistics section */}
                <div className={`${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1264] text-center mb-8 uppercase tracking-wide">
                        En quelques chiffres
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`group relative ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0 translate-y-8'}`}
                                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                            >
                                {/* Carte de stat : Fond blanc, bordure bleue, pas de flou */}
                                <div className="relative bg-white rounded-2xl p-6 border-2 border-[#1a1264] hover:bg-[#1a1264] group transition-all duration-300 h-full flex flex-col items-center justify-center shadow-md">
                                    <div className="text-[#1a1264] group-hover:text-[#ebebdf] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>

                                    <div className="text-3xl font-black text-[#1a1264] group-hover:text-[#ebebdf] mb-2 transition-colors">
                                        {stat.number.includes('+') ? (
                                            <>
                                                <CounterAnimation
                                                    end={parseInt(stat.number)}
                                                    isVisible={isVisible}
                                                />
                                                <span>+</span>
                                            </>
                                        ) : stat.number.includes('%') ? (
                                            <>
                                                <CounterAnimation
                                                    end={parseInt(stat.number)}
                                                    isVisible={isVisible}
                                                />
                                                <span>%</span>
                                            </>
                                        ) : (
                                            <span>{stat.number}</span>
                                        )}
                                    </div>

                                    <div className="text-xs font-bold text-[#1a1264] group-hover:text-[#ebebdf] text-center leading-tight uppercase tracking-tighter transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}