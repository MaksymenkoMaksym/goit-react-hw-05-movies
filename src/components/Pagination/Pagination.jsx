import { FaForward, FaBackward } from 'react-icons/fa';
import { usePagination, DOTS } from 'hooks/usePagination';
import { PaginationList, PaginatedItem, ActiveItem } from './pagination.styled';

const Pagination = ({ totalCount, pageSize, currentPage, query, location }) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount: 1,
    currentPage,
  });
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationList>
      {/* Left navigation arrow */}
      <PaginatedItem
        style={
          currentPage === 1
            ? { pointerEvents: 'none' }
            : { pointerEvents: 'auto' }
        }
        // to={`/movies?query=${query}&page=${currentPage - 1}`}
        to={{ ...location, search: '' }}
        state={{ from: location }}
        end
      >
        <FaBackward />
      </PaginatedItem>
      {paginationRange.map(pageNumber => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <PaginatedItem>&#8230;</PaginatedItem>;
        }
        if (pageNumber === currentPage) {
          return (
            <ActiveItem
              to={`/movies?query=${query}&page=${pageNumber}`}
              state={{ from: location }}
            >
              {pageNumber}
            </ActiveItem>
          );
        }
        // Render our Page Pills
        return (
          <PaginatedItem
            to={`/movies?query=${query}&page=${pageNumber}`}
            state={{ from: location }}
          >
            {pageNumber}
          </PaginatedItem>
        );
      })}
      {/*  Right Navigation arrow */}
      <PaginatedItem
        style={
          currentPage === lastPage
            ? { pointerEvents: 'none' }
            : { pointerEvents: 'auto' }
        }
        to={`/movies?query=${query}&page=${currentPage + 1}`}
        state={{ from: location }}
      >
        <FaForward />
      </PaginatedItem>
    </PaginationList>
  );
};

export default Pagination;
