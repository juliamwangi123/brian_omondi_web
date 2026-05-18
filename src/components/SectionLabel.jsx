export default function SectionLabel({ text, variant = 'blue' }) {
  const isWhite = variant === 'white'

  return (
    <div className="section-label">
      <span
        className="section-label__line"
        style={{ borderTopColor: isWhite ? '#FFFFFF' : '#1E49E3' }}
      />
      <span
        className="section-label__text"
        style={{ color: isWhite ? '#FFFFFF' : '#1E49E3' }}
      >
        {text}
      </span>
      <span
        className="section-label__line"
        style={{ borderTopColor: isWhite ? '#FFFFFF' : '#1E49E3' }}
      />
    </div>
  )
}