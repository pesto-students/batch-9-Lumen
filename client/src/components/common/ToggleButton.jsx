import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const ToggleButton = ({
    onToggle,
    name,
}) => (
    <Checkbox 
    onChange={onToggle}
    name={name}
    toggle />
)

ToggleButton.defaultProps = {
    name: 'Toggle',
}
ToggleButton.propTypes = {
    onToggle: PropTypes.func.isRequired,
    name: PropTypes.string,
}

export default ToggleButton;
