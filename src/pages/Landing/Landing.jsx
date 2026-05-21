import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from './sections/Hero'
import BoxedContent from './sections/BoxedContent'
import About from './sections/About'
import Vision from './sections/Vision'
import Pillars from './sections/Pillars'
import LatestUpdates from './sections/LatestUpdates'
import CampaignTrail from './sections/CampaignTrail'
import YourVoice from './sections/YourVoice'
import useScrollAnimation from '../../components/useScrollAnimation'
import './Landing.css'

export default function Landing() {
  const pageRef = useScrollAnimation(0.12)

  return (
    <div className="landing" ref={pageRef}>
      <Navbar variant="transparent" />
      <Hero />
      <BoxedContent />
      <About />

      {/* Vision + Pillars wrapped together for shared background */}
      <div className="vision-pillars-wrapper">
        <div className="vision-pillars-wrapper__bg" />
        <div className="vision-pillars-wrapper__overlay" />
        <Vision />
        <Pillars />
      </div>

      <LatestUpdates />
      <CampaignTrail />
      <YourVoice />
      <Footer />
    </div>
  )
}