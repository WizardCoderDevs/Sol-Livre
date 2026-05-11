import { render, screen } from '@testing-library/react'
import InteligenciaEnergetica from '@/app/inteligencia-energetica/page'
import { describe, expect, it } from 'vitest'

describe('InteligenciaEnergetica Page', () => {
  it('renders badge with Energia Solar por Assinatura', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('Energia Solar por Assinatura')).toBeInTheDocument()
  })

  it('renders main title in h1', () => {
    render(<InteligenciaEnergetica />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent(/Pare de perder dinheiro na conta de luz/)
  })

  it('renders description with economy emphasis', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getAllByText(/economia/i).length).toBeGreaterThan(0)
    expect(screen.getByText('economiza até 30%')).toBeInTheDocument()
    expect(screen.getByText('sem ter que investir')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getAllByRole('link', { name: /Simular minha economia/ })).toHaveLength(2)
  })

  it('renders CTA helper text', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('Consultoria gratuita • Sem compromisso')).toBeInTheDocument()
  })

  it('renders proof social section with 2.500+ clients', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('2.500+')).toBeInTheDocument()
    expect(screen.getByText('Clientes atendidos')).toBeInTheDocument()
  })

  it('renders proof social section with R$ 12M', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('R$ 12M')).toBeInTheDocument()
    expect(screen.getByText('Economia gerada')).toBeInTheDocument()
  })

  it('renders proof social section with até 30%', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('até 30%')).toBeInTheDocument()
    expect(screen.getAllByText('Economia na conta')).toHaveLength(2)
  })

  it('renders Para quem é isso section', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByRole('heading', { name: 'Para quem é isso?' })).toBeInTheDocument()
  })

  it('renders target audience items', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('Não requer gastos com instalação ou obra')).toBeInTheDocument()
    expect(screen.getByText('Economia sem compromisso de longo prazo')).toBeInTheDocument()
    expect(screen.getByText('Solução rápida e sem burocracia')).toBeInTheDocument()
    expect(screen.getByText('Previsibilidade nos custos mensais')).toBeInTheDocument()
  })

  it('renders Como funciona section', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByRole('heading', { name: 'Como funciona?' })).toBeInTheDocument()
  })

  it('renders three steps in Como funciona', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('Consumo analisado')).toBeInTheDocument()
    expect(screen.getByText('Crédito aplicado')).toBeInTheDocument()
    expect(screen.getAllByText('Economia na conta')).toHaveLength(2)
  })

  it('renders final CTA section', () => {
    render(<InteligenciaEnergetica />)
    expect(screen.getByText('Você não tem nada a perder')).toBeInTheDocument()
    expect(screen.getByText(/Sem contrato longo, sem multa/)).toBeInTheDocument()
  })

  it('has correct page structure with 5 sections', () => {
    const { container } = render(<InteligenciaEnergetica />)
    const sections = container.querySelectorAll('section')
    expect(sections.length).toBe(5)
  })

  it('CTA links point to LeadEnergy', () => {
    render(<InteligenciaEnergetica />)
    const links = screen.getAllByRole('link', { name: /Simular minha economia/ })
    const leadEnergyUrl = 'https://www.leadenergy.com.br/simular?ch=0f0547d3-7e73-442e-a915-34ef39efe74b&pr=db69a358-de85-47b0-ba6e-098630585cd5'
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', leadEnergyUrl)
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})