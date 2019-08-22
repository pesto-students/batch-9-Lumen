import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import FloatingActionButton from '../components/FloatingActionButton/FloatingActionButton';
import BlogCard from '../components/BlogCard/index';
import topTen from '../topTen';
import '../customStyles.css';

const biggerCards = topTen.slice(0, 2).map((props) => (
  <div className={styles['large-blog']}>
    <BlogCard {...props} />
  </div>
));

const smallerCardsFirstColumn = topTen.slice(2, 6).map((props) => (
  <div className={styles['small-blog']}>
    <BlogCard {...props} />
  </div>
));

const smallerCardsSecondColumn = topTen.slice(6).map((props) => (
  <div className={styles['small-blog']}>
    <BlogCard {...props} />
  </div>
));

const Home = ({ isAuthenticated }) => (
  <>
    <h1> Top 10 trending blogs</h1>
    <div className={styles.container}>
      <div className={[styles.column, styles['column-first']].join(' ')}>
        {biggerCards}
      </div>

      <div className={[styles.column, styles['column-others']].join(' ')}>
        {smallerCardsFirstColumn}
      </div>

      <div className={[styles.column, styles['column-others']].join(' ')}>
        {smallerCardsSecondColumn}
      </div>
    </div>
    {isAuthenticated ? (<FloatingActionButton />) : null }
  </>
);

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

Home.defaultProps = {
  isAuthenticated: false,
};
export default Home;
