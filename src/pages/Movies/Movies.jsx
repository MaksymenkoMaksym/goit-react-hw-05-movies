import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';

import getApiData from 'helpers/helpers';
import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import Pagination from 'components/Pagination/Pagination';
import { MainMovies } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState(null);
  const [page, setPage] = useState(null);
  const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const backLink = location.state?.from ?? '/';

  const loadData = async () => {
    const page = searchParams.get('page');
    const query = searchParams.get('query');

    if (!query) {
      return;
    }
    try {
      setQuery(query);
      const response = await getApiData('search/movie', { query, page });
      setSearchData(response.data);
    } catch (error) {
      alert(error);
    }
    setPage(Number(page));
  };

  const startSearch = inputValue => {
    setSearchParams({ query: inputValue, page: 1 });
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [location]);

  return (
    <MainMovies>
      <Link to={backLink}>
        {<AiOutlineRollback size={'60px'} color={'orange'} />}
      </Link>
      <Search startSearch={startSearch} />
      <h1>Movies</h1>
      {searchData && (
        <>
          <MoviesList movies={searchData.results} />
          <Pagination
            totalCount={searchData.total_results}
            pageSize={20}
            currentPage={page}
            location={location}
            query={query}
          />
        </>
      )}
    </MainMovies>
  );
};

export default Movies;
