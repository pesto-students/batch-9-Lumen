import React from 'react';
import {Segment, Placeholder} from 'semantic-ui-react';
import styles from './Home.module.css';

const BlogLoader = () => (
  <>
    <Segment inverted>
      {/* <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}
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
  </>
);

const HomeLoader = () => {
  return (
    <>
      <div className={[styles.column, styles['column-first']].join(' ')}>
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
      </div>

      <div className={[styles.column, styles['column-others']].join(' ')}>
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
      </div>

      <div className={[styles.column, styles['column-others']].join(' ')}>
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
        <BlogLoader />
      </div>
    </>
  );
};

export default HomeLoader;
