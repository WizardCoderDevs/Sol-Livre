import { render, screen } from '@testing-library/react'
import { Trust } from '@/components/sections/Trust'
import { trust } from '@/config/site'

describe('Trust', () => {
  it('renders section with title and subtitle', () => {
    render(<Trust />)
    
    expect(screen.getByText(trust.title)).toBeInTheDocument()
    expect(screen.getByText(trust.subtitle)).toBeInTheDocument()
  })

  it('renders all brand names', () => {
    render(<Trust />)
    
    trust.brands.forEach(brand => {
      expect(screen.getByText(brand)).toBeInTheDocument()
    })
  })

  it('has correct structure', () => {
    const { container } = render(<Trust />)
    
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('py-20')
  })
})