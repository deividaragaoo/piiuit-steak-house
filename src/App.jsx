import { useEffect, useState } from 'react'
import Landing from './components/Landing.jsx'
import Menu from './components/Menu.jsx'

function viewFromLocation() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/cardapio' || window.location.hash === '#cardapio') return 'menu'
  return 'home'
}

export default function App() {
  const [view, setView] = useState(viewFromLocation)

  useEffect(() => {
    function onPop() {
      setView(viewFromLocation())
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function openView(next) {
    setView(next)
    const url = next === 'menu' ? '/cardapio' : '/'
    if (window.location.pathname !== url || window.location.hash) {
      window.history.pushState({ view: next }, '', url)
    }
    window.scrollTo(0, 0)
  }

  if (view === 'menu') {
    return (
      <main className="menu-screen">
        <div className="menu-top">
          <button type="button" className="back" onClick={() => openView('home')}>
            Voltar
          </button>
          <img
            src="/images/piuit-logo-transparente.png"
            alt="PIIUIT Steak House"
            className="menu-logo"
            width="635"
            height="529"
          />
        </div>
        <Menu />
      </main>
    )
  }

  return <Landing onOpenView={openView} />
}
