import React, { useState, useEffect, useRef } from 'react'
import { Book, FolderOpen, Code2, Rocket } from 'lucide-react';

const stats = [
    { number: "3+", label: "Années d'études", icon: <Book size={24} /> },
    { number: "15+", label: "Projets réalisés", icon: <FolderOpen size={24} /> },
    { number: "8+", label: "Technologies maîtrisées", icon: <Code2 size={24} /> },
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

const StatCard = ({ stat, index, isVisible }) => (
    <div
        className={`text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0 translate-y-8'
            }`}
        style={{ animationDelay: `${index * 0.2}s` }}
    >
        <div className="text-purple-300 mb-3">{stat.icon}</div>

        <div className="text-2xl font-bold text-white mb-1">
            {stat.number.includes('+') ? (
                <>
                    <CounterAnimation
                        end={parseInt(stat.number)}
                        isVisible={isVisible}
                    />+
                </>
            ) : stat.number.includes('%') ? (
                <>
                    <CounterAnimation
                        end={parseInt(stat.number)}
                        isVisible={isVisible}
                    />%
                </>
            ) : (
                stat.number
            )}
        </div>
        <div className="text-sm text-gray-300">{stat.label}</div>
    </div>
)

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
        <section ref={sectionRef} id="about" className="min-h-screen py-12 md:py-20 w-full relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                        À propos de moi
                    </h2>
                    <div className={`w-24 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 mx-auto rounded-full transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Main content */}
                    <div className={`${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4 text-base sm:text-lg">
                                Je suis <span className="font-semibold bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Solange ILINGA</span>, étudiante en Bachelor of Engineering à l'École Centrale Casablanca.
                                Passionnée par le développement web et la data, j'ai eu l'occasion de réaliser plusieurs projets allant de la création d'applications interactives à la conception de bases de données complètes.
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-4 text-base sm:text-lg">
                                Je maîtrise notamment React, Python, SQL et Excel, et je dispose d'une solide expérience en gestion de projet grâce à plusieurs certifications internationales.
                            </p>

                            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                                <span className="text-indigo-400 font-semibold">Mon ambition :</span> contribuer à des projets innovants qui combinent technologie et impact positif, tout en développant mes compétences dans un cadre professionnel stimulant.
                            </p>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="space-y-6">
                        <h3 className={`text-xl sm:text-2xl font-semibold text-white text-center mb-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                            En quelques chiffres
                        </h3>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {stats.map((stat, index) => (
                                <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
                            ))}
                        </div>

                        {/* Quote */}
                        <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 text-center hover:shadow-xl hover:shadow-indigo-500/20 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                            <div className="text-4xl mb-3">💡</div>
                            <blockquote className="text-gray-300 italic text-sm sm:text-base">
                                "L'innovation naît de la curiosité et grandit avec la persévérance"
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}