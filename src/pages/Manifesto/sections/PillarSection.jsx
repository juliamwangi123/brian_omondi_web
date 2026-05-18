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
          <div className={`pillar-section__visual ${isEven ? '' : 'pillar-section__visual--right'}`}>
            {/* Gray background block */}
            <div className="pillar-section__gray-block" />

            {/* Image */}
            <div className="pillar-section__image anim anim--slide-up">
              <img
                src={pillar.image}
                alt={pillar.navLabel}
                loading="lazy"
              />
            </div>

            {/* Title Block */}
            <div className="pillar-section__title-block anim anim--slide-up anim--delay-2">
              <h2 className="pillar-section__title">
                {pillar.title}
              </h2>
              <div className="pillar-section__title-line" />
              <p className="pillar-section__subtitle">
                {pillar.subtitle}
              </p>
              <p className="pillar-section__tagline">
                {pillar.tagline}
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className={`pillar-section__content ${isEven ? '' : 'pillar-section__content--left'}`}>
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
              <p className="pillar-section__quote-text">
                <strong>Our Goal</strong> {pillar.goalQuote}
              </p>
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="pillar-section__border" />
      </section>

      {/* Divider Line */}
      {!isLast && <div className="pillar-section__divider" />}
    </>
  )
}