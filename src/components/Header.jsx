import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const nav = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experiences', label: 'Expériences' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'certificates', label: 'Certificats' },
    { id: 'contact', label: 'Contact' }
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = nav.map(n => document.getElementById(n.id))
            const scrollPosition = window.scrollY + 100 // Offset pour le header

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(nav[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Vérifier la position initiale

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed w-full z-30">
            <div className="backdrop-blur-sm bg-surface">
                <div className="container mx-auto px-4 flex items-center justify-between h-16">
                    <a href="#home" className="text-xl font-bold bg-blue-500 bg-clip-text text-transparent">
                        Solange ILINGA
                    </a>

                    <nav className="hidden md:flex gap-6">
                        {nav.map(n => (
                            <a
                                key={n.id}
                                href={`#${n.id}`}
                                className={`transition-all duration-300 ${activeSection === n.id
                                    ? 'text-blue-500 font-semibold'
                                    : 'text-white hover:text-blue-500'
                                    }`}
                            >
                                {n.label}
                                {activeSection === n.id && (
                                    <div className="h-0.5 bg-blue-500 rounded-full mt-1" />
                                )}
                            </a>
                        ))}
                    </nav>

                    <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
                        {open ? <X /> : <Menu />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden bg-slate-800 border-t border-gray-700">
                        <div className="flex flex-col items-center py-4">
                            {nav.map(n => (
                                <a
                                    key={n.id}
                                    href={`#${n.id}`}
                                    onClick={() => setOpen(false)}
                                    className={`py-3 w-full text-center transition-all duration-300 ${activeSection === n.id
                                        ? 'text-indigo-400 font-semibold bg-indigo-500/10'
                                        : 'text-gray-300 hover:text-indigo-400 hover:bg-gray-700/50'
                                        }`}
                                >
                                    {n.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.header>
    )
}