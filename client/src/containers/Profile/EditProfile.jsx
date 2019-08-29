import React, { useState } from 'react';
import { Button, Modal, Icon, TextArea } from 'semantic-ui-react';
import styles from './EditProfile.module.css';
import TextInput from '../../components/Form/TextInput';

const EditProfile = ({
  profile,
  updateProfile,
  saving,
}) => {
  // TODO: use useInput hook for editing data
  const [open, setOpen] = useState(false);

  const onSaveClicked = (property, value) => {
    // TODO: save changes to database
    // setOpen(false);
    updateProfile({
      ...profile,
      [property]:value,
    })
  };

  return (
    <Modal
      trigger={
        <Icon name="edit" circular size="large" onClick={() => setOpen(true)} />
      }
      open={open}
    >
      <Modal.Header>Edit profile</Modal.Header>
      <p>{saving && 'Saving...'}</p>
      <div className={styles.container}>
        <div className={styles.input}>
          <TextInput
            focus
            name="Name"
            iconName="user"
            value={profile.name}
            onChange={(e) => onSaveClicked('name',e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextInput
            focus
            name="Profile Image (put 'use name' for using your name as image)"
            iconName="user image"
            value={profile.profileImage}
            onChange={(e) => onSaveClicked('profileImage',e.target.value)}
          />
        </div>
        <div className={styles.input}>
          Description
          <TextArea
            rows={5}
            style={{ width: '100%' }}
            value={profile.description}
            onChange={(e) => onSaveClicked('description',e.target.value)}
          />
        </div>
      </div>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditProfile;
