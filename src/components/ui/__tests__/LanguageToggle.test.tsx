import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageToggle } from '../LanguageToggle'
import { LanguageProvider } from '@/context/language'

describe('LanguageToggle', () => {
    it('should render language toggle button', () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
            </LanguageProvider>
        )

        const button = screen.getByRole('button', { name: /toggle language/i })
        expect(button).toBeInTheDocument()
    })

    it('should display current opposite language', () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
            </LanguageProvider>
        )

        const button = screen.getByRole('button')
        expect(button).toHaveTextContent(/EN/i)
    })

    it('should toggle language on click', () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
            </LanguageProvider>
        )

        const button = screen.getByRole('button')
        const initialText = button.textContent

        fireEvent.click(button)

        // After click, language should change
        expect(button.textContent).not.toBe(initialText)
    })

    it('should have correct styling classes', () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
            </LanguageProvider>
        )

        const button = screen.getByRole('button')
        expect(button).toHaveClass('border-violet-500/30')
        expect(button).toHaveClass('text-violet-400')
    })
})
