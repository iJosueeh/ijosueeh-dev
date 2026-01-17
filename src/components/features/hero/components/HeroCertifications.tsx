import type { HeroCertificationsProps } from '../types'

export const HeroCertifications = ({ certifications }: HeroCertificationsProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-16 sm:mb-18 md:mb-20 px-4 sm:px-0">
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-violet-500/20 to-transparent backdrop-blur-sm border border-violet-500/40 rounded-lg hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-violet-500/30 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                </div>
                <span className="text-white font-mono text-xs sm:text-sm font-semibold">{certifications.aws}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-fuchsia-500/20 to-transparent backdrop-blur-sm border border-fuchsia-500/40 rounded-lg hover:border-fuchsia-500/60 hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-fuchsia-500/30 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
                <span className="text-white font-mono text-xs sm:text-sm font-semibold">{certifications.postman}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-purple-500/20 to-transparent backdrop-blur-sm border border-purple-500/40 rounded-lg hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-500/30 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                </div>
                <span className="text-white font-mono text-xs sm:text-sm font-semibold">{certifications.scrum}</span>
            </div>
        </div>
    )
}
