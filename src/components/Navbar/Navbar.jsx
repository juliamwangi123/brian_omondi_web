import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ variant = 'transparent' }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/manifesto', label: 'Manifesto' },
    { to: '/news', label: 'News' },
    { to: '/gallery', label: 'Gallery' },
  ]

  const toggleMobile = () => setMobileOpen((prev) => !prev)
  const closeMobile = () => setMobileOpen(false)

  return (
    <nav className={`navbar navbar--${variant}${mobileOpen ? ' navbar--open' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMobile}>
          <img src="/images/logo.png" alt="Hon. Brian Omondi Logo" />
        </Link>

        <button
          className="navbar__hamburger"
          onClick={toggleMobile}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>

        <ul className={`navbar__links${mobileOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
                onClick={closeMobile}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}