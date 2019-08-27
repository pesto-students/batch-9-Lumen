import React, { useState } from 'react';
import { Button, Modal, Icon, TextArea } from 'semantic-ui-react';
import styles from './EditProfile.module.css';
import TextInput from '../../components/Form/TextInput';

const EditProfile = () => {
  // TODO: use useInput hook for editing data
  const [open, setOpen] = useState(false);

  const onSaveClicked = () => {
    // TODO: save changes to database
    setOpen(false);
  };

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
            value="Name"
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextInput
            focus
            name="Username"
            iconName="user circle"
            value="Username"
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          Description
          <TextArea
            rows={5}
            style={{ width: '100%' }}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={onSaveClicked}>
          <Icon name="checkmark" /> Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditProfile;
