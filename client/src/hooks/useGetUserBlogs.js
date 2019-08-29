import { useState, useEffect } from 'react';

import { getBlogsFromUsername, getUserBlogs } from '../apis/blogs';

function useGetBlogs(username) {
  const blogsShape = username ? [] : { drafts: [], published: []};
  const [blogs, updateBlogs] = useState(blogsShape);
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
    if(username) {
        getBlogsFromUsername(username).then(handleBlogsResponse).catch(handleBlogsReject);
    } else {
      getUserBlogs().then(handleBlogsResponse).catch(handleBlogsReject);
    }
     
  }, [username]);


  return [blogs, blogsExist, blogsFetched];
}

export default useGetBlogs;
