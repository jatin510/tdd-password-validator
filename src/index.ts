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

  public static create(props: IPasswordProps) {
    const { password } = props;

    const isValidLength = this.validateLength(password);
    if (!isValidLength) {
      throw new RangeError(`Password length should be between 5-15 length`);
    }

    const newPassword = new Password(props);
    return newPassword;
  }
}
