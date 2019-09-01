import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './ProfileDropdown.module.css';

const ProfileDropdown = ({ onLogout, history, user }) => {
  const profile = user || {};
  return (<div className={styles.container}>
    <Dropdown text={profile.name? profile.name.replace(/\s.*/,''): ""} item floating>
      <Dropdown.Menu direction="left">
        <Dropdown.Item text="Profile" onClick={() => { history.push('/profile')}} />
        <Dropdown.Item text="Sign out" onClick={onLogout} />
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}
 
const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown));
