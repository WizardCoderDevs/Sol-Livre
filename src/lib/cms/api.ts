const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://cms-sollivre.vercel.app'

interface FindOptions {
  collection: string
  page?: number
  limit?: number
  where?: Record<string, unknown>
  sort?: string
  depth?: number
}

interface PaginatedResult<T> {
  docs: T[]
  totalDocs: number
  page: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export async function find<T>({
  collection,
  page = 1,
  limit = 10,
  where,
  sort = '-publishedAt',
  depth = 1,
}: FindOptions): Promise<PaginatedResult<T>> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    sort,
    depth: String(depth),
  })

  if (where) {
    params.set('where', JSON.stringify(where))
  }

  const url = `${CMS_URL}/api/${collection}?${params}`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Failed to fetch ${collection}: ${response.status} ${response.statusText}. URL: ${url}. Body: ${text}`)
  }

  const result = await response.json()

  return {
    ...result,
    docs: result.docs.map((doc: Record<string, unknown>) => processMediaUrls(doc)),
  }
}

export async function findOne<T>({
  collection,
  where,
  depth = 1,
}: {
  collection: string
  where: Record<string, unknown>
  depth?: number
}): Promise<T | null> {
  const url = `${CMS_URL}/api/${collection}?${new URLSearchParams({
    where: JSON.stringify(where),
    limit: '1',
    depth: String(depth),
  })}`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Failed to fetch ${collection}: ${response.status} ${response.statusText}. URL: ${url}. Body: ${text}`)
  }

  const result = await response.json()
  const doc = result.docs?.[0]
  return doc ? processMediaUrls(doc) : null
}

function processMediaUrls<T extends Record<string, unknown>>(obj: T): T {
  if (obj === null || obj === undefined) return obj

  if (Array.isArray(obj)) {
    return obj.map((item) =>
      typeof item === 'object' && item !== null ? processMediaUrls(item as Record<string, unknown>) : item
    ) as unknown as T
  }

  const result: Record<string, unknown> = { ...obj }

  for (const key of Object.keys(result)) {
    const value = result[key]

    if (key === 'url' && typeof value === 'string' && value.startsWith('/api/media/')) {
      result[key] = `${CMS_URL}${value}`
    }

    if (key === 'thumbnailURL' && typeof value === 'string' && value.startsWith('/api/media/')) {
      result[key] = `${CMS_URL}${value}`
    }

    if (key === 'sizes' && typeof value === 'object' && value !== null) {
      const sizes = value as Record<string, { url?: string | null }>
      for (const sizeKey of Object.keys(sizes)) {
        const size = sizes[sizeKey]
        if (size?.url && size.url.startsWith('/api/media/')) {
          size.url = `${CMS_URL}${size.url}`
        }
      }
      result[key] = sizes
    }

    if (typeof value === 'object' && value !== null && key !== 'url' && key !== 'thumbnailURL' && key !== 'sizes') {
      result[key] = processMediaUrls(value as Record<string, unknown>)
    }
  }

  return result as T
}