import './ManifestoHero.css'

export default function ManifestoHero() {
  return (
    <section className="mhero">
      <div className="mhero__bg" />

      <div className="mhero__inner">
        {/* Left Text */}
        <div className="mhero__text">
          <h1 className="mhero__title anim anim--slide-left">
            Brian&rsquo;s<br />Manifesto
          </h1>
          <p className="mhero__subtitle anim anim--slide-left anim--delay-2">
            Eight pillars. Four wards. One vision for a transformed Mumias West
          </p>
        </div>

        {/* Right Image */}
        <div className="mhero__image anim anim--fade anim--delay-3">
          <img
            src="/images/candidate-specs.jpg"
            alt="Brian Omondi"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}