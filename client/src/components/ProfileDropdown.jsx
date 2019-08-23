import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

const ProfileDropdown = ({ onLogout }) => (
  <Dropdown text="Profile" item floating style={{ color: 'white' }}>
    <Dropdown.Menu>
      <Dropdown.Item text="Profile" />
      <Dropdown.Item text="My blogs" />
      <Dropdown.Item text="Sign out" onClick={onLogout} />
    </Dropdown.Menu>
  </Dropdown>
);

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(ProfileDropdown);
