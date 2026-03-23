import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projectsData'

export default function Projects() {
    const [filter, setFilter] = useState('All')
    const tags = ['All', ...new Set(projects.flatMap(p => p.tags))]
    const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))

    return (
        <section id="projects" className="py-20 bg-[#ebebdf]">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-[#1a1264] mb-4 uppercase tracking-tighter">
                    Mes Projets
                </h2>
                <div className="w-24 h-1.5 bg-[#1a1264] mx-auto rounded-full" />
            </div>

            {/* Filtres : Boutons sans dégradés */}
            <div className="mt-4 flex gap-2 justify-center flex-wrap">
                {tags.map(t => (
                    <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`px-5 py-2 rounded-full text-sm font-bold border-2 border-[#1a1264] transition-all duration-300 ${
                            filter === t 
                            ? 'bg-[#1a1264] text-[#ebebdf]' 
                            : 'bg-transparent text-[#1a1264] hover:bg-[#1a1264] hover:text-[#ebebdf]'
                        }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(p => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    )
}