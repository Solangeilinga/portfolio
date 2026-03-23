import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "Stage en Développement Web Fullstack",
        company: "Ahiyoyo",
        location: "Cotonou, Bénin",
        period: "juillet 2025 - Septembre 2025",
        description: "Refonte de la plateforme en ligne pour la startup",
        skills: ["React", "Node.js"]
    },
    {
        id: 2,
        title: "Stage en Community Management",
        company: "KPB Education",
        location: "Distance",
        period: "Juin 2025 - Septembre 2025",
        description: "Gestion et animation des réseaux sociaux",
        skills: ["Sprout", "ManyChat", "HootSuite", "AgoraPulse"]
    }
];

const Experiences = () => {
    return (
        <section className="min-h-screen py-12 md:py-20 w-full relative overflow-hidden bg-[#ebebdf]">
            {/* Background effects supprimés pour rester sur un fond crème uni */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1264] mb-4 tracking-tight">
                        Mes Expériences Professionnelles
                    </h2>
                    {/* Barre unie sans dégradé */}
                    <div className="w-24 h-1 bg-[#1a1264] mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline line : Ligne unie en bleu profond */}
                    <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#1a1264] hidden sm:block opacity-30"></div>

                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative group animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                                {/* Timeline dot : Point uni bleu profond */}
                                <div className="absolute left-3 sm:left-5 md:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#1a1264] rounded-full border-2 sm:border-4 border-[#ebebdf] hidden sm:block group-hover:scale-125 transition-transform duration-300"></div>

                                {/* Card : Fond blanc avec bordure nette */}
                                <div className="sm:ml-12 md:ml-20 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-[#1a1264] hover:shadow-[8px_8px_0px_0px_rgba(26,18,100,0.1)] transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1264] mb-2 leading-tight">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-[#1a1264] font-bold mb-2">
                                                <Briefcase size={16} className="sm:w-4 sm:h-4" />
                                                <span className="text-sm sm:text-base uppercase tracking-wider">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[#1a1264]/70 text-xs sm:text-sm">
                                                <MapPin size={14} className="sm:w-4 sm:h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        {/* Badge période : Fond bleu, texte crème */}
                                        <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-[#1a1264] rounded-lg self-start sm:self-auto">
                                            <Calendar size={14} className="text-[#ebebdf] sm:w-4 sm:h-4" />
                                            <span className="text-[#ebebdf] text-xs sm:text-sm font-bold whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-[#1a1264]/80 leading-relaxed mb-4 text-sm sm:text-base font-medium">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {exp.skills.map((skill, idx) => (
                                            /* Tags de compétences : Aplat uni bleu profond sur crème */
                                            <span key={idx} className="px-2 py-1 sm:px-3 sm:py-1 bg-[#ebebdf] text-[#1a1264] rounded-md text-xs sm:text-sm font-bold border border-[#1a1264] transition-colors whitespace-nowrap">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;