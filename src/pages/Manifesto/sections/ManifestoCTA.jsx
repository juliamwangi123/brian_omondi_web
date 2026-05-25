import { Link } from 'react-router-dom'
import './ManifestoCTA.css'

export default function ManifestoCTA() {
  return (
    <section className="manifesto-cta">
      <div className="manifesto-cta__overlay" />
      <div className="manifesto-cta__inner">
        {/* Left — Text */}
        <div className="manifesto-cta__content anim anim--slide-up">
          <h2 className="manifesto-cta__title">
            This is a Promise,<br />Not a Poster
          </h2>
          <p className="manifesto-cta__subtitle">
            Eight pillars. Four wards. One vision for a transformed Mumias West
          </p>

        </div>

        {/* Right — Candidate image */}
        <div className="manifesto-cta__image anim anim--slide-right anim--delay-2">
          <img
            src="/images/candidate-specs.svg"
            alt="Brian Omondi"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}