import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Categories = mongoose.model('Categories', CategoriesSchema);
export default Categories;
