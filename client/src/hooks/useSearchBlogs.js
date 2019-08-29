import { useState, useEffect } from 'react';

import { searchBlogs } from '../apis/blogs';

function useSearchBlogs(pageNumber, search = '', categoryList = [] ) {
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
  
    searchBlogs(pageNumber,search,categoryList).then(handleBlogsResponse).catch(handleBlogsReject);
    
  }, []);


  return [blogs, blogsFetched, blogsExist];
}

export default useSearchBlogs;
