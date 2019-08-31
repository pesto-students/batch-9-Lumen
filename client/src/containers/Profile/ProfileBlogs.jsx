import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';
import Blogcard from '../../components/BlogCard';
import styles from './ProfileBlogs.module.css';
import useGetUserBlogs from '../../hooks/useGetUserBlogs';

const ProfileBlogs = ({ 
  username,
}) => {
  const [activeItem, setActiveItem] = useState('blog');
  const [blogs = { drafts: [], published: []}, blogsExist, fetched] = useGetUserBlogs();
  const draftsBlogsCards = blogs.drafts.map((blog) => (
    <div className={styles.blogcardContainer} key={blog._id}>
    <Blogcard {...blog} username={username} href={`/edit/${blog._id}`}/>
    </div>
  ));

  const publishedBlogsCards = blogs.published.map((blog) => (
    <div className={styles.blogcardContainer} key={blog._id}>
    <Blogcard {...blog}  username={username} href={`/preview/${blog._id}`}/>
    </div>
  ));

  const renderBlogs = () => {
    if (activeItem === 'blog') {
      return publishedBlogsCards;
    } if (activeItem === 'draft') {
      return draftsBlogsCards;
    }
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
      
      {renderBlogs()}
    </div>
  );
};

export default ProfileBlogs;
