import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from './helpers';

const SearchableDropDown = ({
    options,
    onSelect,
    icon,
    name,
    loading,
    value,
}) => (
    <Dropdown
    button
    className='icon'
    floating
    labeled
    icon={icon}
    options={options}
    search
    text={name}
    onChange={onSelect}
    loading={loading}
    selection
    wrapSelection
    value={value}
  />
)

SearchableDropDown.defaultProps = {
    icon: 'search',
    loading: false,
    value: '',
}
SearchableDropDown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelect: PropTypes.func.isRequired,
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    loading:PropTypes.bool,
    value: PropTypes.string,
}

export default SearchableDropDown;
