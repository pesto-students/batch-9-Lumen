import React from 'react';
import styles from './Home.module.css';
import FloatingActionButton from '../components/FloatingActionButton/FloatingActionButton';
import BlogCard from '../components/BlogCard/index';
import topTen from '../topTen';

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


const Home = () => (
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
    <FloatingActionButton />
  </>
);

export default Home;
