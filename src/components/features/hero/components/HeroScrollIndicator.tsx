import type { HeroScrollIndicatorProps } from '../types'

export const HeroScrollIndicator = ({ text }: HeroScrollIndicatorProps) => {
    const handleScrollToAbout = () => {
        const aboutSection = document.querySelector('#about-section')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <button
            onClick={handleScrollToAbout}
            className="flex flex-col items-center gap-3 sm:gap-4 text-gray-500 hover:text-violet-400 transition-colors duration-300 animate-slide-up cursor-pointer group"
            style={{ animationDelay: '1s' }}
            aria-label="Scroll to about section"
        >
            <span className="text-[10px] sm:text-xs font-mono tracking-widest">{text}</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </button>
    )
}
