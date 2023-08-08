import humps from "humps";
import { DatetimeHelper } from "./datetime.helper";

export class PrimitiveHelper {
  public static convertSnakeToCamel(data: string) {
    return humps.camelize(data);
  }

  public static convertCamelToSnake(data: string) {
    return humps.decamelize(data);
  }

  public static getRandomInRange = (from: any, to: any, fixed: any = 5) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  };

  public static convertHex2Rgba = (hex: string, opacity: number = 1): string => {
    if (opacity > 1) opacity = 1;
    let c: any = null;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");

      return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ", " + opacity + ")";
    }

    throw new Error("Cannot convert hex to rgb");
  };

  public static isValidEmail = (email: string) => {
    const expression: RegExp =
      /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    const result: boolean = expression.test(email);
    return result;
  };

  public static isValidPassword = (password: string) => {
    if (password.length < 8) {
      return false;
    }
    return true;
  };

  public static isValidPhoneNumber = (phone: string) => {
    const expression: RegExp = /^(0[2-9]|84[2-9]|\+84[2-9])(\d{8}|\d{9})$/;
    const result: boolean = expression.test(phone);
    return result;
  };

  public static getSalary = (salary: number) => {
    let text = "";
    text += "Salary: " + salary;
    return text;
  };

  public static getWorkingHours = (workingHours: any[]) => {
    let text = "";
    workingHours.forEach((value, index) => {
      text += `${DatetimeHelper.getHourAndMinute(value.startTime)}~${DatetimeHelper.getHourAndMinute(value.endTime)}`;
      if (value.isFullTime) {
        text += `(fulltime)`;
      } else {
        text += `(${value.countHours} hours)`;
      }
      if (index < workingHours.length - 1) {
        text += `, `;
      }
    });
    return text;
  };

  public static getPostPeriod = (opensAt: Date, expiresAt: Date) => {
    let text = "";
    text += "Post period: " + DatetimeHelper.getLongDate(opensAt) + " ~ " + DatetimeHelper.getLongDate(expiresAt);
    return text;
  };
}
