import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import getApiData from 'helpers/helpers';
import { MainHome, Title } from './Home.styled';
import Loader from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState(null);

  const getMovies = async () => {
    try {
      const { data } = await getApiData();
      setMovies(data.results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MainHome>
      <Title>Trending Today</Title>
      {movies ? <MoviesList movies={movies} /> : <Loader />}
    </MainHome>
  );
};
export default Home;
