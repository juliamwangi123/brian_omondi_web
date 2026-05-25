import { useState, useEffect, useRef } from 'react'
import './PillarsNav.css'

export default function PillarsNav({ pillars }) {
  const [isVisible, setIsVisible] = useState(false)
  const [navHeight, setNavHeight] = useState(91)
  const navRef = useRef(null)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const content = document.querySelector('.manifesto-page__content')
      const cta = document.querySelector('.manifesto-cta')
      if (!content || !cta) return

      const contentTop = content.getBoundingClientRect().top
      const ctaTop = cta.getBoundingClientRect().top

      // Show when content is scrolled to top AND cta is not yet visible
      if (contentTop <= 0 && ctaTop > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight)
    }
  }, [])

  const scrollToPillar = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = navRef.current?.offsetHeight || 91
    const y = el.getBoundingClientRect().top + window.scrollY - offset - 20
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  if (!isVisible) return <div ref={sentinelRef} className="pillars-nav__sentinel" />

  return (
    <>
      <div ref={sentinelRef} className="pillars-nav__sentinel" />
      <nav
        ref={navRef}
        className="pillars-nav pillars-nav--sticky"
      >
        <div className="pillars-nav__inner">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              className="pillars-nav__btn"
              onClick={() => scrollToPillar(pillar.id)}
              type="button"
            >
              {pillar.navLabel}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}