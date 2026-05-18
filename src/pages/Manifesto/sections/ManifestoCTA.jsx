import { Link } from 'react-router-dom'
import './ManifestoCTA.css'

export default function ManifestoCTA() {
  return (
    <section className="manifesto-cta">
      <div className="manifesto-cta__overlay" />
      <div className="manifesto-cta__inner">
        <div className="manifesto-cta__content anim anim--slide-up">
          <h2 className="manifesto-cta__title">
            This is a Promise,<br />Not a Poster
          </h2>
          <p className="manifesto-cta__subtitle">
            Eight pillars. Four wards. One vision for a transformed Mumias West
          </p>
          <div className="manifesto-cta__buttons">
            <Link to="/" className="manifesto-cta__btn manifesto-cta__btn--home">
              Back to Home
            </Link>
            <Link to="/news" className="manifesto-cta__btn manifesto-cta__btn--news">
              View Campaign Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}