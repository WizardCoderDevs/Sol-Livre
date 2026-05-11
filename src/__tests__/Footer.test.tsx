import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'
import { company } from '@/config/site'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders company name and tagline', () => {
    render(<Footer />)
    expect(screen.getByText(company.name)).toBeInTheDocument()
    expect(screen.getByText(company.tagline)).toBeInTheDocument()
  })

  it('renders contact section', () => {
    render(<Footer />)
    expect(screen.getByText(/Contato/i)).toBeInTheDocument()
  })

  it('renders links section', () => {
    render(<Footer />)
    expect(screen.getByText('Soluções')).toBeInTheDocument()
    expect(screen.getByText('Rentabilidade')).toBeInTheDocument()
    expect(screen.getByText('Portfólio')).toBeInTheDocument()
    expect(screen.getByText('Assinatura Solar')).toBeInTheDocument()
    expect(screen.getByText('Política de Privacidade')).toBeInTheDocument()
  })

  it('renders social section', () => {
    render(<Footer />)
    expect(screen.getByText(/Social/i)).toBeInTheDocument()
  })

  it('renders privacy policy link with correct href', () => {
    render(<Footer />)
    const privacyLink = screen.getByRole('link', { name: /Política de Privacidade/i })
    expect(privacyLink).toHaveAttribute('href', '/politica-de-privacidade')
  })
})