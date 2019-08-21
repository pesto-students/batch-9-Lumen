import mongoose from 'mongoose';

const isValid = (objectID) => mongoose.Types.ObjectId.isValid(objectID);

export { isValid };
