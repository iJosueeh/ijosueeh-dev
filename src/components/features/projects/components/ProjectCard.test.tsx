import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectCard } from './ProjectCard'
import type { ProjectItem } from '../types'

describe('ProjectCard Component', () => {
    const mockProject: ProjectItem = {
        title: 'Test Project',
        subtitle: 'Test Subtitle',
        period: '2025',
        description: 'Test Description',
        achievements: ['Achievement 1', 'Achievement 2'],
        stack: ['React', 'TypeScript'],
        repoUrl: 'https://github.com/test/repo'
    }

    it('renders project details correctly', () => {
        render(<ProjectCard project={mockProject} />) // Removed index prop as it was removed from component

        expect(screen.getByText('Test Project')).toBeInTheDocument()
        expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
        expect(screen.getByText('Test Description')).toBeInTheDocument()
        expect(screen.getByText('2025')).toBeInTheDocument()
    })

    it('renders usage of tech stack', () => {
        render(<ProjectCard project={mockProject} />)
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('TypeScript')).toBeInTheDocument()
    })

    it('renders GitHub link when repoUrl is provided', () => {
        render(<ProjectCard project={mockProject} />)

        const link = screen.getByRole('link', { name: /View Test Project on GitHub/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'https://github.com/test/repo')
        expect(screen.getByText('Repositorio')).toBeInTheDocument()
    })

    it('does not render GitHub link when repoUrl is missing', () => {
        const projectWithoutRepo = { ...mockProject, repoUrl: undefined }
        render(<ProjectCard project={projectWithoutRepo} />)

        const link = screen.queryByRole('link')
        expect(link).not.toBeInTheDocument()
    })
})
