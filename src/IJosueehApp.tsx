import { Navbar, Hero, About, Skills, Experience, Projects, PageLoader, SectionDivider } from './components'
import { usePageLoader } from './hooks/usePageLoader'

export const IJosueehApp = () => {
    const { isLoading, handleLoadingComplete } = usePageLoader()

    return (
        <>
            <PageLoader isVisible={isLoading} />

            <div className="bg-black min-h-screen">
                <Navbar />
                <Hero onBackgroundReady={handleLoadingComplete} />
                <SectionDivider />
                <About />
                <SectionDivider />
                <Skills />
                <SectionDivider />
                <Experience />
                <SectionDivider />
                <Projects />
            </div>
        </>
    )
}
