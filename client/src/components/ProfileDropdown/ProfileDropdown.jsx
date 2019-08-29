import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './ProfileDropdown.module.css';

const ProfileDropdown = ({ onLogout }) => (
  <div className={styles.container}>
  <Dropdown text="Profile" item floating>
    <Dropdown.Menu direction={"left"}>
      <Dropdown.Item text="Profile" />
      <Dropdown.Item text="Sign out" onClick={onLogout} />
    </Dropdown.Menu>
  </Dropdown>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(ProfileDropdown);
