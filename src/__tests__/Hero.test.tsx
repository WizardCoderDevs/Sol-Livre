import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { hero as heroConfig } from '@/config/site'

describe('Hero', () => {
  it('renders badge text', () => {
    render(<Hero />)
    expect(screen.getByText(heroConfig.badge)).toBeInTheDocument()
  })

  it('renders main title', () => {
    render(<Hero />)
    expect(screen.getByText(heroConfig.title)).toBeInTheDocument()
  })

  it('renders title accent', () => {
    render(<Hero />)
    expect(screen.getByText(heroConfig.titleAccent)).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<Hero />)
    expect(screen.getByText(heroConfig.description)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(heroConfig.primaryButton)).toBeInTheDocument()
    expect(screen.getByText(heroConfig.secondaryButton)).toBeInTheDocument()
  })

  it('has correct section structure', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('min-h-[90vh]')
  })
})
