import mongoose from 'mongoose';

const { Schema } = mongoose;

const BlogsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: 'My Blog',
  },
  content: {
    type: String,
    required: true,
    default: '## My Blog is about',
  },
  private: {
    type: Boolean,
    default: false,
  },
  published: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
  },
}, {
  timestamps: true,
});

BlogsSchema.index({
  title: 'text',
  content: 'text',
}, {
  name: 'SearchBlogIndex',
  weights: {
    title: 10,
    content: 1,
  },
});

const Blogs = mongoose.model('Blogs', BlogsSchema);
export default Blogs;
