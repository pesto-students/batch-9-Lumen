import React from 'react';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CustomLoader = ({ size, text }) => (
  <div>
    <Loader active size={size}>{text}</Loader>
  </div>
);

CustomLoader.propTypes = {
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomLoader;
