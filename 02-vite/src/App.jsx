import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>React + Vite</h1>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
