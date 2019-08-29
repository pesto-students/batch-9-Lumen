/* eslint-disable no-underscore-dangle */
import {
  updateProfile as updateProfileService,
  getProfile,
  getProfileByUsername
} from './service';

const health = (req, res) => {
  res.status(200);
  res.json({ status: 'Ok' });
};

const signUp = (req, res) => {
  res.status(200);
  res.json({ msg: 'success', token: req.user });
};

const signIn = (req, res) => {
  res.status(200);
  res.json({ msg: 'success', token: req.user });
};

const updateProfile = async (req, res) => {
  try {
    const updates = {
      name: req.body.name,
      description: req.body.description,
      profileImage: req.body.profileImage
    };
    await updateProfileService(req.user._id, updates);
    res.json({ msg: 'success' });
  } catch (e) {
    res.status(500).json({ msg: 'failed', error: e });
  }
};

const sendProfile = async (req, res) => {
  try {
    const user = await getProfile(req.user._id);
    res.json({ msg: 'success', user });
  } catch (e) {
    res.status(500).json({ msg: 'failed', error: e });
  }
};

const getPublicProfile = async (req, res) => {
  try {
    const user = await getProfileByUsername(req.params.username);
    if(!user) {
      return res.status(404).json({msg: 'User Not Found'});
    }
    return res.json({ msg: 'success', user });
  } catch (e) {
    return res.status(500).json({ msg: 'failed', error: e });
  }
};
const apis = {
  health,
  signUp,
  signIn,
  updateProfile,
  sendProfile,
  getPublicProfile
};
export default apis;
