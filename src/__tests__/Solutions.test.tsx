import { render, screen } from '@testing-library/react'
import { Solutions } from '@/components/sections/Solutions'

const solutions = [
  {
    title: 'Residencial de Elite',
    focus: 'Conforto e Autonomia',
  },
  {
    title: 'Comercial & Industrial',
    focus: 'ROI e Gestão de Ativos',
  },
  {
    title: 'Agronegócio de Precisão',
    focus: 'Segurança Operacional',
  },
]

describe('Solutions', () => {
  it('renders section title', () => {
    render(<Solutions />)
    expect(screen.getByText('Soluções Customizadas')).toBeInTheDocument()
  })

  it('renders all solution cards', () => {
    render(<Solutions />)
    solutions.forEach((sol) => {
      expect(screen.getByText(sol.title)).toBeInTheDocument()
      expect(screen.getByText(sol.focus)).toBeInTheDocument()
    })
  })

  it('renders all solution descriptions', () => {
    render(<Solutions />)
    expect(screen.getByText(/Projetamos sistemas/i)).toBeInTheDocument()
    expect(screen.getByText(/Elimine a volatilidade/i)).toBeInTheDocument()
    expect(screen.getByText(/Autonomia total/i)).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Solutions />)
    const section = container.querySelector('section#solutions')
    expect(section).toBeInTheDocument()
  })

  it('renders Saber mais button for each card', () => {
    render(<Solutions />)
    const buttons = screen.getAllByText('Saber mais')
    expect(buttons).toHaveLength(3)
  })
})
