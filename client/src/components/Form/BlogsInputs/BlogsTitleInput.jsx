import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput';

const BlogsTitleInput = ({onChange, ...rest}) => (
    <FormInput
    required
    placeholder="Enter Title for your blog"
    type="text"
    label="Enter Title"
    id="blogsTitle"
    labelStyle = "label1"
    onChange={(event) => {onChange(event.target.value)} }
    {...rest}
  />
)
BlogsTitleInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}


export default BlogsTitleInput;
