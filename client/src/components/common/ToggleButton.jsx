import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const ToggleButton = ({
    onToggle,
    name,
    checked,
}) => (
    <Checkbox 
    onChange={onToggle}
    name={name}
    checked={checked}
    toggle />
)

ToggleButton.defaultProps = {
    name: 'Toggle',
    checked: false,
}
ToggleButton.propTypes = {
    onToggle: PropTypes.func.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
}

export default ToggleButton;
