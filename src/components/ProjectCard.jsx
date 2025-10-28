import React from "react";


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

            {/* Liens */}
            <div className="flex gap-3">
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                    >
                        Code
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        Démo
                    </a>
                )}
            </div>
        </div>
    );
}
