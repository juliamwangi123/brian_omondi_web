import SectionLabel from '../../../components/SectionLabel'
import './GalleryHero.css'

export default function GalleryHero() {
  return (
    <section className="gallery-hero">
      {/* Background layers */}
      <div className="gallery-hero__bg" />
      <div className="gallery-hero__gradient" />

      <div className="gallery-hero__inner">
        {/* Left Text */}
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

        {/* Right Image */}
        <div className="gallery-hero__image anim anim--fade anim--delay-3">
          <img
            src="/images/candidate-side.svg"
            alt="Brian Omondi"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}