/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react';
import { deleteBlog } from '../../apis/blogs';

const DeleteBlog = ({ triggerButton, blogId }) => {
  const [deleting, updateDeleting] = useState(false);
  const [deleted, updateDeleted] = useState(false);
  const [error, updateError] = useState(null);
  const [open, updateOpen] = useState(false);

  const handleOpen = () => updateOpen(true);

  const handleClose = () => updateOpen(false);

  const confirmDelete = () => {
    updateDeleting(true);
    deleteBlog(blogId)
      .then(() => {
        updateDeleted(true);
      })
      .catch(e => {
        updateError(e);
      });
  };
  if (deleted) {
    return <Redirect to="/" />;
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      size="mini"
      basic
      trigger={
        triggerButton || (
          <Button
            onClick={handleOpen}
            color="red"
            style={{ marginLeft: '10px' }}
          >
            Delete this Blog
          </Button>
        )
      }
    >
      <Modal.Header>
        <h2>Are you sure you want to delete the blog?</h2>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {error && (
            <p>Error in deleting blog. Please try again in some time.</p>
          )}
        </Modal.Description>
        <Modal.Actions>
          <Button
            color="grey"
            onClick={handleClose}
            inverted
            content="cancel"
            icon="remove"
          />
          <Button
            inverted
            color="red"
            disabled={deleting}
            content="Confirm Delete"
            icon="trash"
            onClick={confirmDelete}
            loading={deleting}
          />
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
};

export default DeleteBlog;
