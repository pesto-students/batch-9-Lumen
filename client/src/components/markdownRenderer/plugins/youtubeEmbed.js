import RemarkIFrame from './remarkIframe';

const properties = {
  'www.youtube.com': {
    tag: 'iframe',
    width: 560,
    height: 315,
    disabled: false,
    replace: [
      ['watch?v=', 'embed/'],
      ['http://', 'https://'],
    ],
    thumbnail: {
      format: 'http://img.youtube.com/vi/{id}/0.jpg',
      id: '.+/(.+)$',
    },
    removeAfter: '&',
  },
  'youtu.be': {
    disabled: false,
    oembed: 'https://www.youtube.com/oembed',
  },
};

const youtubePlugin = RemarkIFrame(properties);

export default youtubePlugin;
