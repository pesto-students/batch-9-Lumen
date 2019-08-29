/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Card} from "semantic-ui-react"
import styles from './HomeExtended.module.css';

const NewHome = ({
  categories = [],
}) => (
  <div className={styles.parent}>
    {categories.map((category) => (
      <div
        className={styles.child}
        key={category._id}
        style={{
          background:
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${
              category.image
            }) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <NavLink to={`/category/${category.name}?search=${category._id}`}>
          <div className={styles.fragment}>
            <h2>{category.name}</h2>
          </div>
        </NavLink>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  categories: state.home.categories,
})

export default connect(mapStateToProps, {})(NewHome);
