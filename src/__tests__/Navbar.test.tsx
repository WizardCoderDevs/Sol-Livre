import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/layout/Navbar'
import { company, navigation } from '@/config/site'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders company name correctly', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: /Sol Livre/i })
    expect(logo).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Soluções')).toBeInTheDocument()
    expect(screen.getByText('ROI e Ativos')).toBeInTheDocument()
    expect(screen.getByText('Consultoria')).toBeInTheDocument()
    expect(screen.getByText('Privacidade')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText(navigation.ctaButton)).toBeInTheDocument()
  })

  it('has mobile menu toggle button', () => {
    render(<Navbar />)
    const menuButton = document.querySelector('button')
    expect(menuButton).toBeInTheDocument()
  })

  it('opens mobile menu when toggle is clicked', () => {
    render(<Navbar />)
    const menuButton = document.querySelector('button')
    menuButton?.click()
    expect(screen.getByText('Soluções')).toBeInTheDocument()
    expect(screen.getByText('Privacidade')).toBeInTheDocument()
  })
})
