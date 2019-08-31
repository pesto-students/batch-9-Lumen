import React, { useState } from 'react';
import Blogcard from '../../components/BlogCard';
import styles from './ProfileBlogs.module.css';
import useGetUserBlogs from '../../hooks/useGetUserBlogs';

const ProfileBlogs = ({
  username,
}) => {
  const [blogs = [], blogsExist, fetched ] = useGetUserBlogs(username);
  const blogsCards = blogs.map((blog) => (
    <div className={styles.blogcardContainer} key={blog._id}>
    <Blogcard blog={blog} username={username} href={`/preview/${blog._id}`} />
    </div>
  ));
  
  return (
    <div>
      <h1 className={styles.title}> Blogs </h1>
      {blogsCards}
    </div>
  );
};

export default ProfileBlogs;
