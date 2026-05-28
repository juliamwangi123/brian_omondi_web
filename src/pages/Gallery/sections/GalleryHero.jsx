/* GalleryHero.jsx */  
  
import './GalleryHero.css'  
  
export default function GalleryHero() {  
  return (  
    <section className="gallery-hero">  
      {/* Fixed layers — persist as user scrolls */}  
      <div className="gallery-hero__fixed">  
        <div className="gallery-hero__bg" />  
        <div className="gallery-hero__candidate">  
          <img  
            src="/images/Brayo side pose.svg"  
            alt="Brian Omondi"  
            loading="eager"  
          />  
        </div>  
        <div className="gallery-hero__gradient" />  
      </div>  
  
      {/* Text content */}  
      <div className="gallery-hero__inner">  
        <div className="gallery-hero__text">  
          {/* Section label with lines */}  
          <div className="gallery-hero__label">  
            <hr className="gallery-hero__label-line" />  
            <span className="gallery-hero__label-text">Photo Gallery</span>  
            <hr className="gallery-hero__label-line" />  
          </div>  
  
          <h1 className="gallery-hero__title">  
            Gallery  
          </h1>  
  
          <p className="gallery-hero__script">  
            "Moments from the campaign trail across Mumias West, every  
            handshake, every gathering, every step of the journey"  
          </p>  
        </div>  
      </div>  
    </section>  
  )  
}  