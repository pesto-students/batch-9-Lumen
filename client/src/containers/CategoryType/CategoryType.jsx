/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react'
import useSearchBlogs from '../../hooks/useSearchBlogs';
import BlogCard from '../../components/BlogCard';
import Loader from '../../components/UI/Loader';

const CategoryType = ({match,
     location:{
          search },
     history}) => {
    const queryParams = new URLSearchParams(search);
    const requiredSearchParam = queryParams.get('search');
    if(!requiredSearchParam) {
        history.push('/')
    }
    const categoryList = [requiredSearchParam];
    const [blogs, fetched] = useSearchBlogs(1, '', categoryList);
    const blogsCards = blogs.map((blog) => {
        const user = blog.userId || {};
        return ( <BlogCard {...user} {...blog} href={`/blog/${blog._id}`}/>)
    }
    )

    if(!fetched) {
        return(
            <Loader 
            size="massive"
            text="Loading.."
            />
        )
    }
    return (
        <div>
            <h1>{match.params.type}</h1>
            {blogsCards}
        </div>
    )
}

export default CategoryType
