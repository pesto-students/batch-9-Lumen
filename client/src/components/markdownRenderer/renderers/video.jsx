/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const Video = (props) => {
  const { data: { hProperties } } = props;
  return (
    <div>
      <video>
        <source src={hProperties.src} />
      </video>
    </div>
  );
};

export default Video;
