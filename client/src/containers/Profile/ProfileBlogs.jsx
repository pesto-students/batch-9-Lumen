import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import Blogcard from '../../components/BlogCard';
import styles from './ProfileBlogs.module.css';

const ProfileBlogs = () => {
  const [activeItem, setActiveItem] = useState('blog');

  return (
    <div>
      <Menu pointing secondary className={styles.menuStyle} inverted>
        <Menu.Item
          name="Published"
          active={activeItem === 'blog'}
          inverted
          onClick={() => setActiveItem('blog')}
        />
        <Menu.Item
          name="Drafts"
          active={activeItem === 'draft'}
          inverted
          onClick={() => setActiveItem('draft')}
        />
      </Menu>
      <div className={styles.blogcardContainer}>
        <Blogcard />
      </div>
      <div className={styles.blogcardContainer}>
        <Blogcard />
      </div>
      <div className={styles.blogcardContainer}>
        <Blogcard />
      </div>
      <div className={styles.blogcardContainer}>
        <Blogcard />
      </div>
    </div>
  );
};

export default ProfileBlogs;
