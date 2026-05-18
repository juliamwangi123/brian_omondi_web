import { useState } from 'react'
import galleryData from '../../../data/galleryData'
import './GalleryGrid.css'

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState(null)

  const rows = []
  const rowNums = [...new Set(galleryData.map((img) => img.row))]
  rowNums.forEach((r) => {
    rows.push(galleryData.filter((img) => img.row === r))
  })

  const openLightbox = (img) => setLightbox(img)
  const closeLightbox = () => setLightbox(null)

  const goNext = () => {
    if (!lightbox) return
    const idx = galleryData.findIndex((g) => g.id === lightbox.id)
    const next = galleryData[(idx + 1) % galleryData.length]
    setLightbox(next)
  }

  const goPrev = () => {
    if (!lightbox) return
    const idx = galleryData.findIndex((g) => g.id === lightbox.id)
    const prev = galleryData[(idx - 1 + galleryData.length) % galleryData.length]
    setLightbox(prev)
  }

  return (
    <section className="gallery-grid">
      <div className="gallery-grid__inner">
        {rows.map((row, rowIndex) => {
          const hasWide = row.some((img) => img.span === 'wide')

          return (
            <div
              key={rowIndex}
              className={`gallery-grid__row ${hasWide ? 'gallery-grid__row--mixed' : 'gallery-grid__row--even'}`}
            >
              {row.map((img, imgIndex) => (
                <div
                  key={img.id}
                  className={`gallery-grid__item ${img.span === 'wide' ? 'gallery-grid__item--wide' : ''} anim anim--slide-up anim--delay-${imgIndex + 1}`}
                  onClick={() => openLightbox(img)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(img)}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="gallery-grid__item-overlay">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="19" stroke="#FFFFFF" strokeWidth="2"/>
                      <line x1="20" y1="12" x2="20" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="20" x2="28" y2="20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div
            className="gallery-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              type="button"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <line x1="4" y1="4" x2="24" y2="24" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
                <line x1="24" y1="4" x2="4" y2="24" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </button>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={goPrev}
              aria-label="Previous image"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polyline points="15 18 9 12 15 6" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="gallery-lightbox__image"
            />

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={goNext}
              aria-label="Next image"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polyline points="9 18 15 12 9 6" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}