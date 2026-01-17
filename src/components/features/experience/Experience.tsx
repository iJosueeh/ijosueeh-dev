import { useInView } from '../../../hooks/useInView'
import { useLanguage } from '../../../context/language'
import { ExperienceCard } from './components/ExperienceCard'
import type { Job } from './types'

export const Experience = () => {
    const { t } = useLanguage()
    const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

    // Ensuring type safety by manually casting or relying on implicit structure if types match
    const jobs: Job[] = t.experience.jobs

    return (
        <section id="experience-section" className="relative py-20 bg-black overflow-hidden">
            <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Title */}
                <div className={`text-center mb-16 transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block">
                        {t.experience.title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-4 rounded-full" />
                </div>

                {/* Vertical Timeline Line */}
                <div className={`absolute left-8 sm:left-1/2 top-40 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-violet-500/30 to-transparent -translate-x-1/2 hidden sm:block transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`} />

                {/* Mobile Line (Left aligned) */}
                <div className={`absolute left-8 top-40 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-violet-500/30 to-transparent sm:hidden transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`} />

                <div className="space-y-12 relative">
                    {jobs.map((job, index) => (
                        <div key={index} className="relative">
                            {/* Dot on timeline */}
                            <div className={`absolute left-8 sm:left-1/2 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)] border-4 border-black -translate-x-1/2 mt-8 z-10 transition-all duration-500 delay-500 transform ${isInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />

                            <div
                                className={`pl-16 sm:pl-24 transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <ExperienceCard job={job} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}
