import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Todos from './pages/Todos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'a-propos', element: <About /> },
      { path: 'films', element: <Movies /> },
      { path: 'films/:id', element: <Movie /> },
      { path: 'todos', element: <Todos /> },
    ]
  }
])

export default router;
