import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../../context/language'
import { SocialLink } from './components/SocialLink'
import { Footer } from './components/Footer'

export const Contact = () => {
    const { t } = useLanguage()
    const [copied, setCopied] = useState(false)
    const email = "jtantacieza@gmail.com" 

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contact-section" className="relative bg-black pt-20 sm:pt-32 flex flex-col min-h-[60vh] justify-between">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full max-w-[800px] h-[400px] bg-violet-900/20 blur-[120px] rounded-full opacity-50" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full flex-grow flex flex-col items-center justify-center text-center space-y-12">

                {/* Header */}
                <div className="space-y-6 animate-slide-up">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
                        {t.contact.title}
                    </h2>
                    <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        {t.contact.subtitle}
                    </p>
                </div>

                {/* Main Action - Email */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <a
                        href={`mailto:${email}`}
                        className="group flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-500 transition-all duration-300 w-full sm:w-auto hover:shadow-lg hover:shadow-violet-600/25"
                    >
                        <Mail className="w-5 h-5" />
                        <span>{t.contact.email}</span>
                    </a>

                    <button
                        onClick={handleCopyEmail}
                        className="group flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                    >
                        {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-white/60 group-hover:text-white" />}
                        <span className={copied ? "text-green-400" : "text-white/60 group-hover:text-white"}>
                            {copied ? t.contact.copied : t.contact.copy}
                        </span>
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <SocialLink
                        href="https://github.com/iJosueeh"
                        icon={Github}
                        label="GitHub Profile"
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/josue-tanta"
                        icon={Linkedin}
                        label="LinkedIn Profile"
                    />
                </div>
            </div>

            <Footer />
        </section>
    )
}
