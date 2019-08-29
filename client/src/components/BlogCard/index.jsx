import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

const BlogCard = ({
  imageUrl,
  title,
  username,
  content,
  createdAt,
  description,
  href,
}) => {
  return (
    <Card
      fluid
      image={imageUrl}
      header={title}
      meta={username}
      description={description}
      // extra={extra}
      style={{ height: "100%", background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"}}
      href={href}
    />
  );
};

BlogCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  description:  PropTypes.string,
};

BlogCard.defaultProps = {
  imageUrl: 'http://www.reginacaeli.be/fileadmin/templates/img/placeholder-small.png',
  title: 'A blog post',
  username: 'User 1',
  content: 'This is some blog content',
  createdAt: '',
  description:  'Blog',
};

export default BlogCard;
