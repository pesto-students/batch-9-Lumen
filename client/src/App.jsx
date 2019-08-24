import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from './components/hoc/Layout/Layout';
import Home from './containers/Home/Home';
import BlogBox from './components/blogBox';
import createBlog from './components/createBlogs';
import Authentication from './containers/Authentication/Authentication';
import * as actions from './store/actions/index';
import Loader from './components/UI/Loader';
import Category from './containers/Category/Category';
import CategoryType from './containers/CategoryType/CategoryType';
import Recent from './containers/Recent/Recent';
import Profile from './containers/Profile';

const App = ({
  onTryAutoLogin,
  isAuthenticated,
  autoLoginLoading,
  getCategories
}) => {
  useEffect(() => {
    onTryAutoLogin();
    getCategories();
  }, [autoLoginLoading]);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" exact component={Category} />
      <Route path="/category/:type" component={CategoryType} />
      <Route path="/recent" exact component={Recent} />
      <Route path="/profile" component={Profile} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/write" exact component={createBlog} />
        <Route path="/edit/:blogId" exact component={BlogBox} />
        <Route
          path="/"
          exact
          render={() => <Home isAuthenticated={isAuthenticated} />}
        />
        <Route path="/category" exact component={Category} />
        <Route path="/category/:type" component={CategoryType} />
        <Route path="/recent" exact component={Recent} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <>
      {autoLoginLoading ? (
        <Loader size="huge" text="Almost there!" />
      ) : (
        <Layout>
          {!isAuthenticated ? <Authentication /> : null}
          {routes}
        </Layout>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
  autoLoginLoading: state.auth.autoLoginLoading
});

const mapDispatchToProps = dispatch => ({
  onTryAutoLogin: () => dispatch(actions.authAutoLogin()),
  getCategories: () => dispatch(actions.getCategories())
});

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onTryAutoLogin: PropTypes.func.isRequired,
  autoLoginLoading: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
