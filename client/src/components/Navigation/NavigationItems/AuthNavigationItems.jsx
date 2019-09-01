import React from 'react';
import { connect } from 'react-redux';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import ProfileDropdown from '../../ProfileDropdown/ProfileDropdown';
import * as actions from '../../../store/actions/index';
import Search from '../../Search/Search';

const AuthNavigationItems = ({ isAuthenticated, openAuthenticationModal }) => (
  <ul className={classes.NavigationItems}>
    <li><Search /></li>
    <NavigationItem link="/category" exact>
      Category
    </NavigationItem>
    {!isAuthenticated ? (
      <NavigationItem clicked={openAuthenticationModal}>Signin</NavigationItem>
    ) : (
      <>
        <div className={classes.notMobile}>
        <NavigationItem link="/write" exact >
          Write
        </NavigationItem>
        </div>
        <ProfileDropdown />
      </>
    )}
  </ul>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
  openAuthenticationModal: () => {
    dispatch(actions.toggleAuthModal());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthNavigationItems);
