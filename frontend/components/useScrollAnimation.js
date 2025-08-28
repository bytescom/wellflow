import { useEffect, useState } from 'react'

export const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set())

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          const delay = element.dataset.delay || '0'
          
          setTimeout(() => {
            element.classList.add('animate-in')
            setAnimatedElements(prev => new Set(prev).add(element))
          }, parseInt(delay) * 100)
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(element => {
      observer.observe(element)
    })

    return () => {
      elements.forEach(element => {
        observer.unobserve(element)
      })
    }
  }, [])

  return animatedElements
}
