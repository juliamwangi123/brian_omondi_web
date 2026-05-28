import SectionLabel from '../../../components/SectionLabel'  
import ContactForm from './ContactForm'  
import './YourVoice.css'  
  
export default function YourVoice() {  
  return (  
    <section className="your-voice">  
      {/* Background image on left side */}  
      <div  
        className="your-voice__left-bg"  
        style={{ backgroundImage: "url('/images/candidate-side.svg')" }}  
      />  
  
      <div className="your-voice__inner">  
        {/* Left Side — Text content */}  
        <div className="your-voice__left">  
          <div className="your-voice__left-content">  
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
              "Every message will be read. Your voice will shape the  
              manifesto and the priorities of this campaign."  
            </p>  
          </div>  
        </div>  
  
        {/* Right Side — Form card */}  
        <div className="your-voice__right">  
          <div className="your-voice__form-card anim anim--slide-right anim--delay-2">  
            <ContactForm />  
          </div>  
        </div>  
      </div>  
    </section>  
  )  
}  