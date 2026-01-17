import type { HeroSubtitleProps } from '../types'

export const HeroSubtitle = ({ parts }: HeroSubtitleProps) => {
    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4 sm:px-0">
            {parts.subtitle}{' '}
            <span className="text-white font-bold">{parts.technologies}</span>{' '}
            {parts.subtitleEnd}{' '}
            <span className="text-white font-bold">{parts.interfaces}</span>{' '}
            {parts.interfacesEnd}
        </p>
    )
}
