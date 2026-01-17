import { memo } from 'react'
import type { ExperienceCardProps } from '../types'

export const ExperienceCard = memo(({ job }: ExperienceCardProps) => {
    return (
        <div
            className="relative flex items-start gap-6 group"
        >
            {/* Timeline Line & Dot using pseudo-element styles on parent container in main component, 
                but here we handle the card content */}

            {/* Main Content Card */}
            <div className="flex-1 w-full bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-[#1a1a1a] hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                        {job.role}
                    </h3>
                    <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {job.period}
                    </span>
                </div>

                <div className="text-violet-400 font-medium mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {job.company}
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                    {job.description}
                </p>

                <div className="space-y-3 mb-6">
                    {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="text-violet-500 mt-1.5">▹</span>
                            <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {job.stack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-medium text-gray-400 px-3 py-1 rounded-lg bg-black/40 border border-white/10 group-hover:border-violet-500/30 group-hover:text-violet-300 transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
})
