import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom'
import { countUncompletedTodos } from './store';

function App() {
  const count = useSelector(countUncompletedTodos);

  return (
    <div>
      <h1>React + Vite</h1>
      <h1>Tâches restantes: {count}</h1>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
        <NavLink to="/films">Films</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
