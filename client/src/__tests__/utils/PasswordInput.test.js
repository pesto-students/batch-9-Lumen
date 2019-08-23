const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/;

describe('Password input', () => {
  it('should not accept empty string', () => {
    const password = '';
    expect(passwordPattern.test(password)).toBe(false);
  });
  it('should not accept string length less than 8', () => {
    const password = 'abcdefg';
    expect(passwordPattern.test(password)).toBe(false);
  });
  it('should not accept string with no special character', () => {
    const password = 'Password123';
    expect(passwordPattern.test(password)).toBe(false);
  });
  it('should not accept string with no lower case character', () => {
    const password = 'PASSWORD@123';
    expect(passwordPattern.test(password)).toBe(false);
  });
  it('should not accept string with no upper case character', () => {
    const password = 'password@123';
    expect(passwordPattern.test(password)).toBe(false);
  });
  it('should not accept string with no number', () => {
    const password = 'Password@abc';
    expect(passwordPattern.test(password)).toBe(false);
  });
  it('should have at least one small letter, capital letter, number and special character', () => {
    const password = 'Password@123';
    expect(passwordPattern.test(password)).toBe(true);
  });
});
