import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/language'
import { LanguageToggle } from '../ui/LanguageToggle'

export const Navbar = () => {
    const { t, language } = useLanguage()
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                <div className={`flex items-center justify-between backdrop-blur-xl border rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 shadow-2xl transition-all duration-300 ${scrolled
                    ? 'bg-black/60 border-white/20'
                    : 'bg-black/30 border-white/10'
                    }`}>
                    {/* Logo */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20 shadow-lg shadow-violet-500/30">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                            </svg>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white font-bold text-sm sm:text-base tracking-tight">JOSUE ROYER</div>
                            <div className="text-violet-400 text-[9px] sm:text-[10px] tracking-widest">FULL-STACK ARCHITECT</div>
                        </div>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <a href="#home" className="relative text-white hover:text-violet-400 transition-colors duration-200 text-sm font-medium group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#projects" className="relative text-white hover:text-violet-400 transition-colors duration-200 text-sm font-medium group">
                            {language === 'es' ? 'Proyectos' : 'Projects'}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#about" className="relative text-white hover:text-violet-400 transition-colors duration-200 text-sm font-medium group">
                            {language === 'es' ? 'Sobre mí' : 'About'}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <LanguageToggle />
                        <button className="hidden sm:block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white text-black font-bold rounded-lg hover:bg-violet-400 hover:scale-105 hover:shadow-lg hover:shadow-violet-400/50 transition-all duration-300 text-xs sm:text-sm">
                            {t.nav.contact}
                        </button>

                        {/* Hamburger Menu Button - Mobile/Tablet */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 text-white hover:text-violet-400 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-2 backdrop-blur-xl bg-black/60 border border-white/20 rounded-xl shadow-2xl overflow-hidden animate-slide-down">
                        <div className="flex flex-col p-4 space-y-3">
                            <a
                                href="#home"
                                onClick={closeMobileMenu}
                                className="text-white hover:text-violet-400 transition-colors duration-200 text-sm font-medium py-2 px-3 hover:bg-violet-500/10 rounded-lg"
                            >
                                Home
                            </a>
                            <a
                                href="#projects"
                                onClick={closeMobileMenu}
                                className="text-white hover:text-violet-400 transition-colors duration-200 text-sm font-medium py-2 px-3 hover:bg-violet-500/10 rounded-lg"
                            >
                                {language === 'es' ? 'Proyectos' : 'Projects'}
                            </a>
                            <a
                                href="#about"
                                onClick={closeMobileMenu}
                                className="text-white hover:text-violet-400 transition-colors duration-200 text-sm font-medium py-2 px-3 hover:bg-violet-500/10 rounded-lg"
                            >
                                {language === 'es' ? 'Sobre mí' : 'About'}
                            </a>
                            <button className="sm:hidden w-full px-4 py-2 bg-white text-black font-bold rounded-lg hover:bg-violet-400 transition-all duration-300 text-sm">
                                {t.nav.contact}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
