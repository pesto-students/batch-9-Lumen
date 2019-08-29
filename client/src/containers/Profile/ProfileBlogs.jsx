import React from 'react';
import { Tab } from 'semantic-ui-react';
import Blogcard from '../../components/BlogCard';
import styles from './ProfileBlogs.module.css';
import useGetUserBlogs from '../../hooks/useGetUserBlogs';

const ProfileBlogs = ({ 
  username,
}) => {
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
  const panes = [
    {
      menuItem: 'Drafts',
      render: () => <Tab.Pane loading={!fetched}> {draftsBlogsCards} </Tab.Pane>,
    },
    {
      menuItem: 'Published',
      render: () => <Tab.Pane loading={!fetched}> {publishedBlogsCards} </Tab.Pane>,
    },
  ]
 
  return (
    <div>
      {/* <Menu pointing secondary className={styles.menuStyle} inverted>
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
      </div> */}
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
};

export default ProfileBlogs;
