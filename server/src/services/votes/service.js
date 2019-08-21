import VotesModel from '../../models/votes';
import { convertIntoObjectID } from '../../utils/helpers/mongoose';

const voteBlog = async (blogId, userId, addVotes) => {
  const query = {
    blogId: convertIntoObjectID(blogId),
    userId: convertIntoObjectID(userId),
  };
  const update = {
    $setOnInsert: {
      blogId: convertIntoObjectID(blogId),
      userId: convertIntoObjectID(userId),
    },
    $inc: {
      upVotes: addVotes,
    },
  };
  const options = {
    upsert: true,
    new: true,
  };
  const updatedVote = await VotesModel.findOneAndUpdate(query, update, options);
  return updatedVote;
};

const countVotesOfBlog = async (blogId) => {
  const query = {
    blogId: convertIntoObjectID(blogId),
  };
  const filterBlog = { $match: query };

  const totalUpVotes = { $sum: '$upVotes' };
  const uniqueUpVotes = { $sum: 1 };
  const resultGroup = {
    _id: '$blogId',
    totalUpVotes,
    uniqueUpVotes,
  };
  const groupVotes = { $group: resultGroup };

  const countVotesAggregationPipeline = [
    filterBlog,
    groupVotes,
  ];
  const votes = await VotesModel.aggregate(countVotesAggregationPipeline);
  return votes[0];
};

const getUserUpVotes = async (blogId, userId) => {
  const query = {
    blogId: convertIntoObjectID(blogId),
    userId: convertIntoObjectID(userId),
  };

  const projection = 'upVotes';

  const votes = await VotesModel.findOne(query, projection);
  return votes;
};

export {
  voteBlog,
  countVotesOfBlog,
  getUserUpVotes,
};
