import React from 'react';
import PropTypes from 'prop-types';

import Form from '../common/Form';
import BlogMarkdownInput, {
  BlogsTitleInput,
  BlogsCoverImage,
  BlogsPreviewButton,
  BlogsCategorySelect,
  BlogsToggle
} from '../Form/BlogsInputs';
import useGetBlog from '../../hooks/useBlog';

const BlogBox = ({
  match: {
    params: { blogId }
  },
  history
}) => {
  const [blog, updateBlog, updating] = useGetBlog(blogId, true);
  const {
    content = '',
    title = '',
    imageUrl = '',
    isPrivate = true,
    published = false,
    category = null
  } = blog;
  const onChangeBlog = (property, data) =>
    updateBlog({ ...blog, [property]: data });

  const redirectToPreview = () => {
    const redirectPreviewUrl = `/preview/${blogId}`;
    history.push(redirectPreviewUrl);
  };
  const handleKeyDown = event => {
    const isPreviewEvent = event.key === 'p' && event.altKey;
    if (isPreviewEvent) {
      redirectToPreview();
    }
  };

  return (
    <div>
      {updating && <p>Saving Changes...</p>}
      <h1>Edit your blog</h1>
      <Form onKeyDown={handleKeyDown}>
        <BlogsCoverImage
          onChange={value => {
            onChangeBlog('imageUrl', value);
          }}
          value={imageUrl}
        />
        <BlogsCategorySelect
          selected={category}
          onSelected={data => {
            onChangeBlog('category', data);
          }}
        />
        <BlogsTitleInput
          onChange={value => {
            onChangeBlog('title', value);
          }}
          value={title}
        />
        <BlogMarkdownInput
          onChange={value => {
            onChangeBlog('content', value);
          }}
          value={content}
        />
        <BlogsToggle
          value={published}
          onToggle={() => {
            onChangeBlog('published', !published);
          }}
          name="Published"
        />
        <BlogsToggle
          value={isPrivate}
          onToggle={() => {
            onChangeBlog('isPrivate', !isPrivate);
          }}
          name="Private"
        />
        <BlogsPreviewButton redirectToView={redirectToPreview} />
      </Form>
    </div>
  );
};

BlogBox.defaultProps = {
  match: {
    params: {
      blogId: null
    }
  }
};
BlogBox.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      blogId: PropTypes.string
    })
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export default BlogBox;
