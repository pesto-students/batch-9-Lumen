const addErrorIfNotValid = (validateFn, type) => (errorObj, object, key) => {
  if (!validateFn(object[key])) {
    Object.assign(errorObj, { [key]: `${object[key]} value is not valid ${key}. Required type: ${type}` });
  }
  return errorObj;
};

export default addErrorIfNotValid;
