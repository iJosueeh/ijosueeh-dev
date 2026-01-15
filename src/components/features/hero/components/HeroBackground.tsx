import Silk from '../../../ui/Silk'
import { FloatingParticles } from '../../../ui/FloatingParticles'

export const HeroBackground = () => {
    return (
        <>
            <div className="absolute inset-0 z-0">
                <Silk
                    color="#480e58"
                    speed={15}
                    noiseIntensity={0}
                    scale={1}
                    rotation={0}
                />
            </div>

            {/* Subtle color tint overlay - Purple theme */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-purple-950/30 via-transparent to-violet-900/30 pointer-events-none" />

            {/* Noise texture overlay for depth */}
            <div className="absolute inset-0 z-[1] opacity-[0.015] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
            }} />

            {/* Radial vignette for focus */}
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(59, 7, 100, 0.4) 100%)'
            }} />

            {/* Background Grid Effect - More subtle */}
            <div className="absolute inset-0 z-[2] opacity-20 bg-[linear-gradient(to_right,#4a1a6e_1px,transparent_1px),linear-gradient(to_bottom,#4a1a6e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

            {/* Floating Particles */}
            <FloatingParticles count={30} className="z-[3]" />

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none z-[5]" />
        </>
    )
}
