import React from 'react';
import FormField from '../../common/FormField';
import TextAreaAutoResize from '../../common/TextAreaAutoResize';
import classes from '../FormInput.module.css';

const BlogDescriptionInput = ({ onChange, ...rest }) => {
  return (
    <FormField
      control={TextAreaAutoResize}
      required
      label="Enter Blog Description"
      placeholder="Briefly describe what this blog is about"
      useCacheForDOMMeasurements
      className={classes.label}
      minRows={3}
      rows={3}
      onChange={event => {
        onChange(event.target.value);
      }}
      {...rest}
    />
  );
};

export default BlogDescriptionInput;
