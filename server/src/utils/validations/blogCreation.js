import getErrorsForProperties from './errorForProperties';
import addErrorIfEmpty from './addErrorIfEmpty';

function validateBlogInput(blog) {
  const propertiesToCheck = [
    ['title', [addErrorIfEmpty]],
    ['content', [addErrorIfEmpty]]
  ];
  const isValidAndErrors = getErrorsForProperties(propertiesToCheck, blog);
  return isValidAndErrors;
}

export default validateBlogInput;
