import './ArticleGrid.css'

export default function ArticleGrid({ articles, sectionClass = '' }) {
  if (!articles || articles.length === 0) return null

  return (
    <section className={`article-grid ${sectionClass}`}>
      <div className="article-grid__inner">
        <div className="article-grid__row">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`ag-card anim anim--slide-up anim--delay-${index + 1}`}
            >
              {/* Image */}
              <div className="ag-card__image">
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>

              {/* Body */}
              <div className="ag-card__body">
                {/* Date */}
                <div className="ag-card__date-row">
                  <svg
                    viewBox="0 0 24 30"
                    fill="none"
                    width="24"
                    height="28"
                    className="ag-card__cal-icon"
                  >
                    <rect x="1" y="4" width="22" height="24" rx="3" stroke="#B4B4B4" strokeWidth="2" />
                    <line x1="7" y1="1" x2="7" y2="7" stroke="#B4B4B4" strokeWidth="2" />
                    <line x1="17" y1="1" x2="17" y2="7" stroke="#B4B4B4" strokeWidth="2" />
                    <line x1="1" y1="11" x2="23" y2="11" stroke="#B4B4B4" strokeWidth="2" />
                  </svg>
                  <span className="ag-card__date">{article.date}</span>
                </div>

                {/* Text */}
                <p className="ag-card__text">
                  <strong>{article.title}</strong>{' '}
                  {article.excerpt}
                </p>

                {/* Read More */}
                <button className="ag-card__read-more" type="button">
                  <span>Read More</span>
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M1 6H13M13 6L8 1M13 6L8 11" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}