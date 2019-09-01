import { deleteComments } from '../services/comments/service';

const deleteBlogComments = async (req, res, next) => {
    const blogID = req.params.id;
    try {
      const details = await deleteComments(blogID);
      if (details.ok === 1) {
        return next();
      }
      return res.status(500).json({ msg: 'Error In deleting comments', details });
    } catch (err) {
      return res.status(500).json({ msg: 'Something went wrong', error: err });
    }
  };

  export default deleteBlogComments;