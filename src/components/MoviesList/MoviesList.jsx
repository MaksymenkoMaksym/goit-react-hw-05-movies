import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
export default MoviesList;
