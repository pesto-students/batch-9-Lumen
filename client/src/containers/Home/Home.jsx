/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import BlogCard from '../../components/BlogCard/index';
import '../../customStyles.css';
import useGetTopBlogs from '../../hooks/useGetTopBlogs';
import HomeLoader from './HomeLoader';
// import HomeExtended from './HomeExtended';
const HomeExtended = React.lazy(() => import('./HomeExtended'));


const Home = ({ isAuthenticated }) => {
  const [blogs = [], fetched] = useGetTopBlogs(1);

  const topBlogCards = blogs.map(blog => {
    const user = blog.userId && blog.userId.name ? blog.userId : {};
    return (
      <div className={styles.child}>
        <BlogCard {...user} {...blog} href={`/blog/${blog._id}`} />
      </div>
    );
  });

  return (
    <div className={styles.background}>
      <h1 className={styles.title}> Top trending blogs</h1>
      <div>
        {fetched ? (
          <div className={styles.parent}>{topBlogCards}</div>
        ) : (
          <HomeLoader />
        )}
      </div>
      <h1 className={styles.title}> Explore more</h1>
      <Suspense fallback={<HomeLoader />}>
        <HomeExtended />
      </Suspense>
      {isAuthenticated ? <FloatingActionButton /> : null}
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool
};

Home.defaultProps = {
  isAuthenticated: false
};
export default Home;
