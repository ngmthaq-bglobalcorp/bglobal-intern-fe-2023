import humps from "humps";
import { DatetimeHelper } from "./datetime.helper";
import { ValidateHelper } from "./validate.helper";

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

  public static getTime = (start: number = 0, end: number = 23, step: number = 30) => {
    const arrayHours: Array<string> = [];
    for (let i = start; i <= end; i++) {
      if (i <= 9) {
        arrayHours.push("0" + i + ":00");
        arrayHours.push("0" + i + ":" + step);
      } else {
        arrayHours.push(i + ":00");
        arrayHours.push(i + ":" + step);
      }
    }
    return arrayHours;
  };

  public static getValidUrl = (url: string) => {
    if (url) {
      return ValidateHelper.isValidUrl(url) ? url : "https://" + url;
    }
    return "";
  };

  public static getCountHour = (startTime: string, endTime: string) => {
    const startHour = startTime.split(":")[0];
    const startMinute = startTime.split(":")[1];
    const endHour = endTime.split(":")[0];
    const endMinute = endTime.split(":")[1];
    const start = parseInt(startHour) + parseInt(startMinute) / 60;
    const end = parseInt(endHour) + parseInt(endMinute) / 60;
    return end - start;
  };

  public static getSalary = (salary: number) => {
    let text = "";
    // text += "Salary: " + salary.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    text += "Salary: " + salary.toLocaleString("vi-VN") + " VND";
    return text;
  };

  public static getWorkingHours = (workingHours: any[]) => {
    let text = "";
    workingHours.forEach((value, index) => {
      text += `${DatetimeHelper.getHourAndMinute(value.startTime)}~${DatetimeHelper.getHourAndMinute(value.endTime)}`;
      if (value.isFullTime) {
        text += ` (fulltime)`;
      } else {
        text += ` (${value.countHours} hours)`;
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
