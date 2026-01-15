import type { ReactNode } from 'react'

interface HeroContentProps {
    children: ReactNode
}

export const HeroContent = ({ children }: HeroContentProps) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20 text-center flex flex-col items-center">
            {children}
        </div>
    )
}
