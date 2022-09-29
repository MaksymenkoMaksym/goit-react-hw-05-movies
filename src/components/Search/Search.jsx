import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ startSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    startSearch(inputValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="search movies"
          type="text"
          onChange={onChange}
          value={inputValue}
        ></input>
        <button type="submit">Search</button>
      </label>
    </form>
  );
};
Search.propTypes = {
  startSearch: PropTypes.func.isRequired,
};
export default Search;
