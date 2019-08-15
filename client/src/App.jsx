import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Modal from './components/UI/Modal/Modal';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/hoc/Layout/Layout';
import Home from './containers/Home';
import BlogBox from './components/blogBox';
import Signin from "./containers/Authentication";

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(true);

  return (
    <>
      <Layout>
        <Route
          path="/signin"
          render={(props) => {
            setShowAuthModal(true);
            return (
              <Modal
                history={props.history}
                show={showAuthModal}
                modalClosed={() => {
                  setShowAuthModal(false);
                }}
              >
              <Signin/>
              </Modal>
            );
          }}
        />
        <Route path="/" component={Home} />
        <BlogBox />
      </Layout>
    </>
  );
};

export default App;
