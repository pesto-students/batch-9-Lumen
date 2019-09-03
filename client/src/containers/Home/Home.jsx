/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import styles from './Home.module.css';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import BlogCard from '../../components/BlogCard/index';
import '../../customStyles.css';
import useGetTopBlogs from '../../hooks/useGetTopBlogs';
import HomeLoader from './HomeLoader';

const HomeExtended = React.lazy(() => import('./HomeExtended'));


const Home = ({ isAuthenticated }) => {
  const [blogs = [], fetched] = useGetTopBlogs(1);
  const reverseBlogs = [...blogs].reverse();
  const topBlogCards = reverseBlogs.map(blog => {
    const user = blog.userId && blog.userId.name ? blog.userId : {};
    return (
      <div className={styles.child}>
        <BlogCard {...user} {...blog} href={`/blog/${blog._id}`} />
      </div>
    );
  });

  return (
    <div className={styles.background}>
      <Divider inverted horizontal className={styles.title}>
        <h1> Top trending blogs</h1>
      </Divider>
      <div>
        {fetched ? (
          <div className={styles.parent}>{topBlogCards}</div>
        ) : (
          <HomeLoader />
        )}
      </div>
      <Divider inverted horizontal className={styles.title}>
        <h1> Explore more</h1>
      </Divider>
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
