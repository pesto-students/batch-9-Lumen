import React from 'react';

import Logo from '../../Logo/Logo';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/AuthNavigationItems';

const toolbar = () => (
  <div className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
