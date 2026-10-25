import { useState, useRef, useEffect } from 'react'
import { wards as wardsData } from "../../../data/wards";
import './ContactForm.css'

// Google Sheets endpoint
const SHEETS_URL = import.meta.env.VITE_SHEETS_URL

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [ward, setWard] = useState('')
  const [sublocation, setSublocation] = useState('')
  const [pollingStation, setPollingStation] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({})
  const [openDropdown, setOpenDropdown] = useState(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const wardList = Object.keys(wardsData)
  const sublocations = ward ? Object.keys(wardsData[ward]) : []
  const pollingStations =
    ward && sublocation ? wardsData[ward][sublocation] : []

  const formRef = useRef(null)

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  const handleWardSelect = (w) => {
    setWard(w)
    setSublocation('')
    setPollingStation('')
    setOpenDropdown(null)
    setErrors((prev) => ({ ...prev, ward: null }))
  }

  const handleSublocationSelect = (s) => {
    setSublocation(s)
    setPollingStation('')
    setOpenDropdown(null)
    setErrors((prev) => ({ ...prev, sublocation: null }))
  }

  const handlePollingStationSelect = (p) => {
    setPollingStation(p)
    setOpenDropdown(null)
    setErrors((prev) => ({ ...prev, pollingStation: null }))
  }

  // Validation
  const validate = () => {
    const newErrors = {}

    if (!name.trim()) newErrors.name = 'Please enter your name'
    else if (name.trim().length < 2)
      newErrors.name = 'Name must be at least 2 characters'

    if (!phone.trim()) newErrors.phone = 'Please enter your phone number'
    else if (!/^(?:\+254|0)[17]\d{8}$/.test(phone.replace(/\s/g, '')))
      newErrors.phone = 'Enter a valid Kenyan number (e.g. 0712345678)'

    if (!ward) newErrors.ward = 'Please select your ward'
    if (ward && !sublocation)
      newErrors.sublocation = 'Please select your sublocation'
    if (sublocation && !pollingStation)
      newErrors.pollingStation = 'Please select your polling station'

    if (!message.trim()) newErrors.message = 'Please share your message'
    else if (message.trim().length < 10)
      newErrors.message = 'Message is too short (min 10 characters)'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('sending')

    const payload = {
      name,
      phone,
      ward,
      sublocation,
      pollingStation,
      message,
    }

    try {
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      // no-cors can't read the response, but no error means success
      setStatus('success')

      // Reset after 4 seconds
      setTimeout(() => {
        setName('')
        setPhone('')
        setWard('')
        setSublocation('')
        setPollingStation('')
        setMessage('')
        setStatus('idle')
      }, 4000)
    } catch (err) {
      console.error('Sheets submission error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  // Reusable dropdown
  const renderDropdown = ({
    label,
    value,
    placeholder,
    options,
    onSelect,
    dropdownKey,
    error,
  }) => (
    <div className="contact-form__group">
      <label className="contact-form__label">{label}</label>
      <div className="contact-form__dropdown">
        <button
          type="button"
          className={`contact-form__dropdown-trigger${
            value ? ' contact-form__dropdown-trigger--selected' : ''
          }${error ? ' contact-form__dropdown-trigger--error' : ''}`}
          onClick={() => toggleDropdown(dropdownKey)}
        >
          <span>{value || placeholder}</span>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            className={`contact-form__dropdown-arrow${
              openDropdown === dropdownKey
                ? ' contact-form__dropdown-arrow--open'
                : ''
            }`}
          >
            <path d="M1 1L7 7L13 1" stroke="#000000" strokeWidth="2" />
          </svg>
        </button>

        {openDropdown === dropdownKey && options.length > 0 && (
          <ul className="contact-form__dropdown-list">
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  className={`contact-form__dropdown-item${
                    value === opt ? ' contact-form__dropdown-item--active' : ''
                  }`}
                  onClick={() => onSelect(opt)}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <span className="contact-form__error">{error}</span>}
    </div>
  )

  const isDisabled = status === 'sending' || status === 'success'

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      ref={formRef}
      noValidate
    >
      {/* Name */}
      <div className="contact-form__group">
        <label className="contact-form__label">Your Name</label>
        <div
          className={`contact-form__input-wrap${
            name ? ' contact-form__input-wrap--active' : ''
          }${errors.name ? ' contact-form__input-wrap--error' : ''}`}
        >
          <input
            type="text"
            placeholder="e.g. John Baraza..."
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (errors.name) setErrors((p) => ({ ...p, name: null }))
            }}
            className="contact-form__input"
          />
        </div>
        {errors.name && (
          <span className="contact-form__error">{errors.name}</span>
        )}
      </div>

      {/* Phone */}
      <div className="contact-form__group">
        <label className="contact-form__label">Phone Number</label>
        <div
          className={`contact-form__input-wrap${
            phone ? ' contact-form__input-wrap--active' : ''
          }${errors.phone ? ' contact-form__input-wrap--error' : ''}`}
        >
          <input
            type="tel"
            placeholder="e.g. 0712 345 678"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
              if (errors.phone) setErrors((p) => ({ ...p, phone: null }))
            }}
            className="contact-form__input"
          />
        </div>
        {errors.phone && (
          <span className="contact-form__error">{errors.phone}</span>
        )}
      </div>

      {/* Ward */}
      {renderDropdown({
        label: 'Your Ward',
        value: ward,
        placeholder: 'Select Your Ward',
        options: wardList,
        onSelect: handleWardSelect,
        dropdownKey: 'ward',
        error: errors.ward,
      })}

      {/* Sublocation — appears after ward */}
      {ward && (
        <div className="contact-form__reveal">
          {renderDropdown({
            label: 'Your Sublocation',
            value: sublocation,
            placeholder: 'Select Your Sublocation',
            options: sublocations,
            onSelect: handleSublocationSelect,
            dropdownKey: 'sublocation',
            error: errors.sublocation,
          })}
        </div>
      )}

      {/* Polling Station — appears after sublocation */}
      {sublocation && (
        <div className="contact-form__reveal">
          {renderDropdown({
            label: 'Your Polling Station',
            value: pollingStation,
            placeholder: 'Select Your Polling Station',
            options: pollingStations,
            onSelect: handlePollingStationSelect,
            dropdownKey: 'pollingStation',
            error: errors.pollingStation,
          })}
        </div>
      )}

      {/* Message */}
      <div className="contact-form__group">
        <label className="contact-form__label">Message</label>
        <div
          className={`contact-form__textarea-wrap${
            message ? ' contact-form__textarea-wrap--active' : ''
          }${errors.message ? ' contact-form__textarea-wrap--error' : ''}`}
        >
          <textarea
            placeholder="Share your thoughts, concerns or hopes for our constituency. Type here..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              if (errors.message) setErrors((p) => ({ ...p, message: null }))
            }}
            className="contact-form__textarea"
          />
        </div>
        {errors.message && (
          <span className="contact-form__error">{errors.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className={`contact-form__submit${
          status === 'success' ? ' contact-form__submit--sent' : ''
        }${status === 'error' ? ' contact-form__submit--error' : ''}`}
        disabled={isDisabled}
      >
        {status === 'sending' ? (
          <>
            <span className="contact-form__spinner" />
            <span>Sending...</span>
          </>
        ) : status === 'success' ? (
          <>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Message Received! Thank you.</span>
          </>
        ) : status === 'error' ? (
          <>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M12 8V12M12 16H12.01M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Something went wrong. Try again.</span>
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                fill="currentColor"
              />
            </svg>
            <span>Send My Message</span>
          </>
        )}
      </button>
    </form>
  )
}