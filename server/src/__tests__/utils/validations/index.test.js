import signIn from '../../../utils/validations/signIn';
import signUp from '../../../utils/validations/signUp';
import isEmpty from '../../../utils/validations/isEmpty';
import addErrorIfEmpty from '../../../utils/validations/addErrorIfEmpty';
import errorForProperties from '../../../utils/validations/errorForProperties';

describe('isEmpty', () => {
  test('return true for empty objects/strings/object with no values', () => {
    const isEmptyObject = isEmpty();
    const isEmptyString = isEmpty('');
    const isObjectWithNoValues = isEmpty({});
    expect(isEmptyObject).toBe(true);
    expect(isEmptyString).toBe(true);
    expect(isObjectWithNoValues).toBe(true);
  });

  test('return false for non-empty objects/strings', () => {
    const isEmptyObject = isEmpty({ test: 's' });
    const isEmptyString = isEmpty('ss');
    expect(isEmptyObject).toBe(false);
    expect(isEmptyString).toBe(false);
  });
});

describe('addErrorIfEmpty', () => {
  test('add error if field not present', () => {
    const obj = { test: 1 };
    const errors = {};
    expect(addErrorIfEmpty(errors, obj, 'notHere').notHere).toBe('notHere field is required');
  });

  test('does not add error if field present', () => {
    const obj = { test: 1 };
    const errors = {};
    expect(addErrorIfEmpty(errors, obj, 'test').test).toBe(undefined);
  });
});

describe('errorForProperties', () => {
  test('does not add errors for fields present', () => {
    const properties = ['hello', 'test'];
    const obj = { hello: 1, test: 1 };
    expect(errorForProperties(properties, obj).errors.test).toBe(undefined);
  });

  test('add error if field not present', () => {
    const properties = ['hello', 'test'];
    const obj = { hello: 1 };
    expect(errorForProperties(properties, obj).errors.test).toBe('test field is required');
  });
});
describe('signIn', () => {
  describe('isValid', () => {
    test('return false for invalid sign-in user properties', () => {
      const emptyUserProperties = {};
      const onlyEmailProperty = { email: 'test' };
      const onlyPasswordProperty = { password: 'dsasdas' };
      const invalidProperties = { e: 1, b: 2 };
      expect(signIn(emptyUserProperties).isValid).toBe(false);
      expect(signIn(onlyEmailProperty).isValid).toBe(false);
      expect(signIn(onlyPasswordProperty).isValid).toBe(false);
      expect(signIn(invalidProperties).isValid).toBe(false);
    });

    test('return true for valid sign-in user properties', () => {
      const userProperties = { email: 'test@yopmail.com', password: '12212' };
      expect(signIn(userProperties).isValid).toBe(true);
    });
  });

  describe('errors', () => {
    test('return object for invalid sign-in user properties', () => {
      const emptyUserProperties = {};
      expect(signIn(emptyUserProperties).errors.password).toBe('password field is required');
      expect(signIn(emptyUserProperties).errors.email).toBe('email field is required');
    });

    test('return empty object for valid sign-in user properties', () => {
      const userProperties = { email: 'test@yopmail.com', password: '12212' };
      expect(signIn(userProperties).errors).toEqual({});
    });
  });
});

describe('signUp', () => {
  describe('isValid', () => {
    test('return false for invalid sign-up user properties', () => {
      const emptyUserProperties = {};
      const onlyEmailProperty = { email: 'test' };
      const onlyPasswordProperty = { password: 'dsasdas', username: 'sas' };
      const invalidProperties = { e: 1, b: 2 };
      expect(signUp(emptyUserProperties).isValid).toBe(false);
      expect(signUp(onlyEmailProperty).isValid).toBe(false);
      expect(signUp(onlyPasswordProperty).isValid).toBe(false);
      expect(signUp(invalidProperties).isValid).toBe(false);
    });

    test('return true for valid sign-up user properties', () => {
      const userProperties = {
        email: 'test@yopmail.com', password: '12212', name: 'sas', username: 'sassa',
      };
      expect(signUp(userProperties).isValid).toBe(true);
    });
  });

  describe('errors', () => {
    test('return object for invalid sign-up user properties', () => {
      const emptyUserProperties = {};
      expect(signUp(emptyUserProperties).errors.password).toBe('Password field is required');
      expect(signUp(emptyUserProperties).errors.email).toBe('Email field is required');
      expect(signUp(emptyUserProperties).errors.name).toBe('Name field is required');
      expect(signUp(emptyUserProperties).errors.username).toBe('Username field is required');
    });

    test('return empty object for valid sign-up user properties', () => {
      const userProperties = {
        email: 'test@yopmail.com', password: '12212', name: 'sas', username: 'sassa',
      };
      expect(signUp(userProperties).errors).toEqual({});
    });
  });
});
