import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from '../UI/Loader';
import isEmpty from '../../utils/validations/isEmpty';
import createBlog from '../../apis/blogs';

const CreateBlog = ({ history }) => {
  const [blogCreated, updateBlogCreated] = useState(null);
  const [createError, updateCreateError] = useState(null);
  if (createError) {
    return (
      <div>
        <Loader
          size="massive"
          text="Oops! Something went wrong. Try again in some time :) "
        />
        <Link to="/">GO HOME </Link>
      </div>
    );
  }
  if (isEmpty(blogCreated)) {
    const title = 'My awesome new blog';
    const content = '# Here goes my content';
    const newBlog = { title, content };
    createBlog(newBlog)
      .then(data => {
        updateBlogCreated(data);
      })
      .catch(e => {
        updateCreateError(e);
      });
  }
  if (!isEmpty(blogCreated)) {
    const { _id } = blogCreated;
    const redirectPath = `/edit/${_id}`;
    history.replace(redirectPath);
  }
  return (
    <div>
      <Loader size="massive" text="Creating a blog for you 🥳" />
    </div>
  );
};

CreateBlog.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }).isRequired
};
export default CreateBlog;
