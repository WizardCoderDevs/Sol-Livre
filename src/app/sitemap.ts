import { MetadataRoute } from 'next'
import { find } from '@/lib/cms/api'
import { Post } from '@/lib/cms/types'

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://cms-sollivre.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sollivre.com.br'

  let blogUrls: MetadataRoute.Sitemap = []

  try {
    const result = await find<Post>({
      collection: 'posts',
      page: 1,
      limit: 100,
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    blogUrls = result.docs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/inteligencia-energetica`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}