import type { HeroTitleProps } from '../types'
import TextType from '@/components/ui/TextType'

export const HeroTitle = ({ texts }: HeroTitleProps) => {
    return (
        <div style={{ animationDelay: '0.2s' }} className="animate-slide-up">
            <TextType
                text={texts}
                as="h1"
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 sm:mb-8 tracking-tight max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
                typingSpeed={50}
                pauseDuration={2000}
                deletingSpeed={30}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-cyan-400"
                loop={true}
                startOnVisible={true}
                textColors={['#ffffff', '#d40696ff', '#c13bf6ff']}
            />
        </div>
    )
}
