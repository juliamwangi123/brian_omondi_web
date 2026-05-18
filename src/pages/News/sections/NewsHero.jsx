import SectionLabel from '../../../components/SectionLabel'
import './NewsHero.css'

export default function NewsHero() {
  return (
    <section className="news-hero">
      <div className="news-hero__inner">
        {/* Left Text */}
        <div className="news-hero__text">
          <div className="news-hero__label anim anim--slide-left">
            <SectionLabel text="Campaign Updates" variant="blue" />
          </div>

          <h1 className="news-hero__title anim anim--slide-left anim--delay-1">
            From the<br />Campaign<br />Trail
          </h1>

          <p className="news-hero__script anim anim--slide-left anim--delay-2">
            &ldquo;Stay up to date with Brian&rsquo;s journey across Mumias West.&rdquo;
          </p>
        </div>

        {/* Right Image */}
        <div className="news-hero__image anim anim--fade anim--delay-3">
          <img
            src="/images/gallery-dsc.jpg"
            alt="Brian Omondi on the campaign trail"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}