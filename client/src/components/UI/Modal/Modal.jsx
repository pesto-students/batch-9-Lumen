import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ show, modalClosed, history, children }) => {
  return (
    <>
      <Backdrop
        show={show}
        clicked={() => {
          modalClosed();
          history && history.goBack();
        }}
      />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  history: PropTypes.object,
  modalClosed: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(Modal);
