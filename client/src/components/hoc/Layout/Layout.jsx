import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.module.css';
import Toolbar from '../../Navigation/Toolbar/Toolbar';

const Layout = ({ children }) => (
  <>
    <Toolbar />
    <main className={classes.Content}>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
