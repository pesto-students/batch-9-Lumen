import React from 'react';
import FormField from '../../common/FormField';
import TextAreaAutoResize from '../../common/TextAreaAutoResize';
import classes from './BlogsInputs.module.css';

const BlogsMarkdownInput = (props) => {
    return (
        <FormField
        control={ TextAreaAutoResize }
        label="Enter Blog Content"
        placeholder="Tell us more about this blog..."
        useCacheForDOMMeasurements
        className={classes.textAreaBg}
        minRows={20}
        rows={10}
        {...props}
        />
    )
}

export default BlogsMarkdownInput;
