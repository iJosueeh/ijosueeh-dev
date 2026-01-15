import type { HeroScrollIndicatorProps } from '../types'

export const HeroScrollIndicator = ({ text }: HeroScrollIndicatorProps) => {
    return (
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-gray-500 animate-slide-up" style={{ animationDelay: '1s' }}>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest">{text}</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    )
}
