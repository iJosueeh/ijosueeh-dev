import { useLanguage } from '../../../context/language'
import { ExperienceCard } from './components/ExperienceCard'
import type { Job } from './types'

export const Experience = () => {
    const { t } = useLanguage()

    // Ensuring type safety by manually casting or relying on implicit structure if types match
    const jobs: Job[] = t.experience.jobs

    return (
        <section id="experience-section" className="relative py-20 bg-black overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Title */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block">
                        {t.experience.title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-4 rounded-full" />
                </div>

                {/* Vertical Timeline Line */}
                <div className="absolute left-8 sm:left-1/2 top-40 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-violet-500/30 to-transparent -translate-x-1/2 hidden sm:block" />

                {/* Mobile Line (Left aligned) */}
                <div className="absolute left-8 top-40 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-violet-500/30 to-transparent sm:hidden" />

                <div className="space-y-12 relative">
                    {jobs.map((job, index) => (
                        <div key={index} className="relative">
                            {/* Desktop: Alternating Layout structure would go here, 
                                but for simplicity and readability of long text, 
                                a single centralized column or slightly offset design works best.
                                Let's stick to a clean vertical list with decorations for now,
                                as detailed content is better read linearly. 
                            */}

                            {/* Dot on timeline */}
                            <div className="absolute left-8 sm:left-1/2 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)] border-4 border-black -translate-x-1/2 mt-8 z-10" />

                            {/* Card Container - Offset to right on desktop for visual balance relative to line if we centered it,
                                but since we have card content, we'll shift it.
                                Actually, let's make it responsive:
                                Mobile: Card to right of line
                                Desktop: Alternating? Or classic "Line on left"?
                                Given the user has one main role, a "Line on Left" design is cleaner and more standard for single/few items.
                                Let's adjust the line position above to be left-aligned for consistency if items are few.
                                
                                REVISION: User has 1 item. A central line looks weird with 1 item on one side.
                                I'll switch to a "Left-aligned Timeline" for better scalability and single-item aesthetics.
                            */}

                            <div className="pl-16 sm:pl-24">
                                <ExperienceCard job={job} index={index} />
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
