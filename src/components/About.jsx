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
    <div className={`text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0 translate-y-8'
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
    >

        <div className="text-blue-600">{stat.icon}</div>

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
        <div className="text-sm text-gray-400">{stat.label}</div>
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
        <section
            ref={sectionRef}
            id="about"
            className="py-20 relative overflow-hidden"
        >
            {/* Arrière-plan subtil */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-20 w-40 h-40 bg-gray-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Titre */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isVisible ? 'animate-[fadeInUp_0.8s_ease-out]' : 'opacity-0'
                        }`}>
                        À propos de moi
                    </h2>
                    <div className={`w-24 h-1 bg-gray-500 mx-auto rounded-full ${isVisible ? 'animate-[expandWidth_1s_ease-out_0.5s_forwards]' : 'w-0'
                        }`} />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenu principal - Gauche */}
                    <div className={`${isVisible ? 'animate-[fadeIn_1s_ease-out_0.3s_forwards]' : 'opacity-0'
                        }`}>
                        <div className="flex items-center space-x-3 mb-8">
                            <h3 className="text-3xl font-semibold text-white">Bonjour !</h3>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                Je suis <span className="text-white font-medium">Solange ILINGA</span>, étudiante en Bachelor of Engineering à l'École Centrale Casablanca.
                                Passionnée par le développement web et la data, j'ai eu l'occasion de réaliser plusieurs projets allant de la création d'applications interactives à la conception de bases de données complètes.
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                Je maîtrise notamment React, Python, SQL et Excel, et je dispose d'une solide expérience en gestion de projet grâce à plusieurs certifications internationales.
                            </p>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                <span className="text-white font-medium">Mon ambition :</span> contribuer à des projets innovants qui combinent technologie et impact positif, tout en développant mes compétences dans un cadre professionnel stimulant.
                            </p>
                        </div>
                    </div>

                    {/* Statistiques - Droite */}
                    <div className="space-y-8">
                        <h3 className={`text-2xl font-semibold text-white text-center mb-8 ${isVisible ? 'animate-[fadeIn_1s_ease-out_0.8s_forwards]' : 'opacity-0'
                            }`}>
                            En quelques chiffres
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    stat={stat}
                                    index={index}
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>

                        {/* Citation/motto */}
                        <div className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center ${isVisible ? 'animate-[fadeIn_1.2s_ease-out_1.2s_forwards]' : 'opacity-0'
                            }`}>
                            <div className="text-4xl mb-3">💡</div>
                            <blockquote className="text-gray-300 italic">
                                "L'innovation naît de la curiosité et grandit avec la persévérance"
                            </blockquote>
                        </div>
                    </div>


                </div>
            </div>

            {/* Animations CSS */}
            <style jsx>{`
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