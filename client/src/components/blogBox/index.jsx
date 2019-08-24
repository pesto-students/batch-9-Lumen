import React from 'react';
import PropTypes from 'prop-types';

import Form from '../common/Form';
import BlogMarkdownInput, { 
  BlogsTitleInput,
   BlogsCoverImage,
    BlogsPreviewButton,
    BlogsCategorySelect,
    BlogsToggle,
  } from '../Form/BlogsInputs';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';


const BlogBox = (props) => {
  const { content = '', title = '', imageUrl = '', isPrivate = true, published = false, category = 'ss'  } = props;
  const { value:markdownData, bind:bindMarkdownData } = useInput(content);
  const {value:blogTitle , bind:bindBlogTitle} = useInput(title);
  const {value:blogImage , bind:bindBlogImage} = useInput(imageUrl);
  const {open:isPublished, onToggle:togglePublished} = useToggle(published);
  const {open:isPrivateBlog, onToggle:togglePrivate} = useToggle(isPrivate);

  const redirectToPreview = () => {
    console.log('Request sent to show the preview component.')
  }
  const changeSelectedCategory = (data) => {
    console.log(' The user selected the following category id', data);
  }
  return (
    <div>
      <h1>
         Edit your blog
      </h1>
      <Form>
        <BlogsCoverImage {...bindBlogImage} />
        <BlogsCategorySelect selected={category} onSelected={changeSelectedCategory} />
        <BlogsTitleInput {...bindBlogTitle} />
        <BlogMarkdownInput  {...bindMarkdownData}/>
        <BlogsToggle value={isPublished} onToggle={togglePublished} name="Public" />
        <BlogsToggle value={isPrivateBlog} onToggle={togglePrivate} name="Private" />
        <BlogsPreviewButton redirectToView={redirectToPreview} />
      </Form>
    </div>
  );
};

BlogBox.defaultProps = {
  content: '',
  imageUrl: '',
  title: '',
  isPrivate: false,
  published: false,
  category: null,
}
BlogBox.propTypes = {
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  isPrivate: PropTypes.bool,
  published: PropTypes.bool,
  category: PropTypes.string,
}
export default BlogBox;
