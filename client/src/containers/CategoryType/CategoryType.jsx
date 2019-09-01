/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { Divider } from 'semantic-ui-react';
import useSearchBlogs from '../../hooks/useSearchBlogs';
import BlogCard from '../../components/BlogCard';
import Loader from '../../components/UI/Loader';
import classes from './CategoryType.module.css';

const CategoryType = ({ match, location: { search }, history }) => {
  const queryParams = new URLSearchParams(search);
  const requiredSearchParam = queryParams.get('search');
  if (!requiredSearchParam) {
    history.push('/');
  }
  const categoryList = [requiredSearchParam];
  const [blogs, fetched] = useSearchBlogs(1, '', categoryList);
  const blogsCards = blogs.map(blog => {
    const user = blog.userId || {};
    return (
      <div className={classes.blogContainer}>
        <BlogCard {...user} {...blog} href={`/blog/${blog._id}`} key={blog._id} />
      </div>
    );
  });

  if (!fetched) {
    return <Loader size="massive" text="Loading.." />;
  }
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div style={{ paddingBottom: '20px' }}>
          <Divider inverted horizontal>
            <h1 className={classes.title}>{match.params.type}</h1>
          </Divider>
        </div>
        {blogsCards}
      </div>
    </div>
  );
};

export default CategoryType;
