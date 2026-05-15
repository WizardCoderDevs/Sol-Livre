export interface RichTextNode {
  type: string
  text?: string
  version?: number
  children?: RichTextNode[]
  fields?: Record<string, unknown>
  format?: number
  indent?: number
  direction?: 'ltr' | 'rtl' | null
}

export interface RichTextContent {
  root: {
    type: string
    children: RichTextNode[]
    direction?: 'ltr' | 'rtl' | null
    format?: string
    indent?: number
    version?: number
  }
  [key: string]: unknown
}

export interface Post {
  id: number
  title: string
  slug: string
  heroImage?: Media
  content: RichTextContent
  categories?: Category[]
  meta?: {
    title?: string
    description?: string
    image?: Media
  }
  publishedAt?: string
  populatedAuthors?: { id: string; name: string }[]
  updatedAt: string
  createdAt: string
  _status?: 'draft' | 'published'
}

export interface Media {
  id: number
  url?: string
  thumbnailURL?: string
  alt?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
  sizes?: {
    thumbnail?: { url?: string; width?: number; height?: number }
    small?: { url?: string; width?: number; height?: number }
    medium?: { url?: string; width?: number; height?: number }
    large?: { url?: string; width?: number; height?: number }
    xlarge?: { url?: string; width?: number; height?: number }
    og?: { url?: string; width?: number; height?: number }
  }
}

export interface Category {
  id: number
  title: string
  slug: string
  parent?: Category
}

export interface PaginatedPosts {
  docs: Post[]
  totalDocs: number
  page: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}