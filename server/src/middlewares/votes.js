import { deleteVotes } from '../services/votes/service';

const deleteBlogVotes = async (req, res, next) => {
    const blogID = req.params.id;
    try {
      const details = await deleteVotes(blogID);
      if (details.ok === 1) {
        return next();
      }
      return res.status(500).json({ msg: 'Error In deleting votes', details });
    } catch (err) {
      return res.status(500).json({ msg: 'Something went wrong', error: err });
    }
  };

  export default deleteBlogVotes;