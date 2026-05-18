import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import NewsHero from './sections/NewsHero'
import TopArticle from './sections/TopArticle'
import ArticleGrid from './sections/ArticleGrid'
import newsData from '../../data/newsData'
import useScrollAnimation from '../../components/useScrollAnimation'
import './News.css'

export default function News() {
  const pageRef = useScrollAnimation(0.1)

  const featured = newsData.find((a) => a.featured)
  const middleRow = newsData.slice(1, 4)
  const bottomRow = newsData.slice(4, 7)

  return (
    <div className="news-page" ref={pageRef}>
      <Navbar variant="solid" />
      <NewsHero />
      <div className="news-page__content">
        <TopArticle article={featured} />
        <ArticleGrid articles={middleRow} sectionClass="article-grid--middle" />
        <ArticleGrid articles={bottomRow} sectionClass="article-grid--bottom" />
      </div>
      <Footer />
    </div>
  )
}