import React from 'react';
import classes from './SearchPage.module.css';
import BlogCard from '../../components/BlogCard';
import useSearchBlogs from '../../hooks/useSearchBlogs';
import Loader from '../../components/UI/Loader';
import image from '../../noresult.png';

const getSearchStringFromQuery = query => {
  const params = new URLSearchParams(query);
  const joinedQuery = params.get('query');
  const queryString = joinedQuery? joinedQuery.replace('+', ' '): "";
  return queryString;
};

const SearchPage = ({ history }) => {
  const searchQuery = history.location.search || '';
  const searchString = getSearchStringFromQuery(searchQuery);
  const [blogs, fetched] = useSearchBlogs(1, searchString, []);

  const noResults = () => {
    return (
      <>
        <h2> No results</h2>
        <img src={image} className={classes.image} alt="No Result image"/>
      </>
    );
  };

  const blogsCards =
    blogs.length !== 0
      ? blogs.map(blog => {
          const user = blog.userId || {};
          return <BlogCard {...user} {...blog} href={`/blog/${blog._id}`} />;
        })
      : noResults();
  if (!fetched) {
    return <Loader size="massive" text="Searching.." />;
  }
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1> {`Search results for "${searchString}"`}</h1>
        {blogsCards}
      </div>
    </div>
  );
};

export default SearchPage;
