import React, { useRef, useState } from 'react'
import { sendForm } from '@emailjs/browser'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
    const form = useRef()
    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)
        setSuccess(null)

        sendForm('service_alkaqgs', 'template_omtdpps', form.current, 'wFjVpVyt_WD9jDc12')
            .then(() => {
                setSuccess(true)
                setSending(false)
                form.current.reset()
            })
            .catch(() => {
                setSuccess(false)
                setSending(false)
            })
    }

    return (
        <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Arrière-plan avec effets */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Informations de contact */}
                    <div className="lg:col-span-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-semibold text-white mb-6">Me contacter</h3>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="text-blue-400" size={20} />
                                <span className="text-gray-300">solangeilinga@gmail.com</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="text-blue-400" size={20} />
                                <span className="text-gray-300">+212 618-449 605</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <MapPin className="text-blue-400" size={20} />
                                <span className="text-gray-300">Casablanca, Maroc</span>
                            </div>
                        </div>

                        {/* Liens sociaux */}
                        <div className="mt-8">
                            <h4 className="text-lg font-medium text-white mb-4">Cliquez et Retrouvez-moi sur:</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://linkedin.com/in/solange-ilinga"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors flex items-center justify-center"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={30} className="text-white" />
                                </a>
                                <a
                                    href="https://github.com/Solangeilinga"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white hover:bg-gray-600 p-3 rounded-full transition-colors flex items-center justify-center"
                                    aria-label="GitHub"
                                >
                                    <Github size={30} className="text-black" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-semibold text-white mb-6">Envoyer un message</h3>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                                    <input
                                        name="user_name"
                                        id="user_name"
                                        placeholder="Votre nom"
                                        required
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        name="user_email"
                                        id="user_email"
                                        type="email"
                                        placeholder="Votre email"
                                        required
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Votre message"
                                    required
                                    rows={5}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full bg-blue-600 hover:bg-blue-700 hover:text-white hover:border-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {sending ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Envoyer le message
                                    </>
                                )}
                            </button>

                            {/* Messages de statut */}
                            {success === true && (
                                <div className="mt-4 p-3">
                                    <p className="text-green-400 text-center">Merci ! Je vous contacterai dans peu.</p>
                                </div>
                            )}
                            {success === false && (
                                <div className="mt-4 p-3 bg-red-900/30 border border-red-800 rounded-lg">
                                    <p className="text-red-400 text-center">Une erreur s'est produite. Veuillez réessayer plus tard.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}