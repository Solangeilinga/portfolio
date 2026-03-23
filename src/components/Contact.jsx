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
        <section id="contact" className="py-20 bg-[#ebebdf] relative overflow-hidden">
            {/* Arrière-plan : suppression des effets de flou et dégradés */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1264] mb-4 uppercase tracking-tighter">
                        Contact
                    </h2>
                    <div className="w-24 h-1.5 bg-[#1a1264] mx-auto rounded-full mb-8" />
                    <p className="text-[#1a1264]/70 max-w-2xl mx-auto font-bold">
                        N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Informations de contact */}
                    <div className="lg:col-span-1 bg-white rounded-2xl p-8 border-2 border-[#1a1264] shadow-[8px_8px_0px_0px_rgba(26,18,100,1)]">
                        <h3 className="text-xl font-black text-[#1a1264] mb-8 uppercase tracking-tight">Me contacter</h3>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <Mail className="text-blue-400" size={24} /> {/* Couleur conservée */}
                                <span className="text-[#1a1264] font-bold text-sm break-all">solangeilinga@gmail.com</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Phone className="text-blue-400" size={24} /> {/* Couleur conservée */}
                                <span className="text-[#1a1264] font-bold">+212 618-449 605</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <MapPin className="text-blue-400" size={24} /> {/* Couleur conservée */}
                                <span className="text-[#1a1264] font-bold">Casablanca, Maroc</span>
                            </div>
                        </div>

                        {/* Liens sociaux */}
                        <div className="mt-12">
                            <h4 className="text-sm font-black text-[#1a1264] mb-6 uppercase tracking-widest">Retrouvez-moi sur :</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://linkedin.com/in/solange-ilinga"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:opacity-90 p-4 rounded-xl transition-all flex items-center justify-center border-2 border-[#1a1264]"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} className="text-white" /> {/* Couleur conservée */}
                                </a>
                                <a
                                    href="https://github.com/Solangeilinga"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white hover:bg-gray-100 p-4 rounded-xl transition-all flex items-center justify-center border-2 border-[#1a1264]"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} className="text-black" /> {/* Couleur conservée */}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-8 border-2 border-[#1a1264]">
                        <h3 className="text-xl font-black text-[#1a1264] mb-8 uppercase tracking-tight">Envoyer un message</h3>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-xs font-black text-[#1a1264] mb-2 uppercase tracking-widest">Nom</label>
                                    <input
                                        name="user_name"
                                        id="user_name"
                                        placeholder="Votre nom"
                                        required
                                        className="w-full bg-[#ebebdf] border-2 border-[#1a1264] rounded-xl px-4 py-3 text-[#1a1264] font-bold focus:outline-none focus:bg-white transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-xs font-black text-[#1a1264] mb-2 uppercase tracking-widest">Email</label>
                                    <input
                                        name="user_email"
                                        id="user_email"
                                        type="email"
                                        placeholder="Votre email"
                                        required
                                        className="w-full bg-[#ebebdf] border-2 border-[#1a1264] rounded-xl px-4 py-3 text-[#1a1264] font-bold focus:outline-none focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-black text-[#1a1264] mb-2 uppercase tracking-widest">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Votre message"
                                    required
                                    rows={5}
                                    className="w-full bg-[#ebebdf] border-2 border-[#1a1264] rounded-xl px-4 py-3 text-[#1a1264] font-bold focus:outline-none focus:bg-white transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full bg-[#1a1264] text-[#ebebdf] font-black py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                            >
                                {sending ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#ebebdf]"></div>
                                        Envoi...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="text-white" />
                                        Envoyer le message
                                    </>
                                )}
                            </button>

                            {/* Messages de statut */}
                            {success === true && (
                                <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-xl">
                                    <p className="text-green-700 font-bold text-center text-sm uppercase">Merci ! Je vous contacterai très bientôt.</p>
                                </div>
                            )}
                            {success === false && (
                                <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 rounded-xl">
                                    <p className="text-red-700 font-bold text-center text-sm uppercase">Une erreur s'est produite. Veuillez réessayer.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}