import React from 'react';
import FormInput from '../FormInput';

const BlogsCoverImage = (props) => (
    <FormInput
    required
    placeholder="Enter Image Url for your blog"
    type="text"
    label="Cover Image"
    id="blogsCoverImage"
    {...props}
  />
)

export default BlogsCoverImage;
