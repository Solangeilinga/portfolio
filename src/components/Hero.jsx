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
                // Fin de la pause, passer au texte suivant ou effacer
                setIsPausing(false)
                if (!isDeleting && currentIndex === texts[textIndex].length) {
                    // Commencer à effacer après une pause
                    setTimeout(() => setIsDeleting(true), 1000)
                } else if (isDeleting && currentIndex === 0) {
                    // Passer au texte suivant après effacement
                    setTextIndex((prev) => (prev + 1) % texts.length)
                    setIsDeleting(false)
                }
                return
            }

            if (!isDeleting) {
                // Écriture
                if (currentIndex < texts[textIndex].length) {
                    setDisplayText(texts[textIndex].slice(0, currentIndex + 1))
                    setCurrentIndex(prev => prev + 1)
                } else {
                    // Pause après avoir écrit tout le texte
                    setIsPausing(true)
                }
            } else {
                // Effacement
                if (currentIndex > 0) {
                    setDisplayText(texts[textIndex].slice(0, currentIndex - 1))
                    setCurrentIndex(prev => prev - 1)
                } else {
                    // Pause après avoir tout effacé
                    setIsPausing(true)
                }
            }
        }, isDeleting ? 50 : 100) // Vitesse différente pour écrire et effacer

        return () => clearTimeout(timer)
    }, [currentIndex, isDeleting, isPausing, textIndex, texts])

    return (
        <span>
            {displayText}
            <span className="animate-pulse text-indigo-400">|</span>
        </span>
    )
}

export default function Hero() {
    const professions = [
        "Étudiante en Bachelor of Engineering",
        "Passionnée par la data et le digital",
        "Future ingénieure",
        "Curieuse et créative",
        "Orientée impact"
    ]

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Hi, je suis <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Solange ILINGA</span>
                    </h1>
                    <div className="mt-6 text-lg sm:text-xl text-gray-300 h-8">
                        <TypewriterEffect texts={professions} />
                    </div>
                    <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">
                        <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg text-white font-medium shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300">
                            Voir mes projets
                        </a>
                        <a href="/cv.pdf" className="px-6 py-3 border-2 border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300" download>
                            Télécharger mon CV
                        </a>
                    </div>
                </div>

                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                    {/* Animated halo */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 blur-2xl opacity-40 animate-pulse" />

                    {/* Image placeholder */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 backdrop-blur-sm">
                        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-6xl">
                            <img
                                src={profileImage}
                                alt="Solange ILINGA"
                                className="w-full h-full object-cover rounded-2xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
