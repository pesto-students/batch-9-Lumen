import mongoose from 'mongoose';

const { Schema } = mongoose;

const BlogsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  content: [
    {
      _id: Schema.Types.ObjectId,
      type: String,
      fragment: {
        type: String,
        required: true,
      },
    },
  ],
  likes: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
  },
  private: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

const Blogs = mongoose.model('Blogs', BlogsSchema);
export default Blogs;
