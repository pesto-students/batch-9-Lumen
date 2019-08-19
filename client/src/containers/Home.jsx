import React from 'react';
import styles from './Home.module.css';
import Blog from '../components/Blog';
import FloatingActionButton from '../components/FloatingActionButton/FloatingActionButton';


const Home = () => (
  <>
    <h1> Top 10 trending blogs</h1>
    <div className={styles.container}>
      <div className={[styles.column, styles['column-first']].join(' ')}>
        <div className={styles['large-blog']}>
          <Blog />
        </div>
        <div className={styles['medium-blog']}>
          <Blog />
        </div>
      </div>

      <div className={[styles.column, styles['column-others']].join(' ')}>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
      </div>

      <div className={[styles.column, styles['column-others']].join(' ')}>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
        <div className={styles['small-blog']}>
          <Blog />
        </div>
      </div>
    </div>
    <FloatingActionButton />
  </>
);

export default Home;
