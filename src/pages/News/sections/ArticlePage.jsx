import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import newsData from '../../../data/newsData'
import useScrollAnimation from '../../../components/useScrollAnimation'
import './ArticlePage.css'

export default function ArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pageRef = useScrollAnimation(0.1)

  const article = newsData.find((a) => a.id === Number(id))

  if (!article) {
    return (
      <div className="article-page" ref={pageRef}>
        <Navbar variant="solid" />
        <div className="article-page__not-found">
          <h2>Article not found</h2>
          <Link to="/news">Back to News</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const paragraphs = article.fullContent.split('\n\n')

  const renderParagraph = (text, index) => {
    const isSignature = text.includes('Brian Omondi') && text.includes('2027')
    const isFullBold = text.startsWith('**') && text.endsWith('**')
    const isNumbered = /^\d+\./.test(text.trim())

    // Signature line
    if (isSignature && isFullBold) {
      const clean = text.replace(/\*\*/g, '')
      return (
        <p key={index} className="article-page__signature">{clean}</p>
      )
    }

    // Fully bold paragraph
    if (isFullBold) {
      const clean = text.replace(/\*\*/g, '')
      return (
        <p key={index} className="article-page__bold">{clean}</p>
      )
    }

    // Numbered heading
    if (isNumbered) {
      return (
        <p key={index} className="article-page__numbered">{text}</p>
      )
    }

    // Paragraph with inline bold using **text**
    if (text.includes('**')) {
      const parts = text.split(/(\*\*[^*]+\*\*)/g)
      return (
        <p key={index}>
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              const clean = part.replace(/\*\*/g, '')
              return <strong key={i}>{clean}</strong>
            }
            return <span key={i}>{part}</span>
          })}
        </p>
      )
    }

    // Normal paragraph
    return <p key={index}>{text}</p>
  }

  return (
    <div className="article-page" ref={pageRef}>
      <Navbar variant="solid" />

      {/* Blue header */}
      <section className="article-page__header">
        <button
          className="article-page__back"
          onClick={() => navigate('/news')}
          type="button"
        >
          <svg width="28" height="27" viewBox="0 0 28 27" fill="none">
            <path
              d="M18 1L6 13.5L18 26"
              stroke="#D2D2D2"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to News</span>
        </button>

        <div className="article-page__date-row">
          <svg viewBox="0 0 24 30" fill="none" width="24" height="28">
            <rect x="1" y="4" width="22" height="24" rx="3" stroke="#B4B4B4" strokeWidth="2" />
            <line x1="7" y1="1" x2="7" y2="7" stroke="#B4B4B4" strokeWidth="2" />
            <line x1="17" y1="1" x2="17" y2="7" stroke="#B4B4B4" strokeWidth="2" />
            <line x1="1" y1="11" x2="23" y2="11" stroke="#B4B4B4" strokeWidth="2" />
          </svg>
          <span className="article-page__date">{article.date}</span>
        </div>
        <h1 className="article-page__title anim anim--slide-left">
        {article.title}
        {article.subtitle && (
            <span className="article-page__subtitle">
            {article.subtitle}
            </span>
        )}
        </h1>

      </section>

      {/* Content area */}
        {/* Content area */}
        <section className="article-page__body">
        <div className="article-page__bg" />

        <div className="article-page__content-wrapper">
            <div className="article-page__card">
            <div className="article-page__image anim anim--slide-up">
            <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                style={article.flipped ? { transform: 'scaleX(-1)' } : {}}
            />
            </div>

            <div className="article-page__text anim anim--slide-up anim--delay-2">
                {paragraphs.map((paragraph, i) => renderParagraph(paragraph, i))}
            </div>
            </div>
        </div>
        </section>

      <Footer />
    </div>
  )
}