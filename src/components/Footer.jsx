import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className=" py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className=" mb-4 md:mb-0">
                        © {new Date().getFullYear()} Solange ILINGA. Tous droits réservés.
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://linkedin.com/in/solange-ilinga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/Solangeilinga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="mailto:solangeilinga@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}