/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import styles from './Home.module.css';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import BlogCard from '../../components/BlogCard/index';
import '../../customStyles.css';
import HomeExtended from './HomeExtended';
import useGetTopBlogs from '../../hooks/useGetTopBlogs';

const getBlog = (blog, size) => {
  const user = blog.userId && blog.userId.name ? blog.userId : {};
  return (
    <div className={styles[size]} key={blog._id}>
      <BlogCard {...blog} {...user} href={`/blog/${blog._id}`} />
    </div>
  );
};

const blogsLoader = () => (
  <>
    <Segment>
      <Dimmer active>
        <Loader size="huge">Loading</Loader>
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  </>
);

const Home = ({ isAuthenticated }) => {
  const [blogs = [], fetched] = useGetTopBlogs(1);

  const biggerCards = blogs
    .slice(0, 2)
    .map(blog => getBlog(blog, 'large-blog'));
  const smallerCardsFirstColumn = blogs
    .slice(2, 6)
    .map(blog => getBlog(blog, 'small-blog'));
  const smallerCardsSecondColumn = blogs
    .slice(6)
    .map(blog => getBlog(blog, 'small-blog'));

  return (
    <div className={styles.background}>
      <h1 className={styles.title}> Top trending blogs</h1>
      <div className={styles.container}>
        {fetched ? (
          <>
            <div className={[styles.column, styles['column-first']].join(' ')}>
              {biggerCards}
            </div>

            <div className={[styles.column, styles['column-others']].join(' ')}>
              {smallerCardsFirstColumn}
            </div>

            <div className={[styles.column, styles['column-others']].join(' ')}>
              {smallerCardsSecondColumn}
            </div>
          </>
        ) : (
          blogsLoader()
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
