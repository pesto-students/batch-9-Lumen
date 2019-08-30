import React from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'semantic-ui-react';

import ViewBlog from '../../components/ViewBlog/ViewBlog';
import useGetBlog from '../../hooks/useBlog';
import isEmpty from '../../utils/validations/isEmpty';
import Loader from '../../components/UI/Loader';
import BlogComments from '../../components/Comment';
import LikeButton from '../../components/Like';

const BlogPage = ({
  match: {
    params: { blogId }
  }
}) => {
  const [blog] = useGetBlog(blogId);
  if (isEmpty(blog)) {
    return (
      <div>
        <Loader size="massive" text="Good things take time 🚀" />
      </div>
    );
  }

  return (
    <div style={{ background: '#121212' }}>
      <ViewBlog blog={blog} />
      <Divider horizontal inverted>
          <LikeButton count="99" />
        </Divider>
      <BlogComments />
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
