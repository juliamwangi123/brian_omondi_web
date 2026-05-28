import { useEffect, useRef } from 'react'  
import './NewsHero.css'  
  
export default function NewsHero() {  
  const sectionRef = useRef(null)  
  
  useEffect(() => {  
    const section = sectionRef.current  
    if (!section) return  
  
    const elements = section.querySelectorAll(  
      '.news-hero__text, .news-hero__label, .news-hero__title, .news-hero__script, .news-hero__image'  
    )  
  
    const observer = new IntersectionObserver(  
      (entries) => {  
        entries.forEach((entry) => {  
          if (entry.isIntersecting) {  
            elements.forEach((el) => {  
              el.classList.add('animate')  
            })  
            observer.disconnect()  
          }  
        })  
      },  
      { threshold: 0.1 }  
    )  
  
    observer.observe(section)  
  
    return () => observer.disconnect()  
  }, [])  
  
  return (  
    <section className="news-hero" ref={sectionRef}>  
      <div className="news-hero__container">  
        <div className="news-hero__text">  
          <div className="news-hero__label">  
            <hr className="news-hero__label-line" />  
            <span className="news-hero__label-text">Campaign Updates</span>  
            <hr className="news-hero__label-line" />  
          </div>  
  
          <h1 className="news-hero__title">  
            <span className="news-hero__title-line">From the</span>  
            <span className="news-hero__title-line">Campaign Trail</span>  
          </h1>  
  
          <p className="news-hero__script">  
            "Stay up to date with Brian's journey across Mumias West."  
          </p>  
        </div>  
  
        <div className="news-hero__image">  
          <img  
            src="/images/gallery-dsc.svg"  
            alt="Brian Omondi on the campaign trail"  
            loading="eager"  
          />  
        </div>  
      </div>  
    </section>  
  )  
}  