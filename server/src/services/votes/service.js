/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
import VotesModel from '../../models/votes';
import { convertIntoObjectID } from '../../utils/helpers/mongoose';

const voteBlog = async (blogId, userId, addVotes) => {
  const query = {
    blogId: convertIntoObjectID(blogId),
    userId: convertIntoObjectID(userId)
  };
  const update = {
    $setOnInsert: {
      blogId: convertIntoObjectID(blogId),
      userId: convertIntoObjectID(userId)
    },
    $inc: {
      upVotes: addVotes
    }
  };
  const options = {
    upsert: true,
    new: true
  };
  const updatedVote = await VotesModel.findOneAndUpdate(query, update, options);
  return updatedVote;
};

const countVotesOfBlog = async blogId => {
  const query = {
    blogId: convertIntoObjectID(blogId),
    upVotes: {$gt: 0},
  };
  const filterBlog = { $match: query };

  const totalUpVotes = { $sum: '$upVotes' };
  const uniqueUpVotes = { $sum: 1 };
  const resultGroup = {
    _id: '$blogId',
    totalUpVotes,
    uniqueUpVotes
  };
  const groupVotes = { $group: resultGroup };

  const countVotesAggregationPipeline = [filterBlog, groupVotes];
  const votes = await VotesModel.aggregate(countVotesAggregationPipeline);
  if(!votes[0]) {
    return {
      _id: blogId,
      totalUpVotes : 0,
      uniqueUpVotes : 0,
    }
  }
  return votes[0];
};

const getUserUpVotes = async (blogId, userId) => {
  const query = {
    blogId: convertIntoObjectID(blogId),
    userId: convertIntoObjectID(userId)
  };

  const projection = 'upVotes';

  const votes = await VotesModel.findOne(query, projection);
  if(!votes) {
    return {
      upVotes: 0,
    }
  }
  return votes;
};

const getTopVotedBlogs = async (pageNumber, limit) => {
  const query = {};
  const filterBlogs = {
    $match: query
  };
  const totalUpVotes = { $sum: '$upVotes' };
  const uniqueUpVotes = { $sum: 1 };
  const resultGroup = {
    _id: '$blogId',
    totalUpVotes,
    uniqueUpVotes,
    blogId: { $first: '$blogId' }
  };
  const groupBlogs = { $group: resultGroup };
  const sortDocs = { $sort: { uniqueUpVotes: -1 } };
  const limitDocs = { $limit: limit };
  const blogs = [];
  const votesAggregateCursor = await VotesModel.aggregate([
    filterBlogs,
    groupBlogs,
    sortDocs,
    limitDocs
  ])
    .cursor({ batchSize: 1000 })
    .exec();

  await votesAggregateCursor.eachAsync(blog => {
    blogs.push(blog._id);
  });
  return blogs;
};

const deleteVotes = async (blogId) => {
  const query = {
    blogId
  };
  const details = await VotesModel.deleteMany(query);
  return details;
}

export { voteBlog, countVotesOfBlog, getUserUpVotes, getTopVotedBlogs, deleteVotes };
