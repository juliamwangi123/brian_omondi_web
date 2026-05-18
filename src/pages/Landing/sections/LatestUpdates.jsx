import SectionLabel from '../../../components/SectionLabel'
import './LatestUpdates.css'

export default function LatestUpdates() {
  return (
    <section className="latest-updates">
      <div className="latest-updates__inner">
        <div className="anim anim--slide-up">
          <SectionLabel text="Latest Updates" variant="blue" />
        </div>
        <h2 className="latest-updates__title anim anim--slide-up anim--delay-1">
          From the Campaign Trail
        </h2>
        <p className="latest-updates__subtitle anim anim--slide-up anim--delay-2">
          Stay up to date with Brian&rsquo;s journey across Mumias West.
        </p>
      </div>
    </section>
  )
}