import { useLanguage } from '../../../context/language'
import { HeroContent } from './components/HeroContent'
import { HeroBadge } from './components/HeroBadge'
import { HeroTitle } from './components/HeroTitle'
import { HeroSubtitle } from './components/HeroSubtitle'
import { HeroActions } from './components/HeroActions'
import { HeroCertifications } from './components/HeroCertifications'
import { HeroScrollIndicator } from './components/HeroScrollIndicator'
import { HeroBackground } from './components/HeroBackground'

export const Hero = () => {
    const { t, language } = useLanguage()

    return (
        <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
            <HeroBackground />

            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/70 to-black pointer-events-none z-10" />

            <HeroContent>
                <HeroBadge text={t.hero.badge} />

                <HeroTitle
                    texts={language === 'es'
                        ? ["Hola, soy IJosueeh"]
                        : ["Hi, I'm IJosueeh"]
                    }
                />

                <HeroSubtitle parts={{
                    subtitle: t.hero.subtitle,
                    technologies: t.hero.technologies,
                    subtitleEnd: t.hero.subtitleEnd,
                    interfaces: t.hero.interfaces,
                    interfacesEnd: t.hero.interfacesEnd
                }} />

                <HeroActions
                    primaryText={t.hero.buttons.stack}
                    secondaryText={t.hero.buttons.cv}
                />

                <HeroCertifications certifications={t.hero.badges} />

                <HeroScrollIndicator text={t.hero.scrollText} />
            </HeroContent>
        </section>
    )
}

