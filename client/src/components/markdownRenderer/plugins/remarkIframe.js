import RemarkIFrames from 'remark-iframes-extended';

const createPlugin = (properties) => [
  RemarkIFrames,
  properties,
];

export default createPlugin;
