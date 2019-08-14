import RemarkIFrame from './remarkIframe';

const properties = {
  default: {
    tag: 'iframe',
    width: 560,
    height: 315,
    disabled: false,
    replace: [
      ['http://', 'https://'],
    ],
    removeAfter: '&',
  },
};

const defaultPlugin = RemarkIFrame(properties);

export default defaultPlugin;
