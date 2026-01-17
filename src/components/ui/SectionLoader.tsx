export const SectionLoader = () => {
    return (
        <div className="relative py-20 bg-black flex items-center justify-center min-h-[400px]">
            {/* Animated loader */}
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-4 border-violet-500/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-transparent border-t-violet-500 rounded-full animate-spin" />
                </div>

                {/* Loading text */}
                <p className="text-sm text-gray-500 font-mono">Cargando...</p>
            </div>

            {/* Background gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-900/10 blur-[100px] rounded-full pointer-events-none" />
        </div>
    )
}
