import { Metadata } from 'next'
import { company, contact, social } from '@/config/site'

type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.fullName,
    description: company.description,
    url: 'https://sollivre.com.br',
    logo: 'https://sollivre.com.br/Logo.ico',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phone,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [social.instagram, social.linkedin, social.facebook],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
  }

  return <JsonLd data={data} />
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.fullName,
    url: 'https://sollivre.com.br',
    description: company.tagline,
    publisher: {
      '@type': 'Organization',
      name: company.fullName,
      url: 'https://sollivre.com.br',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sollivre.com.br/busca?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return <JsonLd data={data} />
}

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sollivre.com.br',
    name: company.fullName,
    description: company.tagline,
    url: 'https://sollivre.com.br',
    telephone: contact.phone,
    image: 'https://sollivre.com.br/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5505',
      longitude: '-46.6333',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    serviceType: ['Consultoria Energética', 'Energia Solar', 'Inteligência Energética'],
  }

  return <JsonLd data={data} />
}

export const organizationMetadata: Metadata = {
  alternates: {
    canonical: 'https://sollivre.com.br',
  },
  other: {
    'article:publisher': 'https://facebook.com/sollivre.eco.br/',
    'article:author': 'Sol Livre Consultoria',
  },
}