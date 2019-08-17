import RemarkIFrames from 'remark-iframes';

const createPlugin = (properties) => [
  RemarkIFrames,
  properties,
];

export default createPlugin;
