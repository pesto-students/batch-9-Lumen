import axios from '../http/axios-user';

const getUserProfile = async () => {
  try {
    const response = await axios.get('/profile');
    return response.data.user;
  } catch (e) {
    if (!e.response) throw new Error(e);

    throw new Error(e.response.data);
  }
};

const getUserPublicProfile = async username => {
  try {
    const response = await axios.get(`/profile/${username}`);
    return response.data.user;
  } catch (e) {
    if (!e.response) throw new Error(e);

    throw new Error(e.response.data);
  }
};

const updateUserProfile = async (newData) => {
  try {
    const response = await axios.put('/profile', newData);
    return response.data.msg;
  } catch (e) {
    if (!e.response)  throw new Error(e);

    throw new Error(e.response.data);
  }
};
export {
    getUserPublicProfile,
    updateUserProfile,
}
export default getUserProfile;
