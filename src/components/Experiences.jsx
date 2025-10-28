import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "Stage en Développement Web Fullstack",
        company: "Ahiyoyo",
        location: "Cotonou, Bénin",
        period: "juillet 2025 - Septembre 2025",
        description: "Développement d'une plateforme en ligne pour une startup.",
        skills: ["React", "Node.js"]
    },
    {
        id: 2,
        title: "Stage en Community Management",
        company: "KPB Education",
        location: "à Distance",
        period: "Mars 2025",
        description: "Création d'un site statique sur le Japon.",
        skills: ["HTML", "CSS", "JavaScript"]
    }
];

const Experiences = () => {
    return (
        <section className="min-h-screen  py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
                        Mes Expériences
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="relative group"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                                }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

                                {/* Card */}
                                <div className="md:ml-20 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-purple-300 mb-2">
                                                <Briefcase size={18} />
                                                <span className="font-medium">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                                            <Calendar size={16} className="text-purple-300" />
                                            <span className="text-purple-200 text-sm font-medium">{exp.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400 transition-colors"
                                            >
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

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Experiences;