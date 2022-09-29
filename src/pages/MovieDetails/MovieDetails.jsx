import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import getApiData from 'helpers/helpers';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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
      return `/movies/${id}/${place}`;
    }
    const address = location.pathname.replace(place, '');
    return address;
  };

  useEffect(() => {
    getMoviesDetails();
    // eslint-disable-next-line
  }, [location]);

  return movie ? (
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
          <li style={{ cursor: 'pointer', color: 'blue' }}>
            <Link to={collectInfo('cast')} state={{ from: `/movies/${id}` }}>
              Cast
            </Link>
          </li>
          <li style={{ cursor: 'pointer', color: 'blue' }}>
            <Link to={collectInfo('reviews')} state={{ from: `/movies/${id}` }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
