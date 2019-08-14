import React, { useState } from 'react';
import Markdown from '../markdownRenderer';

const BlogBox = () => {
  const [text, updateText] = useState('');
  const [markdownText, updateMarkdown] = useState('');

  return (
    <div>
      <h1>
         Enter Markdown
      </h1>
      <textarea
        rows="20"
        cols="100"
        onChange={(e) => { updateText(e.target.value); }}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          updateMarkdown(text);
        }}
      >
        Render
      </button>
      <Markdown
        data={markdownText}
      />
    </div>
  );
};

export default BlogBox;
