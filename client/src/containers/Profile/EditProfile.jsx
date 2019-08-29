import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Icon, TextArea } from 'semantic-ui-react';
import styles from './EditProfile.module.css';
import TextInput from '../../components/Form/TextInput';
import { updateUser as updateUserAction } from '../../store/actions'

const EditProfile = ({
  user,
  updateUser,
  userUpdating,
}) => {
  // TODO: use useInput hook for editing data
  const [open, setOpen] = useState(false);
  const [profile = {}, updateProfile] = useState(user);
  useEffect(()=>{
    updateProfile(user);
  },[user]);

  const onUpdateProfile = (property, value) => {
    updateProfile({
      ...profile,
      [property]:value,
    })
  };

  const onSaveClicked = () => {
    updateUser(profile);
  }

  return (
    <Modal
      trigger={
        <Icon name="edit" circular size="large" onClick={() => setOpen(true)} />
      }
      open={open}
    >
      <Modal.Header>Edit profile</Modal.Header>
      <div className={styles.container}>
        <div className={styles.input}>
          <TextInput
            focus
            name="Name"
            iconName="user"
            value={profile.name}
            onChange={(e) => onUpdateProfile('name',e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextInput
            placeholder="Profile Image Url"
            focus
            name="Profile Image"
            iconName="image"
            value={profile.profileImage === 'use name' ? '': profile.profileImage}
            onChange={(e) => onUpdateProfile('profileImage',e.target.value)}
          />
        </div>
        <div className={styles.input}>
          Description
          <TextArea
            rows={5}
            style={{ width: '100%' }}
            value={profile.description}
            onChange={(e) => onUpdateProfile('description',e.target.value)}
          />
        </div>
      </div>
      <Modal.Actions>
      <Button color="green" loading={userUpdating} onClick={() => onSaveClicked()}>
          <Icon name="save" /> Save
        </Button>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  userUpdating: state.auth.updatingUser,
});

export default connect(mapStateToProps,{ updateUser:updateUserAction })(EditProfile);
