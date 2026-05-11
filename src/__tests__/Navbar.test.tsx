import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/layout/Navbar'
import { company, navigation } from '@/config/site'

describe('Navbar', () => {
  it('renders company name correctly', () => {
    render(<Navbar />)
    expect(screen.getByText(company.name.split(' ')[0])).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Soluções')).toBeInTheDocument()
    expect(screen.getByText('ROI e Ativos')).toBeInTheDocument()
    expect(screen.getByText('Consultoria')).toBeInTheDocument()
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
  })
})
