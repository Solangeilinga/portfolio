import React from "react";
import { LuExternalLink } from "react-icons/lu";


export default function ProjectCard({ project }) {
    return (
        <div className="bg-slate-800 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
            {/* Image illustrative */}
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                />
            )}

            {/* Titre */}
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            {/* Tags/Technologies (Ajout) */}
            {project.Technologies && project.Technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.Technologies.map((Technologies, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-indigo-200 rounded-full text-xs font-medium border border-indigo-400/30 hover:border-indigo-400 transition-colors whitespace-nowrap"
                        >
                            {Technologies}
                        </span>
                    ))}
                </div>
            )}

            {/* Liens */}
            <div className="flex gap-3">
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-6 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Repo
                        <LuExternalLink size={16} />
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-6 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Démo
                        <LuExternalLink size={16} />
                    </a>
                )}
            </div>
        </div>
    );
}