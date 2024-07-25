import { useEffect, useState } from 'react';
import axios from 'axios';

function Ajax() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.vueflix.boxydev.com/movies').then(response => {
      setMovies(response.data);
      console.log('après');
    }).finally(() => setTimeout(() => setLoading(false), 500));

    console.log('avant');
  }, []);

  if (loading) {
    return <h2>Chargement...</h2>;
  }

  return (
    <>
      <ul>
        {movies.map(movie =>
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.poster_path} width={100} />
          </li>
        )}
      </ul>
    </>
  );
}

export default Ajax;
