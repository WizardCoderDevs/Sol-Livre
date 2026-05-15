import Link from 'next/link'
import Image from 'next/image'
import { Post, Media } from '@/lib/cms/types'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post?.heroImage?.url || post?.meta?.image?.url || '/hero.png'
  const formattedDate = post?.publishedAt
    ? new Date(post?.publishedAt).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-surface-border bg-white transition-all hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface/50">
        <Image
          src={imageUrl}
          alt={post?.heroImage?.alt || post?.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        {post?.categories && post?.categories.length > 0 && (
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {post?.categories[0]?.title}
          </span>
        )}
        <h3 className="mt-2 font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {post?.title}
        </h3>
        {post?.meta?.description && (
          <p className="mt-2 line-clamp-2 text-sm text-foreground/70">
            {post?.meta?.description}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <time className="text-xs text-foreground/50" dateTime={post?.publishedAt || undefined}>
            {formattedDate}
          </time>
          {post?.populatedAuthors && post?.populatedAuthors.length > 0 && (
            <span className="text-xs text-foreground/50">
              Por {post?.populatedAuthors[0]?.name}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}