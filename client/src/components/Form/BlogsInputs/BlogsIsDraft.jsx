import React from 'react';
import PropTypes from 'prop-types';

import ToggleButton from '../../common/ToggleButton';
import FormField from '../../common/FormField';
import Label from '../../common/Label';

const BlogIsDraft = ({
    value,
    onToggle,
    name,
}) => (
    <FormField
    >
        <ToggleButton
            name={name}
            onToggle={onToggle}
            checked={value}
        />
        <Label>{name}</Label>
    </FormField>
    
)

BlogIsDraft.defaultProps = {
    value: false,
    name: 'Checkbox',
}

BlogIsDraft.propTypes = {
    value: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    name: PropTypes.string,
}

export default BlogIsDraft;
