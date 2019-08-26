import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import Modal from '../../components/UI/Modal/Modal';
import * as actions from '../../store/actions/index';

const Authentication = ({ showModal, toggleAuthModal }) => {
  const [activeItem, setActiveItem] = useState('signin');

  const menuStyle = {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  };

  const renderForm = () => {
    if (activeItem === 'signin') {
      return <SigninForm />;
    } if (activeItem === 'signup') {
      return <SignupForm />;
    }
  };
  return (
    <div>
      <Modal
        show={showModal}
        modalClosed={toggleAuthModal}
      >
        <Menu pointing secondary style={menuStyle}>
          <Menu.Item
            name="Sign in"
            active={activeItem === 'signin'}
            onClick={() => setActiveItem('signin')}
          />
          <Menu.Item
            name="Sign up"
            active={activeItem === 'signup'}
            onClick={() => setActiveItem('signup')}
          />
        </Menu>
        {renderForm()}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showModal: state.auth.showAuthModal,
});
const mapDispatchToProps = (dispatch) => ({
  toggleAuthModal: () => {
    dispatch(actions.toggleAuthModal());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
