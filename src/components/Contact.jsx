import React, { useRef, useState } from 'react'
import { sendForm } from '@emailjs/browser'

export default function Contact() {
    const form = useRef()
    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)
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
        <section id="contact" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
                <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full" />
            </div>

            <form ref={form} onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="user_name" placeholder="Votre nom" required className="p-3 bg-slate-800 rounded" />
                <input name="user_email" type="email" placeholder="Votre email" required className="p-3 bg-slate-800 rounded" />
                <textarea name="message" placeholder="Votre message" required className="p-3 bg-slate-800 rounded md:col-span-2"></textarea>
                <button type="submit" disabled={sending} className="px-6 py-2 bg-indigo-500 rounded text-white md:col-span-2">
                    {sending ? 'Envoi...' : 'Envoyer'}
                </button>
            </form>

            {success === true && <p className="mt-4 text-green-400">Merci, message envoyé !</p>}
            {success === false && <p className="mt-4 text-red-400">Erreur, réessaie plus tard.</p>}
        </section>
    )
}
