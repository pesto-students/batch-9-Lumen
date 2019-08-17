import RemarkIFrame from './remarkIframe';

const properties = {
  'vimeo.com': {
    tag: 'iframe',
    width: 560,
    height: 315,
    disabled: false,
    replace: [
      ['vimeo.com', 'player.vimeo.com/video'],
      ['http://', 'https://'],
    ],
    removeAfter: '&',
  },
  'www.vimeo.com': {
    tag: 'iframe',
    width: 560,
    height: 315,
    disabled: false,
    replace: [
      ['www.vimeo.com', 'player.vimeo.com/video'],
      ['http://', 'https://'],
    ],
    removeAfter: '&',
  },
};

const vimeoPlugin = RemarkIFrame(properties);

export default vimeoPlugin;
