import React, { useState, useEffect, useRef } from 'react'
import { Book, FolderOpen, Code2, Rocket } from 'lucide-react'

const stats = [
    { number: "3ème", label: "Année de Bachelor of Engineering", icon: <Book size={24} /> },
    { number: "10+", label: "Projets réalisés", icon: <FolderOpen size={24} /> },
    { number: "8+", label: "Technologies utilisées", icon: <Code2 size={24} /> },
    { number: "100%", label: "Motivation", icon: <Rocket size={24} /> }
]

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
            if (current >= end) { setCount(end); clearInterval(timer) }
            else { setCount(Math.floor(current)) }
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
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                .about-card-enter {
                    opacity: 0;
                    animation: slideUpFade 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .stat-card-enter {
                    opacity: 0;
                    animation: slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .stat-card {
                    position: relative;
                    background: white;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    border: 2px solid #1a1264;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(26,18,100,0.08);
                    transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
                    overflow: hidden;
                    cursor: default;
                }
                .stat-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: #1a1264;
                    transform: translateY(100%);
                    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
                    z-index: 0;
                }
                .stat-card:hover::before { transform: translateY(0); }
                .stat-card:hover {
                    box-shadow: 0 12px 32px rgba(26,18,100,0.25);
                    transform: translateY(-4px);
                }
                .stat-card > * { position: relative; z-index: 1; }
                .stat-icon { color: #1a1264; margin-bottom: 1rem; transition: color 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1); }
                .stat-card:hover .stat-icon { color: #ebebdf; transform: scale(1.15); }
                .stat-number { font-size: 1.875rem; font-weight: 900; color: #1a1264; margin-bottom: 0.5rem; transition: color 0.3s; }
                .stat-card:hover .stat-number { color: #ebebdf; }
                .stat-label { font-size: 0.75rem; font-weight: 700; color: #1a1264; text-align: center; line-height: 1.3; text-transform: uppercase; letter-spacing: -0.02em; transition: color 0.3s; }
                .stat-card:hover .stat-label { color: #ebebdf; }

                .main-card {
                    background: white;
                    border-radius: 1rem;
                    border: 2px solid #1a1264;
                    box-shadow: 0 4px 20px rgba(26,18,100,0.08);
                    transition: box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
                }
                .main-card:hover {
                    box-shadow: 0 16px 40px rgba(26,18,100,0.15);
                    transform: translateY(-2px);
                }
            `}</style>

            <section ref={sectionRef} id="about"
                className="min-h-screen py-20 w-full relative overflow-hidden bg-[#ebebdf]">

                <div className="container mx-auto px-4 relative z-10">
                    {/* Title */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1264] mb-4 tracking-tight">
                            À propos de moi
                        </h2>
                        <div className={`h-1 bg-[#1a1264] mx-auto rounded-full transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />
                    </div>

                    {/* Main content card */}
                    <div
                        className={`main-card p-8 md:p-12 mb-12 ${isVisible ? 'about-card-enter' : 'opacity-0'}`}
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="max-w-5xl mx-auto">
                            <p className="text-[#1a1264] leading-relaxed mb-6 text-lg">
                                Je suis une étudiante passionnée par la technologie, actuellement en <span className="font-bold">Bachelor of Engineering</span>, un diplôme conjoint entre <span className="font-bold">l'École Centrale Casablanca</span> et <span className="font-bold">l'Institut International d'Ingénierie de l'Eau et de l'Environnement (2iE)</span>. Boursière de la Fondation Mastercard, je bénéficie d'un environnement qui encourage l'excellence, le leadership et l'engagement social.
                            </p>
                            <p className="text-[#1a1264] leading-relaxed mb-6 text-lg">
                                Je m'intéresse particulièrement au <span className="font-bold">développement web et aux domaines de la data</span>. Curieuse et motivée, j'aime apprendre en réalisant des projets concrets qui répondent à des problématiques réelles, notamment dans les domaines sociaux et éducatifs.
                            </p>
                            <p className="text-[#1a1264] leading-relaxed text-lg mb-8">
                                <span className="font-bold">Mon ambition :</span> contribuer à des projets innovants qui combinent technologie et impact positif, tout en développant mes compétences dans un cadre professionnel stimulant.
                            </p>
                            <div className="bg-[#1a1264] rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">💡</div>
                                <blockquote className="text-[#ebebdf] italic text-base font-medium">
                                    "Créer, apprendre et évoluer : voilà ma vision du futur"
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className={`${isVisible ? '' : 'opacity-0'}`}>
                        <h3 className={`text-2xl sm:text-3xl font-bold text-[#1a1264] text-center mb-8 uppercase tracking-wide ${isVisible ? 'about-card-enter' : 'opacity-0'}`}
                            style={{ animationDelay: '0.45s' }}>
                            En quelques chiffres
                        </h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={isVisible ? 'stat-card-enter' : 'opacity-0'}
                                    style={{ animationDelay: `${0.55 + index * 0.12}s` }}
                                >
                                    <div className="stat-card">
                                        <div className="stat-icon">{stat.icon}</div>
                                        <div className="stat-number">
                                            {stat.number.includes('+') ? (
                                                <><CounterAnimation end={parseInt(stat.number)} isVisible={isVisible} /><span>+</span></>
                                            ) : stat.number.includes('%') ? (
                                                <><CounterAnimation end={parseInt(stat.number)} isVisible={isVisible} /><span>%</span></>
                                            ) : (
                                                <span>{stat.number}</span>
                                            )}
                                        </div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}