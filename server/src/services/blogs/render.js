import env from '../../configs/env';

const shareBlog = async (req, res) => {
    const {
        _id,
        title= '',
     content = '',
      imageUrl = 'https://cdn3.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg',
      isPrivate = true,
      published = false,
     } = req.blog;
     const isSharable = !isPrivate && published
     if(true) {
         const redirectUrl = `${env.appViewUrl}blog/${_id}`
        res.render('shareBlog', {
            title,
            content, 
            imageUrl,
            redirectUrl,
        });
     }
     res.status(400).send('Not Found');
  };
  

  export default shareBlog;