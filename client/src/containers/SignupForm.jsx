import React, { useState } from 'react';
import { Form, Grid, Header, Segment } from 'semantic-ui-react';

import SubmitButton from '../components/Form/SubmitButton/Index';
import TextInput from '../components/Form/TextInput';
import EmailInput from '../components/Form/EmailInput/index';
import PasswordInput from '../components/Form/PasswordInput';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleSignup = () => {
    // TODO: dispatch action
    console.log('sign up called.');
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Register your account
        </Header>
        <Form size="large" onSubmit={handleSignup}>
          <Segment>
            <TextInput
              focus
              name="Name"
              iconName="user"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <EmailInput
              focus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <PasswordInput
              value={verifyPassword}
              onChange={e => setVerifyPassword(e.target.value)}
              passwordToMatch={password}
              verify
            />
            <SubmitButton>Sign up</SubmitButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignupForm;
