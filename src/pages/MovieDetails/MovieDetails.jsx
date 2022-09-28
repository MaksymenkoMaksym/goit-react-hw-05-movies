import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import getApiData from 'helpers/helpers';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const backLink = location.state?.from ?? `/`;
  const getMoviesDetails = async () => {
    try {
      const { data } = await getApiData(`movie/${id}`);
      setMovie(data);
    } catch (error) {
      alert(error);
    }
  };

  const collectInfo = place => {
    if (!location.pathname.includes(place)) {
      navigate(`/movies/${id}/${place}`, { replace: false });
      return;
    }
    const address = location.pathname.replace(place, '');
    navigate(`${address}`, { replace: false });
    return;
  };

  useEffect(() => {
    getMoviesDetails();
    // eslint-disable-next-line
  }, [location]);

  if (!movie) {
    return;
  }

  return (
    <div>
      <Link to={backLink}>
        {<AiOutlineRollback size={'60px'} color={'orange'} />}
      </Link>
      <h1>{movie.original_title}</h1>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          width={'200px'}
          height={'300px'}
        />
      </div>
      <p>User scores : {movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(el => el.name + '  ')}</p>
      <div>
        <h4>Additional info</h4>
        <ul>
          <li
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => collectInfo('cast')}
          >
            Cast
            {/* <Link
              to={`/movies/${id}/cast`}
              // onClick={() => collectInfo('cast')}
              state={{ from: `/movies/${id}` }}
            >
              Cast
            </Link> */}
          </li>
          <li
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => collectInfo('reviews')}
          >
            Reviews
            {/* <Link
              to={`/movies/${id}/reviews`}
              // onClick={() => collectInfo('reviews')}
              state={{ from: `/movies/${id}` }}
            >
              Reviews
            </Link> */}
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
