import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projectsData'


export default function Projects() {
    const [filter, setFilter] = useState('All')
    const tags = ['All', ...new Set(projects.flatMap(p => p.tags))]
    const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))

    return (
        <section id="projects" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Mes Projets
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="mt-4 flex gap-2 justify-center flex-wrap">
                {tags.map(t => (
                    <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`px-3 py-1 rounded ${filter === t ? 'bg-blue-600  text-white' : 'bg-slate-700 text-white'
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(p => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    )
}
