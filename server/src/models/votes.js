import mongoose from 'mongoose';

const { Schema } = mongoose;

const VotesSchema = new Schema({
  blogId: {
    type: Schema.Types.ObjectId,
    ref: 'Blogs',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  upVotes: {
    type: Number,
  },
}, {
  timestamps: true,
});

const Votes = mongoose.model('Votes', VotesSchema);
export default Votes;
