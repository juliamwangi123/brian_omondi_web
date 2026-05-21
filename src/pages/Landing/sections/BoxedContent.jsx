import { Link } from 'react-router-dom'
import './BoxedContent.css'

export default function BoxedContent() {
  return (
    <section className="boxed">
      <div className="boxed__inner">
        <div className="boxed__card anim anim--slide-up">
          <div className="boxed__card-text">
            <h3 className="boxed__card-heading">Join the Movement</h3>
            <p className="boxed__card-sub">
              A Leader Shaped by the People of Mumias West.
            </p>
          </div>
          <Link to="/manifesto" className="boxed__btn">
            Read more
          </Link>
        </div>

        <div className="boxed__card anim anim--slide-up anim--delay-2">
          <div className="boxed__card-text">
            <h3 className="boxed__card-heading">Read My Manifesto</h3>
            <p className="boxed__card-sub">
              Eight pillars. Four wards. One vision for Mumias West.
            </p>
          </div>
          <Link to="/manifesto" className="boxed__btn">
            Read more
          </Link>
        </div>
      </div>
    </section>
  )
}