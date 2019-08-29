import React from 'react';
import {Redirect} from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';
import UIAvatar from 'react-ui-avatars';

import styles from './Profile.module.css';
import ProfileBlogs from './ProfileBlogs';
import ProfileBlogsPublic from './ProfileBlogsPublic';
import EditProfile from './EditProfile';
import useProfile from '../../hooks/useProfile';
import isEmpty from '../../utils/validations/isEmpty';

const Profile = ({
  match:{params:{publicUser}}
}) => {
  const [profile, updateProfile, saving, profileExist] = useProfile(publicUser);
  const isPublicProfile = !isEmpty(publicUser)
  const {
    name = '',
    username = '',
    profileImage,
    description = '',
  } = profile;
  if(!profileExist) {
    return (
      <div>
      <Redirect 
      to="/"
      />
    </div>
    )
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.upper}>
          {profileImage && profileImage !== 'use name' ? (<Image
            src={profileImage}
            size="medium"
            circular
            className={styles.image}
          />):
           (<UIAvatar name={name} size={200} rounded className={styles.image} uppercase/>)}
          <div className={styles.profileContent}>
            <h1 className={styles.name}> {name}  </h1>
            <h2 className={styles.username}> {username}  </h2>
            <h3 className={styles.details}>
              {description}
            </h3>
          </div>
          {/* TODO: Conditional render */}
         { !isPublicProfile &&  <EditProfile profile={profile} updateProfile={updateProfile} saving={saving} />}
        </div>
        <Divider horizontal inverted>
          ***
        </Divider>
        <div className={styles.lower}>
          {isPublicProfile ? <ProfileBlogsPublic username={publicUser} profile={profile}/>  : <ProfileBlogs profile={profile} username={username}/>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
