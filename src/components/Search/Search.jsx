import { useState } from 'react';

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

export default Search;
