import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

const Authentication = () => {
  const [activeItem, setActiveItem] = useState('signin');

  const menuStyle = {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  };

  const renderForm = () => {
    if (activeItem === 'signin') {
      return <SigninForm />;
    } else if (activeItem === 'signup') {
      return <SignupForm />;
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Authentication;
