import { useState, useEffect } from 'react'

/**
 * Custom hook to detect current scroll position
 * @returns {number} Current scroll Y position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

/**
 * Custom hook to detect if element is in viewport
 * @param {React.RefObject} ref - React ref to the element
 * @param {string} rootMargin - Intersection observer root margin
 * @returns {boolean} Whether element is in viewport
 */
export function useInView(ref, rootMargin = '0px') {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { rootMargin }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, rootMargin])

  return isInView
}

/**
 * Custom hook to detect window size
 * @returns {object} Window width and height
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

/**
 * Custom hook for media queries
 * @param {string} query - Media query string
 * @returns {boolean} Whether media query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
