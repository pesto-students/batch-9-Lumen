import React from 'react';
import ReactMarkdown from 'react-markdown';

const test = () => {
  const input = `<html>
  <head>
  </head>
</html>`;

  return (
    <div>
      <ReactMarkdown 
       escapeHtml={false}
      source={input} />
    </div>
  );
};

export default test;
