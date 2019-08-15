import React, { useState } from 'react';
import { Form, Grid, Header, Segment } from 'semantic-ui-react';
import EmailInput from '../components/Form/EmailInput/index';
import PasswordInput from '../components/Form/PasswordInput';
import SubmitButton from '../components/Form/SubmitButton/Index';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // todo: dispatch action
    console.log('Sign in button tapped.');
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign-in to your account
        </Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment>
            <EmailInput
              focus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <SubmitButton>Sign in</SubmitButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SigninForm;
