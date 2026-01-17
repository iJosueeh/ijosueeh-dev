import { useInView } from '../../../hooks/useInView'
import { useLanguage } from '../../../context/language'
import { ProjectCard } from './components/ProjectCard'
import type { ProjectItem } from './types'

export const Projects = () => {
    const { t } = useLanguage()
    const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

    // Manual cast or safe access
    const projectItems: ProjectItem[] = t.projects?.items || []
    const projectTitle = t.projects?.title || "PROJECTS"

    return (
        <section id="projects-section" className="relative py-20 bg-black">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className={`text-center mb-16 transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block">
                        {projectTitle}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-4 rounded-full" />
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {projectItems.map((project, index) => (
                        <div
                            key={index}
                            className={`h-full transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    )
}
