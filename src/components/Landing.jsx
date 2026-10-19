import { useRef, useState } from 'react'
import { ClockIcon, CutleryIcon, PinIcon, WhatsAppIcon, ChevronIcon, InstagramIcon } from './Icons.jsx'
import Arrival from './Arrival.jsx'
import Scenery, { CardSmoke } from './Scenery.jsx'
import { destinations, site } from '../data/site.js'

const options = [
  {
    key: 'menu',
    title: 'Cardápio',
    description: 'Confira nossas opções',
    destination: destinations.menu,
    icon: CutleryIcon,
  },
  {
    key: 'maps',
    title: 'Como chegar',
    description: 'Encontre o PIIUIT Steak House',
    destination: destinations.maps,
    icon: PinIcon,
  },
  {
    key: 'reservations',
    title: 'Reservas',
    description: 'Entre em contato pelo WhatsApp',
    destination: destinations.reservations,
    icon: WhatsAppIcon,
  },
]

function Option({ item, onOpenView, onOpenArrival, arrivalRef }) {
  const Icon = item.icon
  const content = (
    <>
      <span className="option-icon">
        <Icon />
      </span>
      <span className="option-copy">
        <span className="option-title">{item.title}</span>
        <span className="option-text">{item.description}</span>
      </span>
      <span className="option-chevron" aria-hidden="true">
        <ChevronIcon />
      </span>
    </>
  )

  if (item.destination.kind === 'view') {
    return (
      <button type="button" className="option" onClick={() => onOpenView(item.destination.view)}>
        {content}
      </button>
    )
  }

  if (item.destination.kind === 'arrival') {
    return (
      <button ref={arrivalRef} type="button" className="option" onClick={onOpenArrival}>
        {content}
      </button>
    )
  }

  return (
    <a className="option" href={item.destination.href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

export default function Landing({ onOpenView }) {
  const [arrivalOpen, setArrivalOpen] = useState(false)
  const arrivalRef = useRef(null)

  return (
    <main className="stage">
      <div className="scene-wrap">
        <Scenery />
        <div className="card-stack">
          <CardSmoke />
          <article className="card">
        <div className="card-inner">
          <header className="brand">
            <h1>
              <img
                src="/images/piuit-logo-transparente.png"
                alt="PIIUIT Steak House — brasão Angus Black"
                className="piuit-logo"
                width="635"
                height="529"
              />
            </h1>
          </header>

          <div className="divider" aria-hidden="true">
            <span />
          </div>

          <section className="hours" aria-label="Horários e funcionamento">
            <span className="hours-icon">
              <ClockIcon />
            </span>
            <div>
              <p className="hours-label">{site.hours.label}</p>
              <p className="hours-days">{site.hours.days}</p>
              <p className="hours-time">{site.hours.time}</p>
              <p className="hours-note">{site.hours.note}</p>
            </div>
          </section>

          <nav className="options" aria-label="Acesso rápido">
            {options.map((item) => (
              <Option
                key={item.key}
                item={item}
                onOpenView={onOpenView}
                onOpenArrival={() => setArrivalOpen(true)}
                arrivalRef={item.destination.kind === 'arrival' ? arrivalRef : undefined}
              />
            ))}
          </nav>

          <footer className="card-foot">
            <p>{site.name}</p>
            <div className="divider divider-foot" aria-hidden="true">
              <span />
            </div>
            <a href={destinations.instagram.href} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              <span>{site.instagramHandle}</span>
            </a>
          </footer>
          </div>
          </article>
        </div>
      </div>
      {arrivalOpen ? (
        <Arrival onClose={() => setArrivalOpen(false)} returnFocusRef={arrivalRef} />
      ) : null}
    </main>
  )
}
