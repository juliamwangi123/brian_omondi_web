import { Link } from 'react-router-dom'
import './BoxedContent.css'

export default function BoxedContent() {
  return (
    <section className="boxed">
      <div className="boxed__inner">
        <div className="boxed__card anim anim--slide-up">
          <h3 className="boxed__card-title">
            Join the Movement<br />
            A Leader Shaped by the People of Mumias West.
          </h3>
          <Link to="/manifesto" className="boxed__btn">
            Read more
          </Link>
        </div>

        <div className="boxed__card anim anim--slide-up anim--delay-2">
          <h3 className="boxed__card-title">
            Read My Manifesto<br />
            Eight pillars. Four wards. One vision for Mumias West.
          </h3>
          <Link to="/manifesto" className="boxed__btn">
            Read more
          </Link>
        </div>
      </div>
    </section>
  )
}