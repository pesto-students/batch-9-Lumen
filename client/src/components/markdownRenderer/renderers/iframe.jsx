import React from 'react';

const iFrame = (props) => {
  const { data: { hProperties } } = props;
  return (
    <div>
      <iframe
        width="420"
        height="315"
        src={hProperties.src}
        frameBorder="0"
        allowFullScreen
        title=" Your video"
      />
    </div>
  );
};

export default iFrame;
