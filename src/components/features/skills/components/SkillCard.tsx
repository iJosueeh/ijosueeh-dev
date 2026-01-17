import type { SkillCardProps } from '../types'

export const SkillCard = ({ skill }: SkillCardProps) => {
    return (
        <div className="group relative p-4 mb-3 rounded-xl border border-white/5 bg-[#121212] hover:bg-[#1a1a1a] hover:border-violet-400/30 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 select-none cursor-default overflow-hidden transform-gpu backface-hidden">
            {/* Logo/Icon Container */}
            <div className="relative w-12 h-12 flex items-center justify-center p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300 z-10">
                {skill.icon ? (
                    <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                        draggable="false"
                    />
                ) : (
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                )}
            </div>

            {/* Skill Name */}
            <span className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors z-10 relative">
                {skill.name}
            </span>

            {/* Clean bottom glow effect - Simplified */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

            {/* Active Border Glow (Optional) */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        </div>
    )
}
