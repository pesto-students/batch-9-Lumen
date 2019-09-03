import React, { useState } from 'react';
import Blogcard from '../../components/BlogCard';
import styles from './ProfileBlogs.module.css';
import useGetUserBlogs from '../../hooks/useGetUserBlogs';
import BlogsLoader from '../Home/HomeLoader';

const blogsCards = (blogs, profile) => blogs.reverse().map((blog) => {
  return(
  <div className={styles.blogcardContainer} key={blog._id}>
  <Blogcard {...profile} {...blog} href={`/blog/${blog._id}`} />
  </div>
);
});
const ProfileBlogs = ({
  profile,
  publicUser,
}) => {
  const [blogs = [], ,  fetched] = useGetUserBlogs(publicUser);
  const loaderStyles = {
    flexDirection :'column'
  }
  return (
    <div>
      <h1 className={styles.title}> Blogs </h1>
      {
        !fetched ? <BlogsLoader externalStyles={loaderStyles}/> :
        blogsCards(blogs,profile)
      }
      { blogs.length === 0 ? <h3 className={styles.error}> {`${profile.name} has not written any blogs yet.`}</h3> : null}
    </div>
  );
};

export default ProfileBlogs;
