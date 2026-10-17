import { useEffect, useState } from 'react'
import { categories, formatBRL } from '../data/menu.js'
import { prefersReducedMotion, whatsappLink } from '../data/site.js'

function consultLink(name) {
  return whatsappLink(`Olá! Gostaria de consultar o valor de ${name} no PIIUIT Steak House.`)
}

function PriceRow({ item }) {
  return (
    <li className="price-row">
      <span className="price-name">{item.name}</span>
      {item.price == null ? (
        <a className="price-consult" href={consultLink(item.name)} target="_blank" rel="noopener noreferrer">
          Consultar valores
        </a>
      ) : (
        <span className="price-value">{formatBRL(item.price)}</span>
      )}
    </li>
  )
}

export default function Menu() {
  const [active, setActive] = useState('steaks')
  const current = categories.find((category) => category.id === active) ?? categories[0]

  useEffect(() => {
    const onOpen = (event) => {
      if (categories.some((category) => category.id === event.detail)) {
        setActive(event.detail)
      }
    }
    window.addEventListener('piiuit:menu', onOpen)
    return () => window.removeEventListener('piiuit:menu', onOpen)
  }, [])

  useEffect(() => {
    const tab = document.getElementById(`tab-${active}`)
    const scroller = tab?.closest('.tabs-scroll')
    if (!tab || !scroller) return
    const left = tab.offsetLeft - scroller.clientWidth / 2 + tab.offsetWidth / 2
    scroller.scrollTo({
      left: Math.max(0, left),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }, [active])

  return (
    <section className="section menu-section" id="cardapio" aria-labelledby="cardapio-title">
      <div className="section-inner">
        <header className="section-heading" data-reveal>
          <p className="eyebrow">Cardápio</p>
          <h2 id="cardapio-title">Nosso cardápio</h2>
          <p className="lede">Do primeiro espeto aos grandes cortes. Escolha sua próxima experiência.</p>
        </header>

        <div className="tabs-scroll" data-reveal>
          <div
            className="tabs"
            role="tablist"
            aria-label="Categorias do cardápio"
            onKeyDown={(event) => {
              const current = categories.findIndex((category) => category.id === active)
              if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
              event.preventDefault()
              const direction = event.key === 'ArrowRight' ? 1 : -1
              const next = (current + direction + categories.length) % categories.length
              setActive(categories[next].id)
              event.currentTarget.querySelectorAll('[role="tab"]')[next]?.focus()
            }}
          >
            {categories.map((category) => {
              const selected = category.id === active
              return (
                <button
                  key={category.id}
                  id={`tab-${category.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${category.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={selected ? 'is-active' : undefined}
                  onClick={() => setActive(category.id)}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        <div
          className="menu-panel"
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
        >
          {current.note ? <p className="menu-note">{current.note}</p> : null}

          {current.groups ? (
            <div className="drink-groups">
              {current.groups.map((group) => (
                <section key={group.id} className="drink-group" aria-labelledby={`grupo-${group.id}`}>
                  <h3 id={`grupo-${group.id}`}>{group.title}</h3>
                  <ul className="price-list">
                    {group.items.map((item) => (
                      <PriceRow key={item.name} item={item} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <ul className={current.columns ? 'price-list is-split' : 'price-list'}>
              {current.items.map((item) => (
                <PriceRow key={item.name} item={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
