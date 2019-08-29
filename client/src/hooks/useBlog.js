import { useState, useEffect, useCallback } from 'react';

import { getBlog, updateBlog as updateBlogCall } from '../apis/blogs';
import debounce from '../utils/debounce';

const threeSeconds = 3000;
const saveUpdate = debounce((blog, blogId, completeCallback) => {
  updateBlogCall(blog, blogId);
  completeCallback();
}, threeSeconds);

function useBlog(blogId) {
  const [blog, updateBlog] = useState({});
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
    getBlog(blogId).then(handleBlogResponse);
  }, [blogId]);

  useEffect(() => {
    changeUpdating(true);
    saveUpdate(blog, blogId, () => {
      changeUpdating(false);
    });
  }, [blog, blogId]);

  return [blog, updateBlog, updating];
}

export default useBlog;
