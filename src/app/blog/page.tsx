import { Metadata } from 'next'
import { find } from '@/lib/cms/api'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BlogCard } from '@/components/blog/BlogCard'
import { Pagination } from '@/components/blog/Pagination'
import { Post } from '@/lib/cms/types'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos e novidades sobre energia solar, inteligência energética e sustentabilidade.',
}

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

const POSTS_PER_PAGE = 6

export default async function BlogPage({ searchParams }: PageProps) {
  const { page: pageParam } = await searchParams
  const page = parseInt(pageParam || '1', 10)

  let posts: Post[] = []
  let totalPages = 1

  try {
    const result = await find<Post>({
      collection: 'posts',
      page,
      limit: POSTS_PER_PAGE,
      where: {
        _status: {
          equals: 'published',
        },
      },
      sort: '-publishedAt',
    })
    posts = result.docs
    totalPages = result.totalPages
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-16 text-center">
            <h1 className="font-display text-fluid-h1 font-bold">Blog</h1>
            <p className="mt-4 text-lg text-foreground/70">
              Artigos sobre energia solar, inteligência energética e sustentabilidade
            </p>
          </header>

          {posts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              <div className="mt-16">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  baseUrl="/blog"
                />
              </div>
            </>
          ) : (
            <p className="text-center text-foreground/70">Nenhum post encontrado.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}