import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { find, findOne } from '@/lib/cms/api'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Post } from '@/lib/cms/types'
import { BlogCard } from '@/components/blog/BlogCard'
import RichText from '@/components/RichText'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await findOne<Post>({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        _status: {
          equals: 'published',
        },
      },
    })

    if (!post) {
      return {
        title: 'Post não encontrado',
      }
    }

    return {
      title: post.meta?.title || post.title,
      description: post.meta?.description,
      openGraph: {
        title: post.meta?.title || post.title,
        description: post.meta?.description,
        images: post.meta?.image?.url ? [{ url: post.meta.image.url }] : [],
      },
    }
  } catch (error) {
    console.error('Error fetching metadata:', error)
    return {
      title: 'Blog',
    }
  }
}

export async function generateStaticParams() {
  return []
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  let post: Post | null = null

  try {
    post = await findOne<Post>({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        _status: {
          equals: 'published',
        },
      },
    })
  } catch (error) {
    console.error('Error fetching post:', error)
  }

  if (!post) {
    notFound()
  }

  let relatedPosts: Post[] = []

  try {
    const relatedPostsResult = await find<Post>({
      collection: 'posts',
      page: 1,
      limit: 3,
      where: {
        _status: {
          equals: 'published',
        },
        id: {
          not_in: [post!.id],
        },
      },
      sort: '-publishedAt',
    })
    relatedPosts = relatedPostsResult.docs
  } catch (error) {
    console.error('Error fetching related posts:', error)
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <article>
          <div className="mx-auto max-w-7xl px-6 pt-12">
            <header className="relative w-full rounded-2xl overflow-hidden bg-surface/50">
              {post.heroImage?.url && (
                <Image
                  src={post.heroImage.url}
                  alt={post.heroImage.alt || post.title}
                  width={post.heroImage.width || 1200}
                  height={post.heroImage.height || 675}
                  className="w-full h-auto object-contain"
                  priority
                />
              )}
            </header>

            <div className="py-12">
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o blog
              </Link>

              <h1 className="mt-6 font-display text-fluid-h1 font-bold leading-tight">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 py-4 border-y border-surface-border">
                {post.publishedAt && (
                  <span className="flex items-center gap-2 text-sm text-foreground/70">
                    <Calendar className="h-4 w-4 text-accent" />
                    {formattedDate}
                  </span>
                )}
                {post.populatedAuthors && post.populatedAuthors.length > 0 && (
                  <span className="flex items-center gap-2 text-sm text-foreground/70">
                    <User className="h-4 w-4 text-accent" />
                    {post.populatedAuthors.map((a) => a.name).join(', ')}
                  </span>
                )}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex items-center gap-2">
                    {post.categories.map((cat) => (
                      <span
                        key={cat.id}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 pb-16">
            {post.content && typeof post.content === 'object' && 'root' in post.content && (
              <RichText data={post.content} className="mx-auto max-w-3xl" />
            )}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="border-t border-surface-border bg-surface/30 px-6 py-16">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 font-display text-2xl font-bold">Artigos relacionados</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}