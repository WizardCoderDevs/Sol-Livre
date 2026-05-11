import { describe, it, expect } from 'vitest'
import { company, contact, social, navigation, cta, copyright, hero, trust } from '@/config/site'

describe('Site Config', () => {
  describe('company', () => {
    it('should have required properties', () => {
      expect(company).toHaveProperty('name')
      expect(company).toHaveProperty('fullName')
      expect(company).toHaveProperty('tagline')
      expect(company).toHaveProperty('description')
    })

    it('should have valid name format', () => {
      expect(company.name).toBe('SOL LIVRE')
      expect(company.name.split(' ')).toHaveLength(2)
    })
  })

  describe('contact', () => {
    it('should have phone information', () => {
      expect(contact).toHaveProperty('phone')
      expect(contact).toHaveProperty('phoneLink')
      expect(contact.phoneLink).toContain('wa.me')
    })
  })

  describe('social', () => {
    it('should have all social links', () => {
      expect(social).toHaveProperty('instagram')
      expect(social).toHaveProperty('linkedin')
      expect(social).toHaveProperty('facebook')
      expect(social.instagram).toContain('instagram.com')
      expect(social.linkedin).toContain('linkedin.com')
      expect(social.facebook).toContain('facebook.com')
    })
  })

  describe('navigation', () => {
    it('should have navigation links', () => {
      expect(navigation).toHaveProperty('solutions')
      expect(navigation).toHaveProperty('roi')
      expect(navigation).toHaveProperty('ctaButton')
    })
  })

  describe('cta', () => {
    it('should have CTA text content', () => {
      expect(cta).toHaveProperty('title')
      expect(cta).toHaveProperty('subtitle')
      expect(cta).toHaveProperty('primaryButton')
      expect(cta).toHaveProperty('secondaryButton')
    })
  })

  describe('hero', () => {
    it('should have hero section content', () => {
      expect(hero).toHaveProperty('badge')
      expect(hero).toHaveProperty('title')
      expect(hero).toHaveProperty('titleAccent')
      expect(hero).toHaveProperty('description')
      expect(hero).toHaveProperty('primaryButton')
      expect(hero).toHaveProperty('secondaryButton')
    })
  })

  describe('trust', () => {
    it('should have trust section content', () => {
      expect(trust).toHaveProperty('title')
      expect(trust).toHaveProperty('subtitle')
      expect(trust).toHaveProperty('brands')
      expect(Array.isArray(trust.brands)).toBe(true)
      expect(trust.brands.length).toBeGreaterThan(0)
    })
  })

  describe('copyright', () => {
    it('should have copyright info', () => {
      expect(copyright).toHaveProperty('year')
      expect(copyright).toHaveProperty('name')
      expect(copyright.year).toBe('2026')
    })
  })
})