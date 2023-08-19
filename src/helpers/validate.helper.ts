export class ValidateHelper {
  public static isValidEmail = (email: string) => {
    const expression: RegExp =
      /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    const result: boolean = expression.test(email);
    return result;
  };

  public static isValidPassword = (password: string) => {
    const expression: RegExp =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;
    const result: boolean = expression.test(password);
    return result;
  };

  public static isValidPhoneNumber = (phone: string) => {
    const expression: RegExp = /^((0[2-9]|84[2-9]|\+84[2-9])(\d{8}|\d{9})|1[8-9]00\d{4})$/;
    const result: boolean = expression.test(phone);
    return result;
  };

  public static isValidUrl = (url: string) => {
    const expression: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    const result: boolean = expression.test(url);
    return result;
  };

  public static isValidCountHours = (hour: number) => {
    if (hour >= 0 && hour <= 24) {
      return true;
    }
    return false;
  };

  public static checkValidPassword = (password: string) => {
    let result = [];
    if (password.length == 0) {
      result.push(`message.passwordNotBlank`);
    }
    if (password.length < 8) {
      result.push(`app.requirements.minLength`);
    }
    let expression: RegExp = /[A-Z]/;
    if (!expression.test(password)) {
      result.push(`app.requirements.haveUppercase`);
    }
    expression = /[0-9]/;
    if (!expression.test(password)) {
      result.push(`app.requirements.haveDigit`);
    }
    expression = /[!@#$%^&*(),.?":{}|<>]/;
    if (!expression.test(password)) {
      result.push(`app.requirements.haveSpecial`);
    }
    return result;
  };
}
