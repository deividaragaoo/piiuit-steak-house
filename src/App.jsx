import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Menu from './components/Menu.jsx'

export default function App() {
  const [view, setView] = useState('home')

  function openView(next) {
    setView(next)
    window.scrollTo(0, 0)
  }

  if (view === 'menu') {
    return (
      <main className="menu-screen">
        <button type="button" className="back" onClick={() => openView('home')}>
          Voltar
        </button>
        <Menu />
      </main>
    )
  }

  return <Landing onOpenView={openView} />
}
