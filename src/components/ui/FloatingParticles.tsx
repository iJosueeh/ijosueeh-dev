import { useMemo } from 'react'

interface FloatingParticlesProps {
    count?: number
    className?: string
}

// Generate random values outside of component to avoid impure function calls during render
const generateParticleData = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
        opacity: Math.random() * 0.5 + 0.2,
    }))
}

export const FloatingParticles = ({ count = 20, className = '' }: FloatingParticlesProps) => {
    const particles = useMemo(() => generateParticleData(count), [count])

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-cyan-400/30 animate-float"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.left}%`,
                        top: '100%',
                        opacity: particle.opacity,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                    }}
                />
            ))}
        </div>
    )
}
