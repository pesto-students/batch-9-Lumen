import React from 'react';
import {Segment, Placeholder} from 'semantic-ui-react';
import styles from './Home.module.css';

const BlogLoader = () => (
  <div className={styles.child}>
    <Segment inverted>
      <Placeholder inverted>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  </div>
);

const HomeLoader = () => {
  return (
    <>
      <div className={styles.parent}>
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
      </div>
    </>
  );
};

export default HomeLoader;
