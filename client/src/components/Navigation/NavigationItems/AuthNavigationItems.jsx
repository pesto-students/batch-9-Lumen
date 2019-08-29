import React from 'react';
import { connect } from 'react-redux';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import ProfileDropdown from '../../ProfileDropdown/ProfileDropdown';
import * as actions from '../../../store/actions/index';

const AuthNavigationItems = ({ isAuthenticated, openAuthenticationModal }) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/category" exact>
        Category
    </NavigationItem>
    <NavigationItem link="/recent" exact>
        Recent
    </NavigationItem>
    {!isAuthenticated ? (
      <NavigationItem clicked={openAuthenticationModal}>
        Signin
      </NavigationItem>
    ) : (<ProfileDropdown/>)}
  </ul>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  openAuthenticationModal: () => {
    dispatch(actions.toggleAuthModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavigationItems);
