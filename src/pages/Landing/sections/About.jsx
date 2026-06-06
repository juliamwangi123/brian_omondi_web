import './About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__image anim anim--slide-left">
          <img
            src="/images/candidate-portrait.webp"
            alt="Hon. Brian Omondi"
            loading="lazy"
          />
        </div>

        <div className="about__text">
          {/* Line + Label on same row — line BEFORE label */}
          <div className="about__label-row anim anim--slide-right">
            <span className="about__accent-line" />
            <span className="about__label">About the Candidate</span>
          </div>

          <h2 className="about__title anim anim--slide-right anim--delay-1">
            A Leader Shaped by the People of Mumias West
          </h2>

          <p className="about__body anim anim--slide-right anim--delay-2">
            Brian Omondi is a passionate advocate for the people of Mumias West.
            With a deep understanding of the challenges facing the constituency,
            from agriculture to education, health to infrastructure, he is
            committed to bringing real, measurable change to every ward.
          </p>

          {/* Thin divider after body, before italic */}
          <div className="about__divider anim anim--slide-right anim--delay-3" />

          <p className="about__italic anim anim--slide-right anim--delay-4">
            His campaign is built on three unshakeable pillars:{' '}
            <strong>integrity in leadership</strong>,{' '}
            <strong>decisive action</strong>, and{' '}
            <strong>results</strong> that every family will feel.
          </p>
        </div>
      </div>
    </section>
  )
}