import React from 'react';

const iFrame = (props) => {
  const { data: { hProperties } } = props;
  return (
    <iframe
      src={hProperties.src}
      frameBorder="0"
      allowFullScreen
      title=" Your video"
    />
  );
};

export default iFrame;
