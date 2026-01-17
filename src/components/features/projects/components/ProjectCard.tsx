import { Github } from 'lucide-react'
import type { ProjectCardProps } from '../types'

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div
            className="group relative rounded-2xl bg-[#121212] border border-white/5 overflow-hidden hover:border-violet-500/30 transition-all duration-300 h-full flex flex-col"
        >
            {/* Abstract Header / Cover */}
            <div className="h-24 bg-gradient-to-br from-violet-900/20 to-black relative overflow-hidden group-hover:from-violet-900/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                {/* Header Actions */}
                <div className="absolute top-4 right-4 flex items-center gap-3 z-10 w-full justify-between px-4 sm:px-4 sm:right-0 sm:w-auto sm:justify-end">
                    <span className="text-xs font-mono text-violet-300/60 bg-black/40 px-2 py-1 rounded border border-white/5 backdrop-blur-sm order-2 sm:order-1">
                        {project.period}
                    </span>

                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/50 transition-all backdrop-blur-sm order-1 sm:order-2 group/repo"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <Github size={14} className="group-hover/repo:text-violet-400 transition-colors" />
                            <span>Repositorio</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-10 -mt-12">
                {/* Title Section */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm font-medium text-violet-400/80 uppercase tracking-wider">
                        {project.subtitle}
                    </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3 mb-8 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-violet-500 mt-1">▹</span>
                            <span className="leading-relaxed">{achievement}</span>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-medium text-gray-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 group-hover:border-violet-500/20 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    )
}
