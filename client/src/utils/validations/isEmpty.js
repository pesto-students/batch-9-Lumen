const isEmpty = value => {
  try {
    const hasNoValue = value === undefined || value === null;
    const isEmptyObject =
      typeof value === 'object' && Object.keys(value).length === 0;
    const isEmptyString =
      typeof value === 'string' && value.trim().length === 0;
    return hasNoValue || isEmptyObject || isEmptyString;
  } catch (e) {
    return true;
  }
};

export default isEmpty;
