import { getAllCategories } from './service';

const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const getCategories = async (req, res) => {
  const categories = await getAllCategories();
  return res.json(categories);
};

const apis = {
  health,
  getCategories
};
export default apis;
