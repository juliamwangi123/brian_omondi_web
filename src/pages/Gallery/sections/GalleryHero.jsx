import SectionLabel from '../../../components/SectionLabel'
import './GalleryHero.css'

export default function GalleryHero() {
  return (
    <section className="gallery-hero">
      {/* Fixed layers — persist as user scrolls */}
      <div className="gallery-hero__fixed">
        <div className="gallery-hero__bg" />
        <div className="gallery-hero__candidate">
          <img
            src="/images/Brayo side pose.svg"
            alt=""
            loading="eager"
          />
        </div>
        <div className="gallery-hero__gradient" />
      </div>

      {/* Text content */}
      <div className="gallery-hero__inner">
        <div className="gallery-hero__text">
          <div className="gallery-hero__label anim anim--slide-left">
            <SectionLabel text="Photo Gallery" variant="white" />
          </div>

          <h1 className="gallery-hero__title anim anim--slide-left anim--delay-1">
            Gallery
          </h1>

          <p className="gallery-hero__script anim anim--slide-left anim--delay-2">
            &ldquo;Moments from the campaign trail across Mumias West, every
            handshake, every gathering, every step of the journey&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}