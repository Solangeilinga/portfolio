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
        <section ref={sectionRef} id="about" className="min-h-screen py-20 w-full relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        À propos de moi
                    </h2>
                    <div className={`w-24 h-1 bg-blue-500 mx-auto rounded-full transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />
                </div>

                {/* Main content card */}
                <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-white leading-relaxed mb-6 text-lg">
                            Je suis <span className="font-semibold bg-blue-500 bg-clip-text text-transparent">Solange ILINGA</span>, étudiante en Bachelor of Engineering à l'École Centrale Casablanca.
                            Passionnée par le développement web et la data, j'ai eu l'occasion de réaliser plusieurs projets.
                        </p>

                        <p className="text-white leading-relaxed text-lg mb-8">
                            <span className="text-blue-500 font-semibold">Mon ambition :</span> contribuer à des projets innovants qui combinent technologie et impact positif, tout en développant mes compétences dans un cadre professionnel stimulant.
                        </p>

                        {/* Quote */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-white/20 text-center">
                            <div className="text-4xl mb-3">💡</div>
                            <blockquote className="text-white italic text-base">
                                "Créer, apprendre et évoluer : voilà ma vision du futur"
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Statistics section */}
                <div className={`${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8">
                        En quelques chiffres
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`group relative ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0 translate-y-8'}`}
                                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 h-full flex flex-col items-center justify-center">
                                    <div className="text-blue-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>

                                    <div className="text-3xl font-bold text-white mb-2">
                                        {stat.number.includes('+') ? (
                                            <>
                                                <CounterAnimation
                                                    end={parseInt(stat.number)}
                                                    isVisible={isVisible}
                                                />
                                                <span className="text-blue-500">+</span>
                                            </>
                                        ) : stat.number.includes('%') ? (
                                            <>
                                                <CounterAnimation
                                                    end={parseInt(stat.number)}
                                                    isVisible={isVisible}
                                                />
                                                <span className="text-blue-500">%</span>
                                            </>
                                        ) : (
                                            <span className="bg-blue-500 bg-clip-text text-transparent">
                                                {stat.number}
                                            </span>
                                        )}
                                    </div>

                                    <div className="text-sm text-white text-center leading-tight">
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