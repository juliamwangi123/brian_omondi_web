import SectionLabel from '../../../components/SectionLabel'
import ContactForm from './ContactForm'
import './YourVoice.css'

export default function YourVoice() {
  return (
    <section className="your-voice">
      <div className="your-voice__inner">
        {/* Left Side */}
        <div className="your-voice__left">
          <div className="your-voice__header anim anim--slide-left">
            <SectionLabel text="Your Voice Matters" variant="white" />
          </div>

          <h2 className="your-voice__title anim anim--slide-left anim--delay-1">
            Talk To Brian
          </h2>

          <p className="your-voice__body anim anim--slide-left anim--delay-2">
            A good leader listens before he acts. Brian wants to hear directly
            from the people of Mumias West, your concerns, your hopes, and the
            issues that matter most to your family and your ward
          </p>

          <p className="your-voice__script anim anim--slide-left anim--delay-3">
            &ldquo;Every message will be read. Your voice will shape the
            manifesto and the priorities of this campaign.&rdquo;
          </p>
        </div>

        {/* Right Side — Form */}
        <div className="your-voice__right">
          {/* Candidate Image */}
          <div className="your-voice__image-wrap anim anim--slide-right">
            <img
              src="/images/candidate-side.jpg"
              alt="Brian Omondi"
              className="your-voice__candidate-img"
              loading="lazy"
            />
          </div>

          {/* Form Card */}
          <div className="your-voice__form-card anim anim--slide-right anim--delay-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}