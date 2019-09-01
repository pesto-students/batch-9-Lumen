import env from '../../configs/env';

const shareBlog = async (req, res) => {
  const {
    _id,
    title = '',
    description = '',
    imageUrl = 'https://miro.medium.com/max/2082/1*7goNE2n2xxOlmomHfC0-Qw.jpeg',
    userId = {}
  } = req.blog;
  const prependPath = `${env.appViewUrl}blog`;
  const draftPath = `${prependPath}/draft/${req.params.draftUrl}/${_id}`;
  const privatePath = `${prependPath}/secured/${req.params.privateUrl}/${_id}`;
  const publicUrl = `${prependPath}/${_id}`;
  let redirectUrl;
  if (req.params.draftUrl) {
    redirectUrl = draftPath;
  } else if (req.params.privateUrl) {
    redirectUrl = privatePath;
  } else {
    redirectUrl = publicUrl;
  }
  const authorName = userId.name || '';
  const authorUsername = userId.username || '';
  console.log('SENDING IMAGE URL AS', imageUrl);
  res.render('shareBlog', {
    title,
    content: description,
    imageUrl:
      imageUrl ||
      'https://miro.medium.com/max/2082/1*7goNE2n2xxOlmomHfC0-Qw.jpeg',
    redirectUrl,
    name: authorName,
    username: authorUsername
  });
};

export default shareBlog;
