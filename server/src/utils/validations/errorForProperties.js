import isEmpty from './isEmpty';
import addErrorIfEmpty from './addErrorIfEmpty';

const getErrorsForProperties = (properties, object) => {
  const errors = properties.reduce((currentErrors, property) => addErrorIfEmpty(
    currentErrors,
    object,
    property,
  ), {});
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default getErrorsForProperties;
