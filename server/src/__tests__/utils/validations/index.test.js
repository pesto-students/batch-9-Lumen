import signIn from '../../../utils/validations/signIn';
import signUp from '../../../utils/validations/signUp';
import isEmpty from '../../../utils/validations/isEmpty';
import addErrorIfEmpty from '../../../utils/validations/addErrorIfEmpty';
import errorForProperties from '../../../utils/validations/errorForProperties';
import { addErrorIfNotString } from '../../../utils/validations/isString';

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
    const propertiesToCheck = [
      ['hello', [addErrorIfEmpty]],
      ['test', [addErrorIfEmpty]],
    ];
    const obj = { hello: 1, test: 1 };
    expect(errorForProperties(propertiesToCheck, obj).errors.test).toBe(undefined);
  });

  test('add error if field not present', () => {
    const propertiesToCheck = [
      ['hello', [addErrorIfEmpty, addErrorIfNotString]],
      ['test', [addErrorIfEmpty, addErrorIfNotString]],
    ];
    const obj = { hello: 1 };
    expect(errorForProperties(propertiesToCheck, obj).errors.test).toBe('test field is required');
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
      const onlyPasswordProperty = { password: 12232, username: 'sas' };
      const invalidProperties = { e: 1, b: 2 };
      expect(signUp(emptyUserProperties).isValid).toBe(false);
      expect(signUp(onlyEmailProperty).isValid).toBe(false);
      expect(signUp(onlyPasswordProperty).isValid).toBe(false);
      expect(signUp(onlyPasswordProperty).errors.password).toBe('12232 value is not valid password. Required type: string');
      expect(signUp(invalidProperties).isValid).toBe(false);
      expect(signUp(onlyEmailProperty).errors.email).toBe('test value is not valid email. Required type: email');
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
      expect(signUp(emptyUserProperties).errors.password).toBe('password field is required');
      expect(signUp(emptyUserProperties).errors.email).toBe('email field is required');
      expect(signUp(emptyUserProperties).errors.name).toBe('name field is required');
      expect(signUp(emptyUserProperties).errors.username).toBe('username field is required');
    });

    test('return empty object for valid sign-up user properties', () => {
      const userProperties = {
        email: 'test@yopmail.com', password: '12212', name: 'sas', username: 'sassa',
      };
      expect(signUp(userProperties).errors).toEqual({});
    });
  });
});
