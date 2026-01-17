export const SectionDivider = () => {
    return (
        <div className="relative w-full h-32 bg-black">
            {/* Gradient fade from purple to black - more aggressive */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black/80 to-black" />

            {/* Very subtle glowing line in the middle */}
            <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto px-8">
                    <div className="relative">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 blur-2xl bg-violet-500/10" />
                        {/* Very thin subtle line */}
                        <div className="relative h-[0.5px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    )
}
