import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';

function Movie() {
  const { id } = useParams();
  const { data: movie } = useFetch(`https://api.vueflix.boxydev.com/movies/${id}`);

  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.poster_path} alt={movie.title} />
    </>
  );
}

export default Movie;
