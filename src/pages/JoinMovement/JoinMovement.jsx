import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import useScrollAnimation from '../../components/useScrollAnimation'
import './JoinMovement.css'

export default function JoinMovement() {
  const pageRef = useScrollAnimation(0.1)

  return (
    <div className="join-page" ref={pageRef}>
      <Navbar variant="solid" />

      <section className="join-hero">
        {/* Candidate image — fixed, stays as you scroll */}
        <div className="join-hero__image-fixed">
          <img
            src="/images/candidate-join.svg"
            alt="Brian Omondi"
            loading="eager"
          />
        </div>

        {/* Content scrolls over the image */}
        <div className="join-hero__content-wrapper">
          <div className="join-hero__content">
            <h1 className="join-hero__title anim anim--slide-right">
              About Brian Omondi
            </h1>

            <p className="join-hero__script anim anim--slide-right anim--delay-1">
              &ldquo;Son of Mumias West, committed to transforming our
              community through integrity, action, and results&rdquo;
            </p>

            <div className="join-hero__divider anim anim--slide-right anim--delay-2" />

            {/* Core Values — uses SVG image */}
            {/* Core Values */}
            <div className="join-values">
            <h2 className="join-values__title anim anim--slide-up anim--delay-2">
                Core Values
            </h2>
            <p className="join-values__subtitle anim anim--slide-up anim--delay-3">
                These principles guide every decision and action
            </p>
            <div className="join-values__svg anim anim--slide-up anim--delay-4">
                <img
                src="/images/core-values.svg"
                alt="Core Values - Integrity, Action, People-Focused, Excellence"
                className="join-values__image"
                loading="lazy"
                />
            </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}