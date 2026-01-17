interface AboutContentProps {
    title: string
    paragraph1: string
    paragraph2: string
}

export const AboutContent = ({ title, paragraph1, paragraph2 }: AboutContentProps) => {
    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {title}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {paragraph1}
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.25s' }}>
                {paragraph2}
            </p>
        </div>
    )
}
