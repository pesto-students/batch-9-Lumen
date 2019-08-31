import React from 'react';
import {Redirect} from 'react-router-dom';
import { Image, Divider } from 'semantic-ui-react';
import UIAvatar from 'react-ui-avatars';
import { connect } from 'react-redux';

import styles from './Profile.module.css';
import ProfileBlogs from './ProfileBlogs';
import ProfileBlogsPublic from './ProfileBlogsPublic';
import EditProfile from './EditProfile';
import useProfile from '../../hooks/useProfile';
import isEmpty from '../../utils/validations/isEmpty';
import ProfileLoader from './ProfileLoader';

const Profile = ({
  match:{params:{publicUser}},
   user,
}) => {
  const [profile, , , profileExist] = useProfile(publicUser);
  const isPublicProfile = !isEmpty(publicUser)
  const currentUser = isPublicProfile? profile : user || {};
  const {
    name = '',
    username = '',
    profileImage,
    description = '',
  } = currentUser;
  const profileLoading = isEmpty(currentUser);
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
        
       { profileLoading ? <ProfileLoader /> :
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
         { !isPublicProfile &&  <EditProfile />}
        </div>
        }<Divider horizontal inverted>
          ***
        </Divider>
        <div className={styles.lower}>
          {isPublicProfile ? <ProfileBlogsPublic  profile={currentUser} publicUser={publicUser}/> 
           : <ProfileBlogs profile={currentUser}/>}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user
});
export default connect(mapStateToProps, {})(Profile);
