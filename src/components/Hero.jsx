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
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-extrabold">Hi, je suis <span className="text-indigo-400">Solange ILINGA</span></h1>
                    <div className="mt-4 text-lg h-8">
                        <TypewriterEffect texts={professions} />
                    </div>
                    <div className="mt-6 flex gap-3">
                        <a href="#projects" className="px-5 py-2 bg-indigo-500 rounded-md text-white shadow hover:bg-indigo-600">Voir mes projets</a>
                        <a href="/cv.pdf" className="px-5 py-2 border border-indigo-500 text-indigo-400 rounded-md hover:bg-indigo-500 hover:text-white" download>Télécharger mon CV</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative w-80 h-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-500"
                >
                    {/* Halo animé en boucle */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 to-pink-500 blur-2xl opacity-40"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    />

                    {/* Image */}
                    <img
                        src={profileImage}
                        alt="Solange ILINGA"
                        className="w-full h-full object-cover rounded-2xl relative z-10"
                    />
                </motion.div>

            </div>
        </section>
    )
}