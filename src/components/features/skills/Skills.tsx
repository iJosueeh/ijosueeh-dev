import { useInView } from '../../../hooks/useInView'
import { useLanguage } from '../../../context/language'
import { SkillCategory } from './components/SkillCategory'
import { SKILLS_DATA } from '../../../data/skills.data'

export const Skills = () => {
    const { t } = useLanguage()
    const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="skills-section" className="relative py-20 bg-black">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className={`text-center mb-16 transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block">
                        {t.skills.title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-4 rounded-full" />
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
                    {SKILLS_DATA.map((category, index) => (
                        <div
                            key={category.title}
                            className={`break-inside-avoid transition-all duration-700 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <SkillCategory
                                title={t.skills.categories[category.title as keyof typeof t.skills.categories]}
                                skills={category.skills}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}
