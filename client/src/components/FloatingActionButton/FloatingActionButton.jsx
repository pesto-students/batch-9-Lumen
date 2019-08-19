import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FloatingActionButton.module.css';

const FloatingActionButton = () => {
  return (
    <nav className={styles.container}> 
      <NavLink to='write'>
          <button className={styles.roundbutton}> + </button>
      </NavLink>
    </nav>
  );
};

export default FloatingActionButton;
