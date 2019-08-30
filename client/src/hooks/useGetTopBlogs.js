import { useState, useEffect } from 'react';

import { getTopBlogs } from '../apis/blogs';

function useGetBlogs(pageNumber) {
  const [blogs, updateBlogs] = useState([]);
  const [blogsFetched, updateBlogsFetched] = useState(false);
  const [blogsExist, updateBlogsExist] = useState(true);

  useEffect(() => {
    function handleBlogsResponse(blogsData) {
      updateBlogs(blogsData);
      updateBlogsFetched(true);
    }
    function handleBlogsReject() {
      updateBlogsExist(false);
      updateBlogsFetched(true);
    }

    getTopBlogs(pageNumber)
      .then(handleBlogsResponse)
      .catch(handleBlogsReject);
  }, [pageNumber]);

  return [blogs, blogsFetched, blogsExist];
}

export default useGetBlogs;
