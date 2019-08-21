import RemarkIFrame from './remarkIframe';

const properties = {
  'lumen-video.com': {
    tag: 'video',
    width: 560,
    height: 315,
    disabled: false,
    replace: [
      ['http://lumen-video.com?video=', ''],
      ['https://lumen-video.com?video=', ''],
      ['http://', 'https://'],
    ],
    removeAfter: '&',
  },
};

const loomPlugin = RemarkIFrame(properties);

export default loomPlugin;
