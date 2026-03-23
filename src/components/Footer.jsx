import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        /* fixed bottom-0 : fixe le footer en bas de l'écran
           z-50 : assure qu'il passe au-dessus du contenu
           border-t-2 : ligne de séparation nette en bleu profond
        */
        <footer className="fixed bottom-0 w-full py-4 bg-[#1a1264] text-[#ebebdf] z-50 border-t-2 border-[#1a1264] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    {/* Copyright avec police grasse pour la lisibilité sur fond bleu */}
                    <div className="text-xs md:text-sm font-bold tracking-wide">
                        © {new Date().getFullYear()} Solange ILINGA. Tous droits réservés.
                    </div>

                    {/* Icônes sociales - Couleurs conservées au survol */}
                    <div className="flex space-x-6">
                        <a 
                            href="https://linkedin.com/in/solange-ilinga" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#ebebdf] hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a 
                            href="https://github.com/Solangeilinga" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#ebebdf] hover:text-white transition-colors"
                        >
                            <Github size={22} />
                        </a>
                        <a 
                            href="mailto:solangeilinga@gmail.com" 
                            className="text-[#ebebdf] hover:text-red-400 transition-colors"
                        >
                            <Mail size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}