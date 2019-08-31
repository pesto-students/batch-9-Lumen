import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput';

const BlogsCoverImage = ({onChange, ...rest}) => (
    <FormInput
    placeholder="Enter Image Url for your blog"
    type="text"
    label="Cover Image"
    id="blogsCoverImage"
    onChange={(event) => {onChange(event.target.value)} }
    {...rest}
  />
)

BlogsCoverImage.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default BlogsCoverImage;
