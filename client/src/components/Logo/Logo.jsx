import React from 'react';
import LumenLogo from '../../test.png';
import classes from './Logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={LumenLogo} alt="LumenLogo" />
  </div>
);

export default logo;
