import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './BlogCard.module.css';
import fromNow from '../../utils/date/fromNow';

const defaultImageURL =
  'https://miro.medium.com/max/2082/1*7goNE2n2xxOlmomHfC0-Qw.jpeg';
const defaultDescription =
  'This is an awesome blog by an awesome blogger read by an awesome reader.';
const BlogCard = ({
  imageUrl,
  title,
  name,
  username,
  createdAt,
  description,
  href
}) => {
  const desc = description || defaultDescription;
  return (
    <Link className={styles.cardLink} to={href} aria-label="Blog card">
      <div className={styles.container}>
        {/* <article className={styles.blogCard}> */}
        <div className={styles.postImage}>
          <LazyLoadImage
            alt={'Blog'}
            height="100%"
            width="100%"
            effect="blur"
            src={imageUrl || defaultImageURL}
          />
        </div>
        <div className={styles.articleDetails}>
          <h3 className={styles.postTitle}>{title}</h3>
          <p className={styles.postDescription}>{`${desc.slice(0, 150)}...`}</p>
          <div className={styles.postAuthor}>
            <Link to={`/profile/${username}`}>
              <span className={styles.left}>By {name}</span>
            </Link>

            <span className={styles.right}>{fromNow(createdAt)}</span>
          </div>
        </div>
        {/* </article> */}
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  createdAt: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string
};

BlogCard.defaultProps = {
  imageUrl: defaultImageURL,
  title: 'A blog post',
  username: 'User1',
  createdAt: Date.now(),
  description: defaultDescription,
  name: 'Default name',
  href: '#'
};

export default BlogCard;
