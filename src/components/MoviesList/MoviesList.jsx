import { useLocation } from 'react-router-dom';
import Proptypes from 'prop-types';
import StyledLink from 'components/StyledLink/StyledLink';
import { number } from 'prop-types';

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

MoviesList.propTypes = {
  movies: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      original_title: Proptypes.string.isRequired,
    })
  ),
};
export default MoviesList;
