import Categories from '../models/categories';
import categories from './categories';

const populate = async () => {
  categories.forEach(async category => {
    const query = {
      name: category.name
    };
    const update = {
      $setOnInsert: {
        name: category.name
      },
      $set: {
        image: category.image
      }
    };
    await Categories.findOneAndUpdate(query, update, { upsert: true });
  });
};

export default populate;
