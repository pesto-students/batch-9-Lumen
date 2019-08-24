import React from 'react';
import PropTypes from 'prop-types';

import SearchableDropDown from '../../common/SearchableDropDown';

const BlogsCategorySelect = ({
    selected,
    onSelected,
}) => {
    const onSelect = (_, data) => {
        onSelected(data.value)
    }
    const options = [{
        key:'ss',
        value:'ss',
        text:'cat1'
    },{
        key:'ss1',
        value:'ss2',
        text:'cat2'
    }]

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
}

export default BlogsCategorySelect;
