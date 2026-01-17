import { useLanguage } from '../../../context/language'
import { AboutContent } from './components/AboutContent'
import { AboutStats } from './components/AboutStats'
import { AboutImage } from './components/AboutImage'

export const About = () => {
    const { t } = useLanguage()

    return (
        <section id="about-section" className="min-h-screen bg-black relative flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left side - Content */}
                    <div>
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

                    {/* Right side - Image */}
                    <div>
                        <AboutImage />
                    </div>
                </div>
            </div>
        </section>
    )
}
