import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import GalleryHero from './sections/GalleryHero'
import GalleryGrid from './sections/GalleryGrid'
import useScrollAnimation from '../../components/useScrollAnimation'
import './Gallery.css'

export default function GalleryPage() {
  const pageRef = useScrollAnimation(0.08)

  return (
    <div className="gallery-page" ref={pageRef}>
      <Navbar variant="solid" />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </div>
  )
}