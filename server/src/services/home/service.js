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

const getDefaultCategory = async () => {
  const query = {
    name:'Miscellaneous'
  }
  const category = CategoriesModel.findOne(query).lean();
  return category;
};
export { getAllCategories, categoryCount, getDefaultCategory };
