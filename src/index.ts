export interface IPasswordProps {
  password: string;
}
export class Password {
  password: string;
  private constructor(props: IPasswordProps) {
    this.password = props.password;
  }

  public static validateLength(password: string): boolean {
    const passwordLength = password.length;
    if (passwordLength < 5 || passwordLength > 15) {
      return false;
    }
    return true;
  }

  public static validatePasswordContainsDigit(password: string): boolean {
    const pattern = new RegExp(/[0-9]/);
    return !!password.match(pattern);
  }

  public static validatePasswordContainsUppercaseLetter(password: string) {
    const pattern = new RegExp(/[A-Z]/);
    return !!password.match(pattern);
  }

  public static create(props: IPasswordProps) {
    const { password } = props;

    const isValidLength = this.validateLength(password);
    if (!isValidLength) {
      throw new RangeError(`Password length should be between 5-15 length`);
    }

    const isPasswordContainsDigit =
      this.validatePasswordContainsDigit(password);
    if (!isPasswordContainsDigit) {
      throw new Error('Password should contain at least 1 digit');
    }

    const isPasswordContainsUppercaseLetter =
      this.validatePasswordContainsUppercaseLetter(password);
    if (!isPasswordContainsUppercaseLetter) {
      throw new Error('Password should contain at least 1 Uppercase letter');
    }

    const newPassword = new Password(props);
    return newPassword;
  }
}
