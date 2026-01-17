import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ExperienceCard } from './ExperienceCard'
import type { Job } from '../types'

describe('ExperienceCard Component', () => {
    const mockJob: Job = {
        role: 'Senior Developer',
        company: 'Tech Corp',
        period: '2024 - Present',
        description: 'Building cool stuff',
        achievements: ['Led a team', 'Improved performance'],
        stack: ['React', 'Node']
    }

    it('renders job information correctly', () => {
        render(<ExperienceCard job={mockJob} />)

        expect(screen.getByText('Senior Developer')).toBeInTheDocument()
        expect(screen.getByText('Tech Corp')).toBeInTheDocument()
        expect(screen.getByText('2024 - Present')).toBeInTheDocument()
        expect(screen.getByText('Building cool stuff')).toBeInTheDocument()
    })

    it('renders list of achievements', () => {
        render(<ExperienceCard job={mockJob} />)

        expect(screen.getByText('Led a team')).toBeInTheDocument()
        expect(screen.getByText('Improved performance')).toBeInTheDocument()
    })

    it('renders tech stack', () => {
        render(<ExperienceCard job={mockJob} />)

        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('Node')).toBeInTheDocument()
    })
})
