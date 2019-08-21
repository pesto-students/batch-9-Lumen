import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentsSchema = new Schema({
  blogId: {
    type: Schema.Types.ObjectId,
    ref: 'Blogs',
    required: true,
  },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: 'Comments',
    default: null,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Comments = mongoose.model('Comments', CommentsSchema);
export default Comments;
