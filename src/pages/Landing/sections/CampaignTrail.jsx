import { Link } from 'react-router-dom'  
import newsData from '../../../data/newsData'  
import './CampaignTrail.css'  
  
export default function CampaignTrail() {  
  const topThree = newsData.slice(0, 3)  
  
  return (  
    <section className="campaign-trail">  
      <div className="campaign-trail__inner">  
        <div className="campaign-trail__grid">  
          {topThree.map((article, index) => (  
            <div  
              key={article.id}  
              className={`trail-card anim anim--slide-up anim--delay-${index + 1}`}  
            >  
              {/* Tag */}  
              <div className="trail-card__tag-wrapper">  
                <span className="trail-card__tag">{article.tag}</span>  
              </div>  
  
              {/* Image */}  
              <div className="trail-card__image">  
                <img  
                  src={article.image || article.heroImage}  
                  alt={article.title}  
                  loading="lazy"  
                />  
              </div>  
  
              {/* Body */}  
              <div className="trail-card__body">  
                {/* Date */}  
                <div className="trail-card__date-row">  
                  <svg  
                    className="trail-card__cal-icon"  
                    viewBox="0 0 24 30"  
                    fill="none"  
                    width="24"  
                    height="30"  
                  >  
                    <rect  
                      x="1"  
                      y="4"  
                      width="22"  
                      height="24"  
                      rx="3"  
                      stroke="#B4B4B4"  
                      strokeWidth="2"  
                    />  
                    <line x1="7" y1="1" x2="7" y2="7" stroke="#B4B4B4" strokeWidth="2" />  
                    <line x1="17" y1="1" x2="17" y2="7" stroke="#B4B4B4" strokeWidth="2" />  
                    <line x1="1" y1="11" x2="23" y2="11" stroke="#B4B4B4" strokeWidth="2" />  
                  </svg>  
                  <span className="trail-card__date">{article.date}</span>  
                </div>  
  
                {/* Title — blue, bold, with optional subtitle */}  
                <h3 className="trail-card__title">  
                  {article.title}{article.subtitle ? ` ${article.subtitle}` : ''}  
                </h3>  
  
                {/* Excerpt — black, smaller, normal weight */}  
                <p className="trail-card__excerpt">  
                  {article.shortExcerpt || article.excerpt}  
                </p>  
  
                {/* Read More — pushed to bottom */}  
                <Link to="/news" className="trail-card__btn">  
                  Read more  
                </Link>  
              </div>  
            </div>  
          ))}  
        </div>  
  
        {/* View All */}  
        <div className="campaign-trail__all anim anim--slide-up anim--delay-4">  
          <Link to="/news" className="campaign-trail__all-btn">  
            View All News  
          </Link>  
        </div>  
      </div>  
    </section>  
  )  
}  