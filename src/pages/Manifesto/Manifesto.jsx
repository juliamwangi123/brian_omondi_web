// Manifesto.jsx  
import Navbar from '../../components/Navbar/Navbar'  
import Footer from '../../components/Footer/Footer'  
import ManifestoHero from './sections/ManifestoHero'  
import PillarsNav from './sections/PillarsNav'  
import PillarSection from './sections/PillarSection'  
import ManifestoCTA from './sections/ManifestoCTA'  
import pillarsData from '../../data/pillarsData'  
import useScrollAnimation from '../../components/useScrollAnimation'  
import './Manifesto.css'  
  
export default function Manifesto() {  
  const pageRef = useScrollAnimation(0.1)  
  
  return (  
    <div className="manifesto-page" ref={pageRef}>  
      <Navbar variant="solid" />  
        
      <ManifestoHero />  
        
      {/* Blue separator line between hero and pillars */}  
      <div className="manifesto-page__separator"></div>  
        
      {/* Sticky pillars navigation - appears on scroll */}  
      <PillarsNav pillars={pillarsData} />  
        
      {/* Pillars content */}  
      <div className="manifesto-page__content">  
        {pillarsData.map((pillar, index) => (  
          <PillarSection  
            key={pillar.id}  
            pillar={pillar}  
            index={index}  
            isLast={index === pillarsData.length - 1}  
          />  
        ))}  
      </div>  
        
      <ManifestoCTA />  
      <Footer />  
    </div>  
  )  
}  