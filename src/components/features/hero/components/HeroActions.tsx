import type { HeroActionsProps } from '../types'

export const HeroActions = ({ primaryText, secondaryText }: HeroActionsProps) => {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16 animate-slide-up w-full sm:w-auto px-4 sm:px-0" style={{ animationDelay: '0.6s' }}>
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-violet-500 text-white font-bold rounded-lg hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                {primaryText}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
            <a
                href="/CV - JOSUE ROYER TANTA CIEZA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-violet-300 text-violet-100 font-bold rounded-lg hover:bg-violet-300 hover:text-purple-900 hover:shadow-lg hover:shadow-violet-300/50 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
                {secondaryText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </a>
        </div>
    )
}
