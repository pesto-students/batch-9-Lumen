import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true,
      index: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      unique: true,
      index: true
    },
    profileImage: {
      type: String,
      default: 'use name',
    },
    description: {
      type: String,
      default: 'Hey! I am a blogger at lumen.'
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);
export default User;
