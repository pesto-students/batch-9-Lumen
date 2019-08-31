/* eslint-disable react/prop-types */
import React from 'react';
import * as copy from 'copy-to-clipboard';

import { Button, Popup } from '../common/helpers';
import constants from '../../constants/constants';

const ShareBlog = ({
  _id,
  privatePath,
  draftPath,
  isPrivate = false,
  published = false
}) => {
  const shareButton = <Button circular icon="share alternate square" color="grey" content="Share" />;

  const urlToShare = [];
  const draftUrl = `${constants.serverURL}/share/draft/${draftPath}/${_id}`;
  const privateUrl = `${constants.serverURL}/share/secured/${privatePath}/${_id}`;
  const publicUrl = `${constants.serverURL}/share/${_id}`;

  const hasDraftAndPrivatePath = draftPath && privatePath;
  if (hasDraftAndPrivatePath) {
    if (isPrivate && published) {
      urlToShare.push({ name: 'Share as Private blog', link: privateUrl });
    } else {
      urlToShare.push({ name: 'Share as Draft blog', link: draftUrl });
    }
  }
  if (!isPrivate && published) {
    urlToShare.push({ name: 'Share as Public blog', link: publicUrl });
  }

  const shareData = urlToShare.map(urlData => (
    <div>
      <h5>{urlData.name}</h5>
      <a href={urlData.link} target="blank">
        {urlData.link}
      </a>
      <Popup
        inverted
        trigger={
          <Button
            circular
            icon="copy"
            onClick={() => {
              copy(urlData.link);
            }}
          />
        }
        content="Copied"
        on="click"
        position="bottom left"
        basic
      />
    </div>
  ));
  return (
    <>
      {urlToShare.length > 0 && (
        <Popup trigger={shareButton} on="click" position="top right">
          {shareData}
        </Popup>
      )}
    </>
  );
};

export default ShareBlog;
