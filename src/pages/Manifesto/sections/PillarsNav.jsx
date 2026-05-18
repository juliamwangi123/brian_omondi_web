import { useState, useEffect, useRef } from 'react'
import './PillarsNav.css'

export default function PillarsNav({ pillars }) {
  const [isSticky, setIsSticky] = useState(false)
  const [navHeight, setNavHeight] = useState(91)
  const navRef = useRef(null)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '0px' }
    )

    observer.observe(sentinel)
    return () => observer.unobserve(sentinel)
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

  return (
    <>
      <div ref={sentinelRef} className="pillars-nav__sentinel" />
      {/* Placeholder to prevent content jump */}
      {isSticky && <div style={{ height: navHeight }} />}
      <nav
        ref={navRef}
        className={`pillars-nav${isSticky ? ' pillars-nav--sticky' : ''}`}
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