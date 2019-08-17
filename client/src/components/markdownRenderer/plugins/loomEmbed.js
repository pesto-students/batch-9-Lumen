import RemarkIFrame from './remarkIframe';

const properties = {
  'www.loom.com': {
    tag: 'iframe',
    width: 560,
    height: 315,
    disabled: false,
    replace: [
      ['share', 'embed'],
      ['http://', 'https://'],
    ],
    removeAfter: '&',
  },
};

const loomPlugin = RemarkIFrame(properties);

export default loomPlugin;
