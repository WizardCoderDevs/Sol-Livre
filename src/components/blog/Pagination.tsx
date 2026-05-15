import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    if (page === 1) return baseUrl
    return `${baseUrl}?page=${page}`
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visiblePages = pages.filter((page) => {
    if (totalPages <= 7) return true
    if (page === 1 || page === totalPages) return true
    if (page >= currentPage - 1 && page <= currentPage + 1) return true
    return false
  })

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Paginação">
      <Link
        href={getPageUrl(currentPage - 1)}
        className={`rounded-full border border-surface-border p-2 transition-colors ${
          currentPage === 1
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-surface/50'
        }`}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft className="h-5 w-5" />
      </Link>

      {visiblePages.map((page, index) => {
        const prevPage = visiblePages[index - 1]
        const showEllipsis = prevPage && page - prevPage > 1

        return (
          <span key={page} className="flex items-center gap-2">
            {showEllipsis && (
              <span className="px-2 text-foreground/50">...</span>
            )}
            <Link
              href={getPageUrl(page)}
              className={`min-w-[40px] rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-accent text-background'
                  : 'hover:bg-surface/50'
              }`}
            >
              {page}
            </Link>
          </span>
        )
      })}

      <Link
        href={getPageUrl(currentPage + 1)}
        className={`rounded-full border border-surface-border p-2 transition-colors ${
          currentPage === totalPages
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-surface/50'
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-5 w-5" />
      </Link>
    </nav>
  )
}