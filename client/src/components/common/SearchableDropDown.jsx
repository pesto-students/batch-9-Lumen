import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from './helpers';

const SearchableDropDown = ({
    options,
    onSelect,
    icon,
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
    loading:PropTypes.bool,
    value: PropTypes.string,
}

export default SearchableDropDown;
