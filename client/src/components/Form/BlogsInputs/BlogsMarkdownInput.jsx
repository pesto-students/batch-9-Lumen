import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../../common/FormField';
import TextAreaAutoResize from '../../common/TextAreaAutoResize';
import classes from './BlogsInputs.module.css';

const BlogsMarkdownInput = ({onChange, ...rest}) => {
    return (
        <FormField
        control={ TextAreaAutoResize }
        label="Enter Blog Content"
        placeholder="Tell us more about this blog..."
        useCacheForDOMMeasurements
        className={classes.textAreaBg}
        minRows={20}
        rows={10}
        onChange={(event) => {onChange(event.target.value)} }
        {...rest}
        />
    )
}

BlogsMarkdownInput.propTypes = {
    onChange: PropTypes.func.isRequired,
  }
  
export default BlogsMarkdownInput;
