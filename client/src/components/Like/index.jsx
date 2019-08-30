import React from 'react';
import {Button, Icon, Label, Popup} from 'semantic-ui-react';
import useBlogVotes from '../../hooks/useVotes';

const LikeButton = ({blogId, _id}) => {
  const [votes, userVotes, canUserVote, updateUserVotes] = useBlogVotes(blogId, _id);
  const toggleVoted = () => {
    if(canUserVote) {
      if(userVotes === 0) {
        updateUserVotes(() => 1);
      } else if (userVotes === 1) {
        updateUserVotes(() => 0)
      }
    }
  }
const likeButton = () => ( 
<Button as="div" labelPosition="right" onClick={toggleVoted} >
<Button color="red">
  <Icon name="heart" />
  {userVotes === 1 && canUserVote ? 'Liked': 'Like'}
</Button>
<Label as="a" basic color="red" pointing="left">
  {votes}
</Label>
</Button>)
  return (
    <div>
      {
        canUserVote ? likeButton() : (
        <Popup 
          trigger={likeButton()}
          content='Please login to like and comment'
          inverted
         />)
        
      }
    </div>
  );
};

export default LikeButton;
