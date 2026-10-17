import { ClockIcon, CutleryIcon, PinIcon, WhatsAppIcon, ChevronIcon, InstagramIcon } from './Icons.jsx'
import Scenery from './Scenery.jsx'
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

function Option({ item, onOpenView }) {
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

  return (
    <a className="option" href={item.destination.href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

export default function Landing({ onOpenView }) {
  return (
    <main className="stage">
      <div className="scene-wrap">
        <Scenery />
        <div className="card-stack">
          <div className="frame-arc" aria-hidden="true" />
          <article className="card">
        <div className="card-inner">
          <header className="brand">
            <h1>{site.brand}</h1>
            <p className="brand-line">{site.brandLine}</p>
            <p className="tagline">{site.tagline}</p>
            <p className="signature">{site.signature}</p>
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
              <Option key={item.key} item={item} onOpenView={onOpenView} />
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
    </main>
  )
}
