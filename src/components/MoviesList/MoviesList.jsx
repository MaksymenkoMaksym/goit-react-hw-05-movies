import { useLocation } from 'react-router-dom';
import StyledLink from 'components/StyledLink/StyledLink';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <StyledLink
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location }}
        >
          {movie.original_title}
        </StyledLink>
      ))}
    </ul>
  );
};

export default MoviesList;
