import React, { useState } from 'react';
import {
  Form, Grid, Header, Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import EmailInput from '../components/Form/EmailInput/index';
import PasswordInput from '../components/Form/PasswordInput';
import SubmitButton from '../components/Form/SubmitButton/Index';
import * as actions from '../store/actions/index';

const SigninForm = ({onLogin, error, loading}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => onLogin(email, password);

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
              onChange={(event) => setPassword(event.target.value)}
            />
            {error ? (<p> { error } </p>) : null}
            <SubmitButton loading={loading}>Sign in</SubmitButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => {
    dispatch(actions.login(email, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninForm);
