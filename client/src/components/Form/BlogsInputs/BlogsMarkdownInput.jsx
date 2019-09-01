import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../../common/FormField';
import TextAreaAutoResize from '../../common/TextAreaAutoResize';
import classes from '../FormInput.module.css';
import MarkdownInstructions from '../../MarkdownInstructions/MarkdownInstructions';

const BlogsMarkdownInput = ({onChange, ...rest}) => {
    return (
        <>
        <MarkdownInstructions />
        <FormField
        control={ TextAreaAutoResize }
        required
        label="Enter Blog Content in markdown"
        placeholder="Tell us more about this blog..."
        useCacheForDOMMeasurements
        minRows={20}
        rows={10}
        onChange={(event) => {onChange(event.target.value)} }
        className={classes.label}
        {...rest}
        />
        </>
    )
}

BlogsMarkdownInput.propTypes = {
    onChange: PropTypes.func.isRequired,
  }
  
export default BlogsMarkdownInput;
