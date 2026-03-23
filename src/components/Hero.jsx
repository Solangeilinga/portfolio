import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/photo.jpg'

const TypewriterEffect = ({ texts }) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [textIndex, setTextIndex] = useState(0)
    const [isPausing, setIsPausing] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isPausing) {
                setIsPausing(false)
                if (!isDeleting && currentIndex === texts[textIndex].length) {
                    setTimeout(() => setIsDeleting(true), 1000)
                } else if (isDeleting && currentIndex === 0) {
                    setTextIndex((prev) => (prev + 1) % texts.length)
                    setIsDeleting(false)
                }
                return
            }

            if (!isDeleting) {
                if (currentIndex < texts[textIndex].length) {
                    setDisplayText(texts[textIndex].slice(0, currentIndex + 1))
                    setCurrentIndex(prev => prev + 1)
                } else {
                    setIsPausing(true)
                }
            } else {
                if (currentIndex > 0) {
                    setDisplayText(texts[textIndex].slice(0, currentIndex - 1))
                    setCurrentIndex(prev => prev - 1)
                } else {
                    setIsPausing(true)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timer)
    }, [currentIndex, isDeleting, isPausing, textIndex, texts])

    return (
        <span>
            {displayText}
            {/* Le curseur passe en bleu profond */}
            <span className="animate-pulse text-[#1a1264]">|</span>
        </span>
    )
}

export default function Hero() {
    const professions = [
        "Étudiante en Bachelor of Engineering",
        "Tech Enthusiast",
        "Future Leader Transformationnelle",
        "Orientée impact"
    ]

    return (
        // Fond principal : brandCream (#ebebdf)
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#ebebdf]">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Profile image section */}
                    <div className="flex justify-center mb-12">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                            {/* Halo supprimé ou remplacé par une bordure nette pour éviter le dégradé/flou */}
                            <div className="absolute inset-0 rounded-full border-2 border-[#1a1264] opacity-20" />

                            {/* Image avec bordure brandBlue (#1a1264) */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1a1264] shadow-xl bg-white">
                                <img
                                    src={profileImage}
                                    alt="Solange ILINGA"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a1264] leading-tight mb-6">
                            Hi, je suis <br className="sm:hidden" />
                            {/* Suppression du texte transparent/gradient au profit du brandBlue uni */}
                            <span className="text-[#1a1264]">
                                Solange ILINGA
                            </span>
                        </h1>

                        {/* Texte du typewriter en bleu profond */}
                        <div className="mt-6 text-xl sm:text-2xl text-[#1a1264]/80 min-h-[2rem] flex justify-center items-center font-medium">
                            <TypewriterEffect texts={professions} />
                        </div>

                        {/* Buttons : Pas de dégradé, aplats de couleurs nets */}
                        <div className="mt-10 flex gap-4 justify-center flex-wrap">
                            <a
                                href="#projects"
                                className="group relative px-6 py-3 bg-[#1a1264] rounded-lg font-semibold text-[#ebebdf] text-base shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10">Voir mes projets</span>
                                {/* Effet de survol uni */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                            
                            <a
                                href="cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-6 py-3 bg-[#1a1264] rounded-lg font-semibold text-[#ebebdf] text-base shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Télécharger mon CV
                                    <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}