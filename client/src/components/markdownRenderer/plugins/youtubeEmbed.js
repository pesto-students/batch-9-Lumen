import RemarkIFrame from './remarkIframe';

const properties = {

  'youtu.be': {
    disabled: false,
    oembed: 'https://www.youtube.com/oembed',
  },

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
};

const youtubePlugin = RemarkIFrame(properties);

export default youtubePlugin;
