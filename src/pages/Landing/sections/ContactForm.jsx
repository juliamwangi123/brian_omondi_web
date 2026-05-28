import { useState } from 'react'  
import './ContactForm.css'  
  
const wards = [  
  'Mumias Central',  
  'Mumias North',  
  'Etenje',  
  'Musanda',  
]  
  
export default function ContactForm() {  
  const [name, setName] = useState('')  
  const [ward, setWard] = useState('')  
  const [message, setMessage] = useState('')  
  const [dropdownOpen, setDropdownOpen] = useState(false)  
  const [submitted, setSubmitted] = useState(false)  
  
  const handleWardSelect = (w) => {  
    setWard(w)  
    setDropdownOpen(false)  
  }  
  
  const handleSubmit = (e) => {  
    e.preventDefault()  
    if (!name.trim() || !ward || !message.trim()) return  
  
    const email = 'hello@brian-omondi.com'  
    const subject = `Message from ${name} - ${ward} Ward`  
    const body = `Name: ${name}%0D%0AWard: ${ward}%0D%0A%0D%0A${message}`  
  
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`  
  
    setSubmitted(true)  
    setTimeout(() => {  
      setName('')  
      setWard('')  
      setMessage('')  
      setSubmitted(false)  
    }, 3000)  
  }  
  
  return (  
    <form className="contact-form" onSubmit={handleSubmit}>  
      {/* Name */}  
      <div className="contact-form__group">  
        <label className="contact-form__label">Your Name</label>  
        <div className={`contact-form__input-wrap${name ? ' contact-form__input-wrap--active' : ''}`}>  
          <input  
            type="text"  
            placeholder="e.g. John Baraza..."  
            value={name}  
            onChange={(e) => setName(e.target.value)}  
            className="contact-form__input"  
          />  
        </div>  
      </div>  
  
      {/* Ward Dropdown */}  
      <div className="contact-form__group">  
        <label className="contact-form__label">Your Ward</label>  
        <div className="contact-form__dropdown">  
          <button  
            type="button"  
            className={`contact-form__dropdown-trigger${ward ? ' contact-form__dropdown-trigger--selected' : ''}`}  
            onClick={() => setDropdownOpen((prev) => !prev)}  
          >  
            <span>{ward || 'Select Your Ward'}</span>  
            <svg  
              width="14"  
              height="9"  
              viewBox="0 0 14 9"  
              fill="none"  
              className={`contact-form__dropdown-arrow${dropdownOpen ? ' contact-form__dropdown-arrow--open' : ''}`}  
            >  
              <path d="M1 1L7 7L13 1" stroke="#000000" strokeWidth="2" />  
            </svg>  
          </button>  
  
          {dropdownOpen && (  
            <ul className="contact-form__dropdown-list">  
              {wards.map((w) => (  
                <li key={w}>  
                  <button  
                    type="button"  
                    className={`contact-form__dropdown-item${ward === w ? ' contact-form__dropdown-item--active' : ''}`}  
                    onClick={() => handleWardSelect(w)}  
                  >  
                    {w}  
                  </button>  
                </li>  
              ))}  
            </ul>  
          )}  
        </div>  
      </div>  
  
      {/* Message */}  
      <div className="contact-form__group">  
        <label className="contact-form__label">Message</label>  
        <div className={`contact-form__textarea-wrap${message ? ' contact-form__textarea-wrap--active' : ''}`}>  
          <textarea  
            placeholder="Share your thoughts, concerns or hopes for our constituency. Type here..."  
            value={message}  
            onChange={(e) => setMessage(e.target.value)}  
            className="contact-form__textarea"  
          />  
        </div>  
      </div>  
  
      {/* Submit */}  
      <button  
        type="submit"  
        className={`contact-form__submit${submitted ? ' contact-form__submit--sent' : ''}`}  
        disabled={submitted}  
      >  
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">  
          <path  
            d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"  
            fill="currentColor"  
          />  
        </svg>  
        <span>{submitted ? 'Message Sent!' : 'Send My Message'}</span>  
      </button>  
    </form>  
  )  
}  