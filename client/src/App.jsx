import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from './components/hoc/Layout/Layout';
import Home from './containers/Home';
import BlogBox from './components/blogBox';
import Authentication from './containers/Authentication';
import * as actions from './store/actions/index';
import Loader from './components/UI/Loader';

const App = ({ onTryAutoLogin, isAuthenticated, autoLoginLoading }) => {
  useEffect(() => {
    onTryAutoLogin();
  }, [autoLoginLoading]);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/write" exact component={BlogBox} />
        <Route path="/" exact render={() => <Home isAuthenticated={isAuthenticated} />} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <>
      { autoLoginLoading ? (<Loader size="huge" text="Almost there!" />)
        : (
          <Layout>
            {!isAuthenticated ? (<Authentication />) : null }
            {routes}
          </Layout>
        )}

    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
  autoLoginLoading: state.auth.autoLoginLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onTryAutoLogin: () => dispatch(actions.authAutoLogin()),
});

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onTryAutoLogin: PropTypes.func.isRequired,
  autoLoginLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
