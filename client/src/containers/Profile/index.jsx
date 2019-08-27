import React from 'react';
import { Image, Divider } from 'semantic-ui-react';
import styles from './Profile.module.css';
import ProfileBlogs from './ProfileBlogs';

const Profile = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="medium"
            circular
            className={styles.image}
          />
          <div className={styles.profileContent}>
            <h1 className={styles.name}> Name</h1>
            <h2 className={styles.username}> Username</h2>
            <h3 className={styles.details}>
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate soluta, natus corporis, blanditiis amet animi sapiente
              explicabo odio dolorem ab qui dolore vero tempora provident facere
              debitis. Animi, qui dignissimos!{' '}
            </h3>
          </div>
        </div>
        <Divider horizontal inverted>
          ***
        </Divider>
        <div className={styles.lower}>
          <ProfileBlogs />
        </div>
      </div>
    </div>
  );
};

export default Profile;
