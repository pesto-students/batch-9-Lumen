import CategoriesModel from '../../models/categories';

const getAllCategories = async () => {
  const query = {
    name: { $exists: true }
  };
  const categories = CategoriesModel.find(query)
    .sort('name')
    .lean();
  return categories;
};

const categoryCount = async () => {
  const categoriesCount = CategoriesModel.count({});
  return categoriesCount;
};
export { getAllCategories, categoryCount };
