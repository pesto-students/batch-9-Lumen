import env from '../../configs/env';

const shareBlog = async (req, res) => {
  const {
    _id,
    title = '',
    description = '',
    imageUrl = 'https://cdn3.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg'
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
  res.render('shareBlog', {
    title,
    content: description,
    imageUrl,
    redirectUrl
  });
};

export default shareBlog;
