import { IPasswordProps, Password } from './index';

describe('Password generator', () => {
  test('should be able to generate a password', () => {
    const passwordInput: IPasswordProps = { password: 'jatin' };
    const newPassword = Password.create(passwordInput);
    expect(newPassword.password).toEqual(passwordInput.password);
  });

  test('password should have length between 5-15 characters', () => {
    const passwordInput: IPasswordProps = { password: 'ja' };

    const passwordOutput = () => {
      Password.create(passwordInput);
    };
    expect(passwordOutput).toThrow(RangeError);
  });
});
