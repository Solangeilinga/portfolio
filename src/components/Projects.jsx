import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projectsData'

export default function Projects() {
    const [filter, setFilter] = useState('All')
    const [animating, setAnimating] = useState(false)
    const [displayedFilter, setDisplayedFilter] = useState('All')
    const [titleVisible, setTitleVisible] = useState(false)
    const [filtersVisible, setFiltersVisible] = useState(false)
    const titleRef = useRef(null)
    const filtersRef = useRef(null)

    const tags = ['All', ...new Set(projects.flatMap(p => p.tags))]
    const filtered = displayedFilter === 'All' ? projects : projects.filter(p => p.tags.includes(displayedFilter))

    useEffect(() => {
        const obs = (ref, setter) => {
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setter(true) },
                { threshold: 0.2 }
            )
            if (ref.current) observer.observe(ref.current)
            return observer
        }
        const o1 = obs(titleRef, setTitleVisible)
        const o2 = obs(filtersRef, setFiltersVisible)
        return () => { o1.disconnect(); o2.disconnect() }
    }, [])

    const handleFilter = (tag) => {
        if (tag === filter || animating) return
        setAnimating(true)
        setFilter(tag)
        setTimeout(() => {
            setDisplayedFilter(tag)
            setAnimating(false)
        }, 300)
    }

    return (
        <>
            <style>{`
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to   { opacity: 0; transform: translateY(-16px); }
                }
                .anim-enter {
                    opacity: 0;
                    animation: slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .grid-exit { animation: fadeOut 0.3s ease forwards; }
                .grid-enter { animation: slideUpFade 0.4s cubic-bezier(0.22,1,0.36,1) forwards; }
            `}</style>

            <section id="projects" className="py-20 bg-[#ebebdf]">

                <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? 'anim-enter' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1264] mb-4 uppercase tracking-tighter">
                        Mes Projets
                    </h2>
                    <div className="w-24 h-1.5 bg-[#1a1264] mx-auto rounded-full" />
                </div>

                <div ref={filtersRef}
                    className={`mt-4 flex gap-2 justify-center flex-wrap ${filtersVisible ? 'anim-enter' : 'opacity-0'}`}
                    style={{ animationDelay: '0.1s' }}>
                    {tags.map(t => (
                        <button key={t} onClick={() => handleFilter(t)}
                            className={`px-5 py-2 rounded-full text-sm font-bold border-2 border-[#1a1264] transition-all duration-300 ${
                                filter === t
                                    ? 'bg-[#1a1264] text-[#ebebdf] scale-105'
                                    : 'bg-transparent text-[#1a1264] hover:bg-[#1a1264] hover:text-[#ebebdf]'
                            }`}>
                            {t}
                        </button>
                    ))}
                </div>

                <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${animating ? 'grid-exit' : 'grid-enter'}`}>
                    {filtered.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </section>
        </>
    )
}