import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.css';

const navigationItem = ({ link, exact, children, clicked }) => (
  <li className={classes.NavigationItem} onClick={clicked}>
    <NavLink to={link} exact={exact} activeClassName={classes.active}>
      {children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  clicked: PropTypes.func,
};

navigationItem.defaultProps = {
  exact: false,
  clicked: () => {},
};
export default navigationItem;
