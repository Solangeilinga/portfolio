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
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(nav[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="fixed w-full z-50 border-b-2 border-[#ebebdf]/10"
        >
            {/* Fond Bleu Profond pour le Header */}
            <div className="bg-[#1a1264]">
                <div className="container mx-auto px-4 flex items-center justify-between h-16">
                    {/* Logo en Crème */}
                    <a href="#home" className="text-xl font-bold text-[#ebebdf] hover:opacity-80 transition-opacity">
                        Solange ILINGA
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {nav.map(n => (
                            <a
                                key={n.id}
                                href={`#${n.id}`}
                                className={`relative transition-all duration-300 text-sm font-bold uppercase tracking-wider ${
                                    activeSection === n.id
                                    ? 'text-[#ebebdf]'
                                    : 'text-[#ebebdf]/60 hover:text-[#ebebdf]'
                                }`}
                            >
                                {n.label}
                                {activeSection === n.id && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ebebdf]" 
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button - Couleur Crème */}
                    <button 
                        className="md:hidden text-[#ebebdf]" 
                        onClick={() => setOpen(!open)} 
                        aria-label="Menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {open && (
                    <div className="md:hidden bg-[#1a1264] border-t border-[#ebebdf]/10">
                        <div className="flex flex-col items-center py-6">
                            {nav.map(n => (
                                <a
                                    key={n.id}
                                    href={`#${n.id}`}
                                    onClick={() => setOpen(false)}
                                    className={`py-4 w-full text-center text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                                        activeSection === n.id
                                        ? 'text-[#1a1264] bg-[#ebebdf]'
                                        : 'text-[#ebebdf] hover:bg-white/5'
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