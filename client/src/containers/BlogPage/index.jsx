import React from 'react';
import PropTypes from 'prop-types';

import ViewBlog from '../../components/ViewBlog/ViewBlog';
import useGetBlog from '../../hooks/useBlog';
import isEmpty from '../../utils/validations/isEmpty';
import Loader from '../../components/UI/Loader';

const BlogPage = ({
  match: {
    params: { blogId }
  }
}) => {
  const [blog] = useGetBlog(blogId);
  if (isEmpty(blog)) {
    return (
      <div style={{ background: '#121212' }}>
        <Loader size="massive" text="Good things take time 🚀" />
      </div>
    );
  }

  return (
    <div>
      <ViewBlog blog={blog} />
    </div>
  );
};

BlogPage.defaultProps = {
  match: {
    params: {
      blogId: null
    }
  }
};
BlogPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      blogId: PropTypes.string
    })
  })
};

export default BlogPage;
