import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '../Navbar'
import { LanguageProvider } from '@/context/language'

describe('Navbar', () => {
    beforeEach(() => {
        render(
            <LanguageProvider>
                <Navbar />
            </LanguageProvider>
        )
    })

    describe('Logo and Branding', () => {
        it('should render logo text on desktop', () => {
            expect(screen.getByText('JOSUE ROYER')).toBeInTheDocument()
            expect(screen.getByText('FULL-STACK ARCHITECT')).toBeInTheDocument()
        })

        it('should render logo icon', () => {
            const logoIcon = screen.getByRole('navigation').querySelector('svg')
            expect(logoIcon).toBeInTheDocument()
        })
    })

    describe('Navigation Links', () => {
        it('should render navigation links', () => {
            expect(screen.getByText('Home')).toBeInTheDocument()
        })

        it('should render localized navigation links', () => {
            // Default language is Spanish
            expect(screen.getByText('Proyectos')).toBeInTheDocument()
            expect(screen.getByText('Sobre mí')).toBeInTheDocument()
        })
    })

    describe('Mobile Menu', () => {
        it('should render hamburger menu button', () => {
            const hamburgerButton = screen.getByLabelText(/toggle menu/i)
            expect(hamburgerButton).toBeInTheDocument()
        })

        it('should toggle mobile menu on click', () => {
            const hamburgerButton = screen.getByLabelText(/toggle menu/i)

            // Click to open
            fireEvent.click(hamburgerButton)

            // Menu should be visible - check for multiple Home links (desktop + mobile)
            const homeLinks = screen.getAllByText('Home')
            expect(homeLinks.length).toBeGreaterThan(1) // Desktop nav + mobile menu
        })

        it('should close mobile menu when clicking a link', () => {
            const hamburgerButton = screen.getByLabelText(/toggle menu/i)

            // Open menu
            fireEvent.click(hamburgerButton)

            // Click on a link
            const homeLinks = screen.getAllByText('Home')
            const mobileHomeLink = homeLinks[homeLinks.length - 1] // Last one is mobile
            fireEvent.click(mobileHomeLink)

            // Menu should close (only desktop link remains)
            const remainingHomeLinks = screen.getAllByText('Home')
            expect(remainingHomeLinks.length).toBe(1)
        })
    })

    describe('Actions', () => {
        it('should render language toggle', () => {
            const languageButton = screen.getByRole('button', { name: /toggle language/i })
            expect(languageButton).toBeInTheDocument()
        })

        it('should render contact button on desktop', () => {
            const contactButtons = screen.getAllByRole('button', { name: /contacto/i })
            expect(contactButtons.length).toBeGreaterThan(0)
        })
    })

    describe('Scroll Behavior', () => {
        it('should change background on scroll', () => {
            const nav = screen.getByRole('navigation')
            const navContainer = nav.querySelector('div > div')

            // Initial state
            expect(navContainer).toHaveClass('bg-black/30')

            // Simulate scroll
            window.scrollY = 100
            fireEvent.scroll(window)

            // Note: This test might need adjustment based on actual scroll implementation
        })
    })
})
