/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Blogcard from '../../components/BlogCard';
import styles from './ProfileBlogs.module.css';
import useGetUserBlogs from '../../hooks/useGetUserBlogs';
import BlogsLoader from '../Home/HomeLoader';
import LabelButton from '../../components/common/LabelButton';

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
      if(blogs.published.length === 0){
        return (<> 
          <h3 className={styles.error}> You have not written any blogs yet. This is the good time to write your first blog and share with the world!</h3> 
          <Link to="/write" className={styles.write}><LabelButton active activeText="Write" activeIcon="edit"/> </Link>
        </>)
      }
      return publishedBlogsCards;
    } if (activeItem === 'draft') {
      if(blogs.drafts.length === 0){
        return <h3 className={styles.error}> You have no blogs in draft.</h3>
      }
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
