import React from 'react';
import PropTypes from 'prop-types';

import { FormField } from './helpers';

const CommonFormField = ({children, ...props}) => (
    <FormField {...props}>
        {children}
    </FormField>
     )

CommonFormField.defaultProps = {
    children: null,
}
 CommonFormField.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
 }    
export default CommonFormField;
