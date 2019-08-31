import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import LabelButton from '../common/LabelButton';

import Form from '../common/Form';
import BlogMarkdownInput, {
  BlogsTitleInput,
  BlogsCoverImage,
  BlogsPreviewButton,
  BlogsCategorySelect,
  BlogsToggle,
  BlogDescriptionInput
} from '../Form/BlogsInputs';
import useGetBlog from '../../hooks/useBlog';
import classes from './blogBox.module.css';

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
    description = '',
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
    <div className={classes.background}>
      <div className={classes.container}>
        <h1>
          Edit your blog{' '}
          {updating && (
            <span>
              <Icon name="sync" size="tiny" />
            </span>
          )}
        </h1>
        <Form onKeyDown={handleKeyDown}>
          <BlogsTitleInput
            onChange={value => {
              onChangeBlog('title', value);
            }}
            value={title}
          />
          <BlogDescriptionInput
            onChange={value => {
              onChangeBlog('description', value);
            }}
            value={description}
          />
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
          <BlogMarkdownInput
            onChange={value => {
              onChangeBlog('content', value);
            }}
            value={content}
          />
          <LabelButton
            activeText="Public"
            deActiveText="Private"
            activeIcon="unlock"
            deActiveIcon="lock"
            active={isPrivate}
            onClick={() => {
              onChangeBlog('isPrivate', !isPrivate);
            }}
          />

          <LabelButton
            activeText="Published"
            deActiveText="Publish"
            activeIcon="check"
            deActiveIcon="circle outline"
            active={published}
            onClick={() => {
              console.log('clicked');
              onChangeBlog('published', !published);
            }}
          />
          <BlogsPreviewButton redirectToView={redirectToPreview} floated="right" className={classes.preview}/>
        </Form>
      </div>
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
