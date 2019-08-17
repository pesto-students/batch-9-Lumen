import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import Modal from './components/UI/Modal/Modal';
import './App.css';
import Layout from './components/hoc/Layout/Layout';
import Home from './containers/Home';
import MarkdownPOC from './components/markdown';

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
                <h1> login page</h1>
              </Modal>
            );
          }}
        />
        <Route path="/" component={Home} />
        <MarkdownPOC />
      </Layout>
    </>
  );
};

export default App;
