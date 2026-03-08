/**
 * Performance utilities for monitoring and optimization
 */

/**
 * Report Web Vitals for performance monitoring
 * This can be integrated with analytics services
 * 
 * To enable: npm install web-vitals
 * Then uncomment the code in src/main.jsx
 */
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Uncomment below after installing web-vitals package
    // import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    //   getCLS(onPerfEntry)
    //   getFID(onPerfEntry)
    //   getFCP(onPerfEntry)
    //   getLCP(onPerfEntry)
    //   getTTFB(onPerfEntry)
    // }).catch(() => {
    //   console.warn('web-vitals not installed')
    // })
    
    // For now, just log that the feature is available
    console.log('Web Vitals monitoring ready. Install web-vitals package to enable.')
  }
}

/**
 * Lazy load images when they enter viewport
 * Usage: <img data-src="image.jpg" class="lazy-load" />
 */
export const enableLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          const src = img.getAttribute('data-src')
          if (src) {
            img.src = src
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        }
      })
    })

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img)
    })
  }
}

/**
 * Prefetch route data on hover
 */
export const prefetchOnHover = (url) => {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = url
  document.head.appendChild(link)
}

/**
 * Debounce function for performance optimization
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function for performance optimization
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get connection speed info
 */
export const getConnectionSpeed = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  return connection ? connection.effectiveType : 'unknown'
}

/**
 * Preload critical resources
 */
export const preloadResource = (href, as, type) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) link.type = type
  document.head.appendChild(link)
}
