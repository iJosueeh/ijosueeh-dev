import { lazy, Suspense } from 'react'
import { Navbar, SectionDivider } from './components'
import { Hero } from './components/features/hero/Hero'
import { About } from './components/features/about/About'
import { SectionLoader } from './components/ui/SectionLoader'

// Lazy load heavy sections for better initial load performance
const Skills = lazy(() => import('./components/features/skills/Skills').then(m => ({ default: m.Skills })))
const Experience = lazy(() => import('./components/features/experience/Experience').then(m => ({ default: m.Experience })))
const Projects = lazy(() => import('./components/features/projects/Projects').then(m => ({ default: m.Projects })))
const Contact = lazy(() => import('./components/features/contact/Contact').then(m => ({ default: m.Contact })))

export const IJosueehApp = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Suspense fallback={<SectionLoader />}>
                <Skills />
            </Suspense>
            <SectionDivider />
            <Suspense fallback={<SectionLoader />}>
                <Experience />
            </Suspense>
            <SectionDivider />
            <Suspense fallback={<SectionLoader />}>
                <Projects />
            </Suspense>
            <SectionDivider />
            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>
        </div>
    )
}
