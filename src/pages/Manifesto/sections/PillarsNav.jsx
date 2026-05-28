// PillarsNav.jsx  
import { useState, useEffect, useRef } from 'react'  
import './PillarsNav.css'  
  
export default function PillarsNav({ pillars }) {  
  const [isVisible, setIsVisible] = useState(false)  
  const navRef = useRef(null)  
  
  useEffect(() => {  
    const handleScroll = () => {  
      const content = document.querySelector('.manifesto-page__content')  
      const cta = document.querySelector('.manifesto-cta')  
      if (!content || !cta) return  
  
      const contentTop = content.getBoundingClientRect().top  
      const ctaTop = cta.getBoundingClientRect().top  
  
      // Show when content is scrolled to top AND cta is not yet visible  
      if (contentTop <= 0 && ctaTop > window.innerHeight * 0.5) {  
        setIsVisible(true)  
      } else {  
        setIsVisible(false)  
      }  
    }  
  
    window.addEventListener('scroll', handleScroll, { passive: true })  
    handleScroll() // Check on mount  
    return () => window.removeEventListener('scroll', handleScroll)  
  }, [])  
  
  const scrollToPillar = (id) => {  
    const el = document.getElementById(id)  
    if (!el) return  
    const offset = 100  
    const y = el.getBoundingClientRect().top + window.scrollY - offset  
    window.scrollTo({ top: y, behavior: 'smooth' })  
  }  
  
  return (  
    <nav  
      ref={navRef}  
      className={`pillars-nav ${isVisible ? 'pillars-nav--visible' : ''}`}  
      aria-hidden={!isVisible}  
    >  
      {/* Blue background bar */}  
      <div className="pillars-nav__bar"></div>  
        
      {/* Navigation buttons container */}  
      <div className="pillars-nav__container">  
        <div className="pillars-nav__inner">  
          {pillars.map((pillar) => (  
            <button  
              key={pillar.id}  
              className="pillars-nav__btn"  
              onClick={() => scrollToPillar(pillar.id)}  
              type="button"  
              tabIndex={isVisible ? 0 : -1}  
            >  
              {pillar.navLabel}  
            </button>  
          ))}  
        </div>  
      </div>  
    </nav>  
  )  
}  