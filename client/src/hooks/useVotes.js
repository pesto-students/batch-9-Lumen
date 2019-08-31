import { useState, useEffect, useCallback } from 'react';
import { getBlogVotes, getMyVotes, upVoteBlog, downVoteBlog } from '../apis/votes';
import debounce from '../utils/debounce';
import usePrevious from './usePrevious';

const oneSecond = 1000;

const saveUpdate = debounce((votes, lastUserVotes, blogId, completeCallback) => {
  if(votes === 1 && lastUserVotes === 0) {
      upVoteBlog(blogId).catch(e => {console.error('Error in upvoting', e)});
  } else if(votes === 0 && lastUserVotes === 1) {
      downVoteBlog(blogId).catch(e => {console.error('Error in downvoting', e)});
  }
  completeCallback();
}, oneSecond);

function useVotes(blogId, userId) {
  const [votes, updateVotes] = useState(0);
  const [userVotes, updateUserVotes] = useState(null);
  const [lastUserVotes, updateLastUserVotes] = useState(null);
  const [updating, changeUpdating] = useState(false);
  const [canUserVote, updateCanUserVote] = useState(false);
  const prevVotes = usePrevious(userVotes);

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
    function handleBlogsVotes(votesData) {
        updateVotes(votesData.uniqueUpVotes);
    }

    function handleBlogVotesError(error) {
        console.error(error)
    }

    function handleUserBlogVotesError() {
        updateCanUserVote(false)
    }

    function handleMyVotes(myVotes) {
        updateLastUserVotes(() => myVotes.upVotes);
        updateUserVotes(() => myVotes.upVotes);
        updateCanUserVote(() => true);
      }

    getBlogVotes(blogId).then(handleBlogsVotes).catch(handleBlogVotesError);
    getMyVotes(blogId).then(handleMyVotes).catch(handleUserBlogVotesError);
  }, [blogId, userId]);

  useEffect(() => {
    const hasInitialUpdates = prevVotes == null || lastUserVotes == null;
    const hasInvalidUpdate = prevVotes === userVotes;
    const isValidVoteUpdate = !hasInitialUpdates && !hasInvalidUpdate
    if(isValidVoteUpdate) {
      changeUpdating(true);
      if(userVotes === 1) {
          updateVotes((totalVotes) => totalVotes + 1);
      } else if(userVotes === 0) {
          updateVotes((totalVotes) => totalVotes - 1);
      }

      saveUpdate(userVotes, lastUserVotes, blogId, () => {
        changeUpdating(false);
        updateLastUserVotes(() => userVotes);
      });
    }
  }, [userVotes, blogId, lastUserVotes, prevVotes]);

  return [votes, userVotes, canUserVote, updateUserVotes];
}

export default useVotes;
