import { lazy, Suspense } from 'react'
import { useLanguage } from '../../../context/language'
import { HeroContent } from './components/HeroContent'
import { HeroBadge } from './components/HeroBadge'
import { HeroTitle } from './components/HeroTitle'
import { HeroSubtitle } from './components/HeroSubtitle'
import { HeroActions } from './components/HeroActions'
import { HeroCertifications } from './components/HeroCertifications'
import { HeroScrollIndicator } from './components/HeroScrollIndicator'

// Lazy load the heavy HeroBackground component (contains Three.js)
const HeroBackground = lazy(() => import('./components/HeroBackground').then(module => ({ default: module.HeroBackground })))

export const Hero = () => {
    const { t, language } = useLanguage()

    return (
        <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
            <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                <HeroBackground />
            </Suspense>

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
