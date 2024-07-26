import { useState } from 'react';
import { useFetch } from '../hooks';
import { NavLink } from 'react-router-dom'

function Movies() {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(`https://api.vueflix.boxydev.com/movies?_page=${page}&_limit=5`);
  const { data: movies, loading, ending } = useFetch(url);

  const nextPage = () => {
    setPage(page + 1);
    setUrl(`https://api.vueflix.boxydev.com/movies?_page=${page + 1}&_limit=5`);
  }

  // if (loading) {
  //   return <div>Chargement...</div>
  // }

  return (
    <>
      <div>
        {movies.map(movie =>
          <div>
            <h2>{movie.title}</h2>
            <NavLink to={`/films/${movie.id}`}>
              <img src={movie.poster_path} alt={movie.title} />
            </NavLink>
          </div>
        )}
      </div>
      {loading && <div>Chargement...</div>}
      {!ending && <button onClick={nextPage}>Page suivante</button>}
    </>
  );
}

export default Movies;
