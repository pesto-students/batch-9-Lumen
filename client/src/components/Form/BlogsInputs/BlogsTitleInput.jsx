import React from 'react';
import FormInput from '../FormInput';

const BlogsTitleInput = (props) => (
    <FormInput
    required
    placeholder="Enter Title for your blog"
    type="text"
    label="Enter Title"
    id="blogsTitle"
    {...props}
  />
)

export default BlogsTitleInput;
