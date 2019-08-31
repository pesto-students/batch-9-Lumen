import React from 'react';
import PropTypes from 'prop-types';

import useGetBlog from '../../hooks/useBlog';
import Loader from '../UI/Loader';
import ViewBlog from '../ViewBlog/ViewBlog';
import isEmpty from '../../utils/validations/isEmpty';
import PrimaryButton from '../common/PrimaryButton';

const PreviewBlog = ({
  match: {
    params: { blogId }
  },
  history
}) => {
  const [blog] = useGetBlog(blogId);
  if (isEmpty(blog)) {
    return (
      <div>
        <Loader size="massive" text="Loading Preview 🚀" />
      </div>
    );
  }

  const redirectToEdit = () => {
    const redirectPreviewUrl = `/edit/${blogId}`;
    history.push(redirectPreviewUrl);
  };
  const handleKeyDown = event => {
    const isPreviewEvent = event.key === 'p' && event.altKey;
    if (isPreviewEvent) {
      redirectToEdit();
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="presentation"
      style={{ background: '#121212' }}
    >
      <PrimaryButton
        style={{ margin: '20px 0px 0px 20px' }}
        onClick={redirectToEdit}
      >
        Edit
      </PrimaryButton>
      <ViewBlog blog={blog} />
      <PrimaryButton
        style={{ margin: '0px 0px 20px 20px' }}
        onClick={redirectToEdit}
      >
        Edit
      </PrimaryButton>
    </div>
  );
};

PreviewBlog.defaultProps = {
  match: {
    params: {
      blogId: null
    }
  }
};
PreviewBlog.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      blogId: PropTypes.string
    })
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default PreviewBlog;
