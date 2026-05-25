import { Link } from 'react-router-dom'
import './TopArticle.css'

export default function TopArticle({ article }) {
  if (!article) return null

  return (
    <section className="top-article">
      <div className="top-article__inner">
        <div className="top-article__card anim anim--slide-up">
          {/* Image */}
          <div className="top-article__image">
            <img
              src={article.heroImage || article.image}
              alt={article.title}
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="top-article__content">
            {/* Date */}
            <div className="top-article__date-row">
              <svg
                className="top-article__cal-icon"
                viewBox="0 0 24 30"
                fill="none"
                width="24"
                height="28"
              >
                <rect x="1" y="4" width="22" height="24" rx="3" stroke="#B4B4B4" strokeWidth="2" />
                <line x1="7" y1="1" x2="7" y2="7" stroke="#B4B4B4" strokeWidth="2" />
                <line x1="17" y1="1" x2="17" y2="7" stroke="#B4B4B4" strokeWidth="2" />
                <line x1="1" y1="11" x2="23" y2="11" stroke="#B4B4B4" strokeWidth="2" />
              </svg>
              <span className="top-article__date">{article.date}</span>
            </div>

            {/* Title */}
            <h2 className="top-article__title">{article.title}</h2>

            {/* Excerpt */}
            <p className="top-article__excerpt">{article.excerpt}</p>

            {/* Divider */}
            <div className="top-article__line" />

            {/* Read Full Story — Link */}
            <Link to={`/news/${article.id}`} className="top-article__read-more">
              <span>Read Full Story</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M1 7H17M17 7L11 1M17 7L11 13"
                  stroke="#6A6A6A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}