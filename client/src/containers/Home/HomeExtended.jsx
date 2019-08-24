import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HomeExtended.module.css';
import {Card} from "semantic-ui-react"

const data = [
  { title: 'Trending', link: '/category/Trending' },
  { title: 'Recent', link: '/category/Recent' },
  { title: 'Category 1', link: '/category/1' },
  { title: 'Category 2', link: '/category/1' },
  { title: 'Category 3', link: '/category/1' },
  { title: 'Category 4', link: '/category/1' },
  { title: 'Category 5', link: '/category/1' },
  { title: 'Category 6', link: '/category/1' },
  { title: 'Category 7', link: '/category/1' },
  { title: 'Category 8', link: '/category/1' },
  { title: 'Category 9', link: '/category/1' },
  { title: 'Category 10', link: '/category/1' },
];

const imgURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg';

const NewHome = () => (
  <div className={styles.parent}>
    {data.map((category) => (
      <div
        className={styles.child}
        key={category.title}
        style={{
          background:
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${
              imgURL
            }) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <NavLink to={category.link}>
          <div className={styles.fragment}>
            <h2>{category.title}</h2>
          </div>
        </NavLink>
      </div>
    ))}
  </div>
);

export default NewHome;
