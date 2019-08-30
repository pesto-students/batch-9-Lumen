import { useState, useEffect, useCallback } from 'react';

import  getProfile, { getUserPublicProfile, updateUserProfile } from '../apis/profile';
import debounce from '../utils/debounce';

const oneSecond = 1000;
const saveUpdate = debounce((newData, completeCallback) => {
    updateUserProfile(newData);
  completeCallback();
}, oneSecond);

function useProfile(username) {
  const [profile, updateProfile] = useState({});
  const [updating, changeUpdating] = useState(false);
  const [profileExist, updateProfileExist] = useState(true);

  const preventUnloadBeforeSaving = useCallback(
    event => {
      if (updating) {
        // eslint-disable-next-line no-param-reassign
        event.returnValue =
          'Please wait on this page while we save your changes. :D';
      }
    },
    [updating]
  );
  useEffect(() => {
    window.addEventListener('beforeunload', preventUnloadBeforeSaving);
    return () => {
      window.removeEventListener('beforeunload', preventUnloadBeforeSaving);
    };
  }, [updating, preventUnloadBeforeSaving]);
  useEffect(() => {
    function handleProfileResponse(profileData) {
      updateProfile(profileData);
    }
    function handleProfileReject(error) {
      updateProfileExist(false);
    }
    if(username) {
        getUserPublicProfile(username).then(handleProfileResponse).catch(handleProfileReject);
    } else {
      getProfile().then(handleProfileResponse).catch(handleProfileReject);
    }
     
  }, [username]);

  useEffect(() => {
    if(profileExist && !username) {
      changeUpdating(false);
      // saveUpdate(profile, () => {
      //   changeUpdating(false);
      // });
    }
  }, [profile]);

  return [profile, updateProfile, updating, profileExist];
}

export default useProfile;
