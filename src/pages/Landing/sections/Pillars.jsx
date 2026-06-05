import { Link } from 'react-router-dom'
import pillarsData from '../../../data/pillarsData'
import './Pillars.css'

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="pillars__inner">
        <div className="pillars__grid">
          {pillarsData.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`pillars__card anim anim--slide-up anim--delay-${(index % 3) + 1}`}
            >
              <div className="pillars__card-image">
                <img src={pillar.image} alt={pillar.navLabel} loading="lazy" />
              </div>
              <div className="pillars__card-body">
                <h3 className="pillars__card-title">{pillar.cardTitle}</h3>
                <p className="pillars__card-text">{pillar.cardText}</p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="pillars__card pillars__card--cta anim anim--slide-up anim--delay-3">
            <div className="pillars__cta-content">
              <p className="pillars__cta-heading">
                There is more to the vision
              </p>
              <p className="pillars__cta-sub">
                Read the full manifesto to see every commitment in detail.
              </p>
              <a   
                href="/manifesto.pdf"   
                className="pillars__cta-btn"  
                target="_blank"  
                rel="noopener noreferrer"  
              >  
                Read full Manifesto  
              </a>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}