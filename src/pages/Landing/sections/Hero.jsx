import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__text anim anim--slide-left">
          <h1 className="hero__name">
            Hon. Brian<br />Omondi
          </h1>
        </div>

        <div className="hero__sub anim anim--slide-left anim--delay-2">
          <span className="hero__position">FOR MP, MUMIAS WEST</span>
          <span className="hero__line" />
        </div>

        <div className="hero__script anim anim--slide-left anim--delay-3">
          <p>&ldquo;Son of the Soil, Servant of the People&rdquo;</p>
        </div>

        <div className="hero__quote anim anim--slide-left anim--delay-4">
          <p>Mumias West deserves better.<br />I will deliver it.</p>
        </div>
      </div>
    </section>
  )
}