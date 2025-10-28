import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const nav = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    {id: 'experiences',label: 'Expériences'},
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'certificates', label: 'Certificats' },
    { id: 'contact', label: 'Contact' }
    
]

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed w-full z-30">
            <div className="backdrop-blur-sm  bg-surface">
                <div className="container mx-auto px-4 flex items-center justify-between h-16">
                    <a href="#home" className="text-xl font-bold">Solange ILINGA</a>

                    <nav className="hidden md:flex gap-6">
                        {nav.map(n => <a key={n.id} href={`#${n.id}`} className="hover:text-indigo-400">{n.label}</a>)}
                    </nav>

                    <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
                        {open ? <X /> : <Menu />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden bg-slate-800">
                        <div className="flex flex-col items-center py-4">
                            {nav.map(n => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-2">{n.label}</a>)}
                        </div>
                    </div>
                )}
            </div>
        </motion.header>
    )
}
