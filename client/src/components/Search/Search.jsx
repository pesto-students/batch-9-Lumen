import React from 'react';
import './Search.css';
import {Icon} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import useInput from '../../hooks/useInput';

const SearchNav = ({ history }) => {
  const { value, bind } = useInput('');

  const handleSearchClick = e => {
    e.preventDefault();
    const path = `/search?query=${value.replace(/\s+/g, '+').toLowerCase()}`;
    if (history.location.pathname === '/search') {
      history.replace(path);
    } else {
      history.push(path);
    }
  };

  return (
    <div className="wrapxx">
      <div className="searchxx">
        <form className="searchxx" onSubmit={handleSearchClick}>
          <input
            type="text"
            className="searchTermxx"
            placeholder="Search blogs.."
            {...bind}
          />
          <button
            type="submit"
            className="searchButtonxx"
            disabled={value === ''}
          >
            <Icon
              name="search"
              className="search-iconxx"
              disabled={value === ''}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SearchNav);
