/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import BlogCard from '../../components/BlogCard/index';
import '../../customStyles.css';
import HomeExtended from './HomeExtended';
import useGetTopBlogs from '../../hooks/useGetTopBlogs';
import HomeLoader from './HomeLoader';

const getBlog = (blog, size) => {
  const user = blog.userId && blog.userId.name ? blog.userId : {};
  return (
    <div className={styles[size]} key={blog._id}>
      <BlogCard {...user} {...blog} href={`/blog/${blog._id}`} />
    </div>
  );
};

const Home = ({ isAuthenticated }) => {
  const [blogs = [], fetched] = useGetTopBlogs(1);

  const biggerCards = blogs
    .slice(0, 4)
    .map(blog => getBlog(blog, 'large-blog')); 
  const smallerCardsFirstColumn = blogs
    .slice(4, 8)
    .map(blog => getBlog(blog, 'small-blog'));
  const smallerCardsSecondColumn = blogs
    .slice(8,12)
    .map(blog => getBlog(blog, 'small-blog'));

  const sampleBlogCard = () => <BlogCard />

  return (
    <div className={styles.background}>
      <h1 className={styles.title}> Top trending blogs</h1>
      <div className={styles.container}>
        {fetched ? (
          <>
            <div className={[styles.column, styles['column-first']].join(' ')}>
              {/* {biggerCards} */}
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>

            <div className={[styles.column, styles['column-others']].join(' ')}>
              {/* {smallerCardsFirstColumn} */}
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>

            <div className={[styles.column, styles['column-others']].join(' ')}>
              {/* {smallerCardsSecondColumn} */}
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </>
        ) : (
          <HomeLoader />
        )}
      </div>
      <h1 className={styles.title}> Explore more</h1>
      <HomeExtended />
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
