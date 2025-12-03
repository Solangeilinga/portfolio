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
        description: "Gestion et animationdes réseaux sociaux",
        skills: ["Sprout", "ManyChat", "HootSuite", "AgoraPulse"]
    }
];

const Experiences = () => {
    return (
        <section className="min-h-screen py-12 md:py-20 w-full relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Mes Expériences
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 gradient-to-r from-blue-500 to-indigo-400 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 hidden sm:block"></div>

                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative group animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                                {/* Timeline dot */}
                                <div className="absolute left-3 sm:left-5 md:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full border-2 sm:border-4 border-slate-900 hidden sm:block group-hover:scale-125 transition-transform duration-300"></div>

                                {/* Card */}
                                <div className="sm:ml-12 md:ml-20 bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors leading-tight">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-blue-500 mb-2">
                                                <Briefcase size={16} className="sm:w-4 sm:h-4" />
                                                <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                                                <MapPin size={14} className="sm:w-4 sm:h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-indigo-500/20 rounded-full border border-indigo-400/30 self-start sm:self-auto">
                                            <Calendar size={14} className="text-blue-500 sm:w-4 sm:h-4" />
                                            <span className="text-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {exp.skills.map((skill, idx) => (
                                            <span key={idx} className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-indigo-200 rounded-full text-xs sm:text-sm font-medium border border-indigo-400/30 hover:border-indigo-400 transition-colors whitespace-nowrap">
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