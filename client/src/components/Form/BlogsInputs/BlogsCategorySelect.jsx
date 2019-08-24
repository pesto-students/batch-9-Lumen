/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchableDropDown from '../../common/SearchableDropDown';

const BlogsCategorySelect = ({
    selected,
    onSelected,
    categories,
}) => {
    const onSelect = (_, data) => {
        onSelected(data.value)
    }
    const options = categories.map(category => ({key: category._id, text:category.name, value: category._id}));
   return (<SearchableDropDown
    options={options}
    name="Select category"
    onSelect={onSelect}
    icon="tag"
    value={selected}
    />)
}

BlogsCategorySelect.defaultProps = {
    selected: null,
}

BlogsCategorySelect.propTypes = {
    selected: PropTypes.string,
    onSelected: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })).isRequired,
}

const mapStateToProps = (state) => ({
    categories: state.home.categories,
})

export default connect(mapStateToProps, {})(BlogsCategorySelect);
