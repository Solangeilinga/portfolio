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
            <span className="animate-pulse text-indigo-400">|</span>
        </span>
    )
}

export default function Hero() {
    const professions = [
        "Étudiante en Bachelor of Engineering",
        "Passionnée par la data et le digital",
        "Future Leader Transformationnelle",
        "Orientée impact"
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Centered content */}
                <div className="max-w-5xl mx-auto">
                    {/* Profile image */}
                    <div className="flex justify-center mb-12">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                            {/* Animated halo */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 blur-2xl opacity-50 animate-pulse" />

                            {/* Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 backdrop-blur-sm">
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
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                            Hi, je suis <br className="sm:hidden" />
                            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Solange ILINGA
                            </span>
                        </h1>

                        <div className="mt-6 text-xl sm:text-2xl text-gray-300 min-h-[2rem] flex justify-center items-center">
                            <TypewriterEffect texts={professions} />
                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex gap-4 justify-center flex-wrap">
                            <a
                                href="#projects"
                                className="px-8 py-4 border-2 rounded-lg border-indigo-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 text-lg"
                            >
                                Voir mes projets
                            </a>
                            <a
                                href="cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 text-lg font-medium"
                            >
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}