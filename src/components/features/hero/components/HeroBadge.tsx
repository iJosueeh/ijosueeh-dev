import type { HeroBadgeProps } from '../types'

export const HeroBadge = ({ text }: HeroBadgeProps) => {
    return (
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-500/20 backdrop-blur-sm border border-violet-500/40 rounded-full shadow-lg shadow-violet-500/20 animate-slide-up">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            <span className="text-violet-400 text-xs sm:text-sm font-mono tracking-wider">
                {text}
            </span>
        </div>
    )
}
