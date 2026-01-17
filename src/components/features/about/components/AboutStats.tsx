import type { AboutStatsProps } from '../types'

export const AboutStats = ({ deploymentsLabel, uptimeLabel }: AboutStatsProps) => {
    return (
        <div className="flex gap-8 sm:gap-12 mb-8">
            <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold text-white mb-1">50+</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{deploymentsLabel}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold text-white mb-1">100%</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{uptimeLabel}</span>
            </div>
        </div>
    )
}
