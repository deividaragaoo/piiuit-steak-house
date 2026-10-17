import { useEffect, useRef } from 'react'
import { PinIcon, WazeIcon, RideIcon } from './Icons.jsx'
import { arrival } from '../data/site.js'

export default function Arrival({ onClose, returnFocusRef }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKey(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      returnFocusRef.current?.focus()
    }
  }, [onClose, returnFocusRef])

  return (
    <div className="arrival" onClick={onClose}>
      <div
        className="arrival-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="arrival-title"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="arrival-kicker" id="arrival-title">{arrival.title}</p>
        <p className="arrival-lead">{arrival.lead}</p>

        <div className="arrival-list">
          <a className="arrival-option" href={arrival.maps.href} target="_blank" rel="noopener noreferrer">
            <span className="arrival-icon">
              <PinIcon />
            </span>
            <span className="arrival-copy">
              <span className="arrival-label">{arrival.maps.label}</span>
              <span className="arrival-hint">{arrival.maps.hint}</span>
            </span>
          </a>

          <a className="arrival-option" href={arrival.waze.href} target="_blank" rel="noopener noreferrer">
            <span className="arrival-icon">
              <WazeIcon />
            </span>
            <span className="arrival-copy">
              <span className="arrival-label">{arrival.waze.label}</span>
              <span className="arrival-hint">{arrival.waze.hint}</span>
            </span>
          </a>

          <div className="arrival-option">
            <span className="arrival-icon" aria-hidden="true">
              <RideIcon />
            </span>
            <span className="arrival-copy">
              <span className="arrival-label">{arrival.ride.label}</span>
              <span className="arrival-hint">{arrival.ride.hint}</span>
              <span className="arrival-note">{arrival.ride.note}</span>
            </span>
          </div>
        </div>

        <button ref={closeRef} type="button" className="arrival-close" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  )
}
