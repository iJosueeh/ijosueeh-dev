import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'
import { LanguageProvider } from '@/context/language'

describe('Hero', () => {
    beforeEach(() => {
        render(
            <LanguageProvider>
                <Hero />
            </LanguageProvider>
        )
    })

    describe('Hero Badge', () => {
        it('should render hero badge with text', () => {
            expect(screen.getByText(/ARQUITECTANDO ECOSISTEMAS ESCALABLES/i)).toBeInTheDocument()
        })
    })

    describe('Hero Title', () => {
        it('should render hero title container', () => {
            // TextType component renders text dynamically, check for container
            const container = document.querySelector('h1')
            expect(container).toBeInTheDocument()
        })
    })

    describe('Hero Subtitle', () => {
        it('should render subtitle with highlighted technologies', () => {
            expect(screen.getByText(/.NET y Java/i)).toBeInTheDocument()
        })

        it('should render subtitle with highlighted interfaces', () => {
            expect(screen.getByText(/Angular y React/i)).toBeInTheDocument()
        })
    })

    describe('Hero Actions', () => {
        it('should render primary action button', () => {
            const stackButton = screen.getByRole('button', { name: /explorar stack/i })
            expect(stackButton).toBeInTheDocument()
        })

        it('should render CV download link', () => {
            const cvLink = screen.getByRole('link', { name: /ver cv/i })
            expect(cvLink).toBeInTheDocument()
            expect(cvLink).toHaveAttribute('href', '/CV - JOSUE ROYER TANTA CIEZA.pdf')
            expect(cvLink).toHaveAttribute('target', '_blank')
            expect(cvLink).toHaveAttribute('rel', 'noopener noreferrer')
        })
    })

    describe('Hero Certifications', () => {
        it('should render all certification badges', () => {
            expect(screen.getByText(/AWS ARCHITECT I/i)).toBeInTheDocument()
            expect(screen.getByText(/POSTMAN EXPERT/i)).toBeInTheDocument()
            expect(screen.getByText(/SCRUM MASTER/i)).toBeInTheDocument()
        })
    })

    describe('Hero Scroll Indicator', () => {
        it('should render scroll indicator', () => {
            expect(screen.getByText(/DESPLÁZATE PARA EXPLORAR/i)).toBeInTheDocument()
        })
    })

    describe('Hero Structure', () => {
        it('should render hero section with proper classes', () => {
            const heroSection = document.querySelector('section')
            expect(heroSection).toBeInTheDocument()
            expect(heroSection).toHaveClass('min-h-screen')
        })
    })
})
