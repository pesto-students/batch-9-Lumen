import { useState, useEffect, useCallback } from 'react';

import { getBlog, updateBlog as updateBlogCall } from '../apis/blogs';
import debounce from '../utils/debounce';

const threeSeconds = 3000;
const saveUpdate = debounce((blog, blogId, completeCallback) => {
  updateBlogCall(blog, blogId);
  completeCallback();
}, threeSeconds);

function useBlog(blogId, editing = false, draftPath, privatePath) {
  const [blog, updateBlog] = useState({});
  const [fetchBlogError, updateFetchBlogError] = useState({});
  const [updating, changeUpdating] = useState(false);

  const preventUnloadBeforeSaving = useCallback(
    event => {
      if (updating) {
        // eslint-disable-next-line no-param-reassign
        event.returnValue =
          'Please wait on this page while we save your changes. :D';
      }
    },
    [updating]
  );
  useEffect(() => {
    window.addEventListener('beforeunload', preventUnloadBeforeSaving);
    return () => {
      window.removeEventListener('beforeunload', preventUnloadBeforeSaving);
    };
  }, [updating, preventUnloadBeforeSaving]);

  useEffect(() => {
    function handleBlogResponse(blogData) {
      updateBlog(blogData);
    }
    function handleBlogError(error) {
      updateFetchBlogError(error);
    }
    getBlog(blogId, draftPath, privatePath)
      .then(handleBlogResponse)
      .catch(handleBlogError);
  }, [blogId, draftPath, privatePath]);

  useEffect(() => {
    if (editing) {
      changeUpdating(true);
      saveUpdate(blog, blogId, () => {
        changeUpdating(false);
      });
    }
  }, [blog, blogId]);

  return [blog, updateBlog, updating, fetchBlogError];
}

export default useBlog;
