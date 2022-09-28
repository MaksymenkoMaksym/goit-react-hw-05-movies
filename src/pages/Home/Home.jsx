import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import getApiData from 'helpers/helpers';
import { MainHome, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <MoviesList movies={movies} />
    </MainHome>
  );
};
export default Home;
