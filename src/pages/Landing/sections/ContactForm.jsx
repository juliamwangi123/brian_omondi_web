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
    // In production, send to an API
    console.log({ name, ward, message })
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
            placeholder="e.g. John Baraza"
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
              <path d="M1 1L7 7L13 1" stroke={ward ? '#000' : '#9D9D9D'} strokeWidth="2" />
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
            placeholder="Share your thoughts, concerns or hopes for our constituency"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-form__textarea"
            rows={6}
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
            d="M22 2L11 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{submitted ? 'Message Sent!' : 'Send My Message'}</span>
      </button>
    </form>
  )
}