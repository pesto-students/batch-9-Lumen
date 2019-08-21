import getErrorsForProperties from './errorForProperties';

function validateBlogInput(blog) {
  const propertiesToCheck = [
    'title',
    'content',
  ];
  const isValidAndErrors = getErrorsForProperties(propertiesToCheck, blog);
  return isValidAndErrors;
}

export default validateBlogInput;
