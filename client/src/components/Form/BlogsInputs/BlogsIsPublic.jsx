import React from 'react';
import PropTypes from 'prop-types';

import ToggleButton from '../../common/ToggleButton';
import FormField from '../../common/FormField';
import Label from '../../common/Label';

const BlogIsPublic = ({
    value,
    onToggle,
}) => (
    <FormField
    >
        <ToggleButton
            onToggle={onToggle}
            checked={value}
        />
        <Label>Publish</Label>
    </FormField>
    
)
BlogIsPublic.defaultProps = {
    value: false,
}

BlogIsPublic.propTypes = {
    value: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
}

export default BlogIsPublic;
