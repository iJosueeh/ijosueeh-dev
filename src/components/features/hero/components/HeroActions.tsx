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
                download="CV-Josue-Royer-Tanta-Cieza.pdf"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-violet-300 text-violet-100 font-bold rounded-lg hover:bg-violet-300 hover:text-purple-900 hover:shadow-lg hover:shadow-violet-300/50 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
                {secondaryText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </a>
        </div>
    )
}
