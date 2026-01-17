import type { AboutContentProps } from '../types'

export const AboutContent = ({ title, paragraph1, paragraph2 }: AboutContentProps) => {
    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8">
                {title}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {paragraph1}
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed">
                {paragraph2}
            </p>
        </div>
    )
}
