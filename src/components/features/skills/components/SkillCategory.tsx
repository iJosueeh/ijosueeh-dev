import { memo } from 'react'
import type { SkillCategoryProps } from '../types'
import { SkillCard } from './SkillCard'

export const SkillCategory = memo(({ title, skills, index }: SkillCategoryProps) => {
    return (
        <div
            className="mb-6 break-inside-avoid animate-slide-up"
            style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
        >
            <div className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 border-b border-white/10 pb-4">
                    {title}
                </h3>

                <div className="flex flex-col gap-1">
                    {skills.map((skill, idx) => (
                        <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    )
})
