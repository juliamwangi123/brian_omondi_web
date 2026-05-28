/* useScrollAnimation.js */  
  
import { useEffect, useRef } from 'react'  
  
export default function useScrollAnimation(threshold = 0.15, baseDelay = 600) {  
  const ref = useRef(null)  
  
  useEffect(() => {  
    const node = ref.current  
    if (!node) return  
  
    const elements = node.querySelectorAll('.anim')  
  
    const observer = new IntersectionObserver(  
      (entries) => {  
        entries.forEach((entry) => {  
          if (entry.isIntersecting) {  
            // Respect data-delay attribute or use index-based delay  
            const customDelay = entry.target.dataset.delay  
            const delay = customDelay ? parseInt(customDelay, 10) : 0  
              
            setTimeout(() => {  
              entry.target.classList.add('anim--visible')  
            }, delay)  
              
            observer.unobserve(entry.target)  
          }  
        })  
      },  
      { threshold, rootMargin: '0px 0px -50px 0px' }  
    )  
  
    elements.forEach((el) => observer.observe(el))  
  
    return () => {  
      elements.forEach((el) => observer.unobserve(el))  
    }  
  }, [threshold, baseDelay])  
  
  return ref  
}  