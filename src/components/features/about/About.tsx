import { useInView } from '../../../hooks/useInView'
import { useLanguage } from '../../../context/language'
import { AboutContent } from './components/AboutContent'
import { AboutStats } from './components/AboutStats'
import { AboutImage } from './components/AboutImage'

export const About = () => {
    const { t } = useLanguage()
    const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section id="about-section" className="min-h-screen bg-black relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
            <div ref={ref} className="max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side - Content with stagger animation */}
                    <div className={`flex flex-col space-y-8 transition-all duration-1000 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <AboutContent
                            title={t.about.title}
                            paragraph1={t.about.paragraph1}
                            paragraph2={t.about.paragraph2}
                        />
                        <AboutStats
                            deploymentsLabel={t.about.stats.deployments}
                            uptimeLabel={t.about.stats.uptime}
                        />
                    </div>

                    {/* Right side - Image with delay */}
                    <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <AboutImage />
                    </div>
                </div>
            </div>
        </section>
    )
}

