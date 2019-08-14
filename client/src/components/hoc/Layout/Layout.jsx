import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render() {
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
