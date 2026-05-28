// PillarSection.jsx  
import { useEffect, useRef } from 'react'  
import './PillarSection.css'  
  
export default function PillarSection({ pillar, index, isLast }) {  
  const isEven = index % 2 === 0  
  const sectionRef = useRef(null)  
  const dividerRef = useRef(null)  
  
  useEffect(() => {  
    const observerOptions = {  
      root: null,  
      rootMargin: '-10% 0px -10% 0px',  
      threshold: 0.1  
    }  
  
    const handleIntersect = (entries, observer) => {  
      entries.forEach(entry => {  
        if (entry.isIntersecting) {  
          entry.target.classList.add('anim--visible')  
          observer.unobserve(entry.target)  
        }  
      })  
    }  
  
    const observer = new IntersectionObserver(handleIntersect, observerOptions)  
  
    // Observe the section for Z-border animation  
    if (sectionRef.current) {  
      observer.observe(sectionRef.current)  
    }  
  
    // Observe divider with different threshold (triggers when next section approaches)  
    if (dividerRef.current) {  
      const dividerObserver = new IntersectionObserver(  
        (entries) => {  
          entries.forEach(entry => {  
            if (entry.isIntersecting) {  
              entry.target.classList.add('anim--visible')  
              dividerObserver.unobserve(entry.target)  
            }  
          })  
        },  
        {  
          root: null,  
          rootMargin: '0px 0px -20% 0px',  
          threshold: 0.5  
        }  
      )  
      dividerObserver.observe(dividerRef.current)  
  
      return () => {  
        observer.disconnect()  
        dividerObserver.disconnect()  
      }  
    }  
  
    return () => observer.disconnect()  
  }, [])  
  
  return (  
    <>  
      <section  
        ref={sectionRef}  
        id={pillar.id}  
        className={`pillar-section ${isEven ? 'pillar-section--left' : 'pillar-section--right'}`}  
      >  
        <div className="pillar-section__container">  
          {/* Z-Border Frame */}  
          <div className="pillar-section__border-frame" aria-hidden="true">  
            <span className="pillar-section__border pillar-section__border--top"></span>  
            <span className="pillar-section__border pillar-section__border--middle"></span>  
            <span className="pillar-section__border pillar-section__border--bottom"></span>  
          </div>  
  
          <div className="pillar-section__inner">  
            {/* Visual Column - Image + Title with Gray Background */}  
            <div className="pillar-section__visual">  
              <div className="pillar-section__visual-wrapper">  
                <div className="pillar-section__image anim anim--slide-up">  
                  <img  
                    src={pillar.image}  
                    alt={pillar.navLabel}  
                    loading="lazy"  
                  />  
                </div>  
  
                <div className="pillar-section__title-block anim anim--slide-up anim--delay-2">  
                  <h2 className="pillar-section__title">{pillar.title}</h2>  
                  <p className="pillar-section__subtitle">{pillar.subtitle}</p>  
                  <div className="pillar-section__title-line"></div>  
                  <p className="pillar-section__tagline">{pillar.tagline}</p>  
                </div>  
              </div>  
            </div>  
  
            {/* Content Column - Priorities + Quote */}  
            <div className="pillar-section__content">  
              <div className="pillar-section__priorities anim anim--slide-up anim--delay-3">  
                <h3 className="pillar-section__priorities-heading">Key Priorities</h3>  
                <ul className="pillar-section__priorities-list">  
                  {pillar.priorities.map((item, i) => (  
                    <li key={i} className="pillar-section__priority-item">  
                      {item}  
                    </li>  
                  ))}  
                </ul>  
              </div>  
  
              <div className="pillar-section__quote anim anim--slide-up anim--delay-4">  
                <div className="pillar-section__quote-line"></div>  
                <div className="pillar-section__quote-content">  
                  <p className="pillar-section__quote-label">Our Goal</p>  
                  <p className="pillar-section__quote-text">{pillar.goalQuote}</p>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  
  
      {!isLast && (  
        <div   
          ref={dividerRef}   
          className="pillar-section__divider"  
        ></div>  
      )}  
    </>  
  )  
}  