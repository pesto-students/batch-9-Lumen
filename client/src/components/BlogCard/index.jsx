import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

const BlogCard = ({
  image,
  title,
  userName,
  content,
  datePublished,
  upVotes,
}) => {
  const extra = (
    <div>
      <a href="/">
        <Icon name="sort" />
        {`${upVotes} upvotes`}
      </a>
      <span className="extra content right floated">
        {`${datePublished.toDateString()}`}
      </span>
    </div>
  );
  return (
    <Card
      fluid
      image={image}
      header={title}
      meta={userName}
      description={content}
      // extra={extra}
      style={{ height: "100%", background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"}}
    />
  );
};

BlogCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  userName: PropTypes.string,
  content: PropTypes.string,
  datePublished: PropTypes.instanceOf(Date),
  upVotes: PropTypes.number,

};

BlogCard.defaultProps = {
  image: 'http://www.reginacaeli.be/fileadmin/templates/img/placeholder-small.png',
  title: 'A blog post',
  userName: 'User 1',
  content: 'This is some blog content',
  datePublished: new Date(),
  upVotes: 0,

};

export default BlogCard;
