import '@testing-library/jest-dom'

class IntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn()
}

window.IntersectionObserver = IntersectionObserver
