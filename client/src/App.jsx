import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from './components/hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Authentication from './containers/Authentication/Authentication';
import * as actions from './store/actions/index';
import Loader from './components/UI/Loader';
const Category = lazy(() => import('./containers/Category/Category'));
const CategoryType = lazy(() => import('./containers/CategoryType/CategoryType'));
const SearchPage = lazy(() => import('./containers/Search/SearchPage'));
const Profile = lazy(() => import('./containers/Profile'));
const BlogPage = lazy(() => import('./containers/BlogPage'));
const PreviewBlog = lazy(() => import('./components/blogBox/preview'));
const createBlog = lazy(() => import('./components/createBlogs'));
const  EditBlog = lazy(() => import('./components/blogBox'));
// import Category from './containers/Category/Category';
// import CategoryType from './containers/CategoryType/CategoryType';
// import SearchPage from './containers/Search/SearchPage';
// import Profile from './containers/Profile';
// import BlogPage from './containers/BlogPage';
// import EditBlog from './components/blogBox';
// import PreviewBlog from './components/blogBox/preview';
// import createBlog from './components/createBlogs';

function LazyRoute(Component) {
  return props => (
    <Suspense fallback={<Loader text="Bazzingaa!"/>}>
      <Component {...props} />
    </Suspense>
  );
};

const App = ({
  onTryAutoLogin,
  isAuthenticated,
  autoLoginLoading,
  getCategories
}) => {
  useEffect(() => {
    onTryAutoLogin();
    getCategories();
  }, [autoLoginLoading, onTryAutoLogin, getCategories]);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" exact component={LazyRoute(Category)} />
      <Route path="/category/:type" component={LazyRoute(CategoryType)} />
      <Route path="/search" component={LazyRoute(SearchPage)} />
      <Route path="/profile/:publicUser" exact component={LazyRoute(Profile)} />
      <Route path="/blog/:blogId" exact component={LazyRoute(BlogPage)} />
      <Route path="/blog/draft/:draftPath/:blogId" exact component={LazyRoute(BlogPage)} />
      <Route
        path="/blog/secured/:privatePath/:blogId"
        exact
        component={LazyRoute(BlogPage)}
      />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/write" exact component={LazyRoute(createBlog)} />
        <Route path="/edit/:blogId" exact component={LazyRoute(EditBlog)} />
        <Route path="/preview/:blogId" exact component={LazyRoute(PreviewBlog)} />
        <Route
          path="/"
          exact
          render={() => <Home isAuthenticated={isAuthenticated} />}
        />
        <Route path="/category" exact component={LazyRoute(Category)} />
        <Route path="/category/:type" component={LazyRoute(CategoryType)} />
        <Route path="/search" component={LazyRoute(SearchPage)} />
        <Route path="/profile" exact component={LazyRoute(Profile)} />
        <Route path="/profile/:publicUser" exact component={LazyRoute(Profile)} />
        <Route path="/blog/:blogId" exact component={LazyRoute(BlogPage)} />
        <Route
          path="/blog/draft/:draftPath/:blogId"
          exact
          component={LazyRoute(BlogPage)}
        />
        <Route
          path="/blog/secured/:privatePath/:blogId"
          exact
          component={BlogPage}
        />
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
