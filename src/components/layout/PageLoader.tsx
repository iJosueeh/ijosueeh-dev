import { useState } from 'react'

interface PageLoaderProps {
    isVisible: boolean
}

export const PageLoader = ({ isVisible }: PageLoaderProps) => {
    // Usar estado derivado en lugar de useEffect para evitar cascading renders
    const [hasFadedOut] = useState(false)

    // Si ya no es visible y ha terminado la animación, no renderizar
    if (!isVisible && hasFadedOut) {
        return null
    }

    return (
        <div
            className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${!isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            onTransitionEnd={() => {
                // El componente se desmontará naturalmente cuando isLoading sea false
            }}
        >
            <div className="relative flex flex-col items-center gap-6">
                {/* Spinner animado con tema purple */}
                <div className="relative">
                    {/* Círculo exterior - glow effect */}
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-purple-500/20 blur-xl animate-pulse" />

                    {/* Spinner principal */}
                    <div className="relative w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                </div>

                {/* Texto de carga */}
                <div className="flex flex-col items-center gap-2">
                    <p className="text-purple-300 text-sm font-medium tracking-wide">
                        Cargando
                    </p>

                    {/* Puntos animados */}
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
