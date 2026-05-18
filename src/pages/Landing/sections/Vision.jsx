import SectionLabel from '../../../components/SectionLabel'
import './Vision.css'

export default function Vision() {
  return (
    <section className="vision">
      <div className="vision__overlay" />
      <div className="vision__inner">
        <div className="anim anim--slide-up">
          <SectionLabel text="My Vision" variant="blue" />
        </div>
        <h2 className="vision__title anim anim--slide-up anim--delay-1">
          What Brian Stands For
        </h2>
        <p className="vision__subtitle anim anim--slide-up anim--delay-2">
          Eight pillars that will guide every decision made for Mumias West.
        </p>
      </div>
    </section>
  )
}