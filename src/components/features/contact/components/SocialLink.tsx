import type { LucideIcon } from 'lucide-react'

interface SocialLinkProps {
    href: string
    icon: LucideIcon
    label: string
}

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300 overflow-hidden"
            aria-label={`Visitar mi perfil de ${label}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon className="w-6 h-6 text-white/70 group-hover:text-violet-400 transition-colors duration-300 relative z-10" />
        </a>
    )
}
