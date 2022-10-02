import { IPasswordProps, Password } from './index';

describe('Password generator', () => {
  test('should be able to generate a password', () => {
    const passwordInput: IPasswordProps = { password: 'Jatin123' };
    const newPassword = Password.create(passwordInput);
    expect(newPassword.password).toEqual(passwordInput.password);
  });

  test('password should have length between 5-15 characters', () => {
    const passwordInput: IPasswordProps = { password: 'Ja1' };

    const passwordOutput = () => {
      Password.create(passwordInput);
    };
    expect(passwordOutput).toThrow(RangeError);
  });

  test('password should contain at least 1 digit', () => {
    const passwordInput: IPasswordProps = { password: 'Jatin' };

    const passwordOutput = () => {
      Password.create(passwordInput);
    };
    expect(passwordOutput).toThrowError(
      'Password should contain at least 1 digit',
    );
  });

  test('password should contain at least 1 digit', () => {
    const passwordInput: IPasswordProps = { password: 'jatin1' };

    const passwordOutput = () => {
      Password.create(passwordInput);
    };
    expect(passwordOutput).toThrowError(
      'Password should contain at least 1 Uppercase letter',
    );
  });
});
