import React from 'react';
import { NavLink } from 'react-router-dom';
import LumenLogo from '../../test.png';
import classes from './Logo.module.css';

const logo = () => (
  <NavLink to={"/"}>
    <div className={classes.Logo}>
      <img src={LumenLogo} alt="LumenLogo" />
    </div>
  </NavLink>
);

export default logo;
