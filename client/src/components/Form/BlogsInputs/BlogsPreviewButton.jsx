import React from 'react';
import propTypes from 'prop-types';

import PrimaryButton from '../../common/PrimaryButton';

const BlogsPreviewButton = ({redirectToView}) => (
    <PrimaryButton onClick={() => {redirectToView()}}>
        Preview
    </PrimaryButton>
)

BlogsPreviewButton.propTypes = {
    redirectToView: propTypes.func.isRequired,
}
export default BlogsPreviewButton;
