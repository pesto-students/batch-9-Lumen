import mongoose from 'mongoose';

const isValid = (objectID) => mongoose.Types.ObjectId.isValid(objectID);

const convertIntoObjectID = (id) => mongoose.Types.ObjectId(id);

export {
  isValid,
  convertIntoObjectID,
};
