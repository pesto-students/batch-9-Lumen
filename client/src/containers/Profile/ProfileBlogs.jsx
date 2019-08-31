/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';
import Blogcard from '../../components/BlogCard';
import styles from './ProfileBlogs.module.css';
import useGetUserBlogs from '../../hooks/useGetUserBlogs';
import BlogsLoader from '../Home/HomeLoader';

const ProfileBlogs = ({ 
  profile,
}) => {
  const [activeItem, setActiveItem] = useState('blog');
  const [blogs = { drafts: [], published: []}, ,fetched ] = useGetUserBlogs();
  const loaderStyles = {
    flexDirection :'column'
  }
  const draftsBlogsCards = blogs.drafts.map(blog => {
    return (
      <div className={styles.blogcardContainer} key={blog._id}>
        <Blogcard {...profile} {...blog} href={`/edit/${blog._id}`} />
      </div>
    );
  });

  const publishedBlogsCards = blogs.published.map(blog => {
    return (
      <div className={styles.blogcardContainer} key={blog._id}>
        <Blogcard {...profile} {...blog}  href={`/preview/${blog._id}`} />
      </div>
    );
  });

  const renderBlogs = () => {
    if (activeItem === 'blog') {
      return publishedBlogsCards;
    } if (activeItem === 'draft') {
      return draftsBlogsCards;
    }
    return (<></>);
  };
 
  return (
    <div>
      <Menu pointing secondary className={styles.menuStyle} inverted>
        <Menu.Item
          name="Published"
          active={activeItem === 'blog'}
          onClick={() => setActiveItem('blog')}
        />
        <Menu.Item
          name="Drafts"
          active={activeItem === 'draft'}
          onClick={() => setActiveItem('draft')}
        />
      </Menu>
      
      { !fetched ? <BlogsLoader externalStyles={loaderStyles}/> :
        renderBlogs()
      }
    </div>
  );
};

export default ProfileBlogs;
