import './PillarSection.css'

export default function PillarSection({ pillar, index, isLast }) {
  const isEven = index % 2 === 0

  return (
    <>
      <section
        id={pillar.id}
        className={`pillar-section ${isEven ? 'pillar-section--left' : 'pillar-section--right'}`}
      >
        <div className="pillar-section__inner">
          {/* Image + Title Column */}
          <div className="pillar-section__visual">
            <div className="pillar-section__gray-block" />

            <div className="pillar-section__image anim anim--slide-up">
              <img
                src={pillar.image}
                alt={pillar.navLabel}
                loading="lazy"
              />
            </div>

            <div className="pillar-section__title-block anim anim--slide-up anim--delay-2">
              <h2 className="pillar-section__title">
                {pillar.title}
              </h2>
              <p className="pillar-section__subtitle">
                {pillar.subtitle}
              </p>
              <div className="pillar-section__title-line" />
              <p className="pillar-section__tagline">
                {pillar.tagline}
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="pillar-section__content">
            {/* Priorities */}
            <div className="pillar-section__priorities anim anim--slide-up anim--delay-3">
              <h3 className="pillar-section__priorities-heading">Key Priorities</h3>
              <ul className="pillar-section__priorities-list">
                {pillar.priorities.map((item, i) => (
                  <li key={i} className="pillar-section__priority-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="pillar-section__quote anim anim--slide-up anim--delay-4">
              <div className="pillar-section__quote-line" />
              <div className="pillar-section__quote-content">
                <p className="pillar-section__quote-label">Our Goal</p>
                <p className="pillar-section__quote-text">
                  {pillar.goalQuote}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pillar-section__border" />
      </section>

      {!isLast && <div className="pillar-section__divider" />}
    </>
  )
}