import Silk from '../../../ui/Silk'

export const HeroBackground = () => {
    return (
        <>
            {/* Main Silk background */}
            <div className="absolute inset-0 z-0">
                <Silk
                    color="#480e58"
                    speed={15}
                    noiseIntensity={0}
                    scale={1}
                    rotation={0}
                />
            </div>

            {/* Minimal color tint overlay - Purple theme */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-purple-950/20 via-transparent to-transparent pointer-events-none" />
        </>
    )
}
