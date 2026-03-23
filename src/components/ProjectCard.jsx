import React from "react";
import { LuExternalLink } from "react-icons/lu";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-white border-2 border-[#1a1264] rounded-xl p-4 shadow-md hover:shadow-[8px_8px_0px_0px_rgba(26,18,100,1)] transition-all duration-300 hover:-translate-y-1">
            {/* Image illustrative */}
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 w-full h-40 object-cover border border-[#1a1264]/10"
                />
            )}

            {/* Titre en Bleu Profond */}
            <h3 className="text-xl font-black text-[#1a1264] mb-2 uppercase tracking-tight">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#1a1264]/80 text-sm mb-4 font-medium leading-snug">
                {project.description}
            </p>

            {/* Tags/Technologies : Suppression du dégradé, passage en aplat uni */}
            {project.Technologies && project.Technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.Technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-[#ebebdf] text-[#1a1264] rounded-md text-[10px] font-black uppercase border border-[#1a1264] whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            {/* Liens : Boutons unis en Bleu Profond */}
            <div className="flex gap-3">
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#1a1264] text-[#ebebdf] rounded-lg hover:opacity-90 transition-opacity"
                    >
                        REPO
                        <LuExternalLink size={14} />
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#1a1264] text-[#ebebdf] rounded-lg hover:opacity-90 transition-opacity"
                    >
                        DÉMO
                        <LuExternalLink size={14} />
                    </a>
                )}
            </div>
        </div>
    );
}