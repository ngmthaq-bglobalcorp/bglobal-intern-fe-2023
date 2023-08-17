import { DateTime } from "luxon";

export class DatetimeHelper {
  public static getCurrentUTCMilliseconds() {
    return DateTime.now().toUTC().toMillis();
  }

  public static getDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
  };

  public static getShortDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("dd-MM-yyyy");
  };

  public static getLongDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("MMM dd, yyyy");
  };

  public static getFullDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("EEE, MMM dd, yyyy");
  };

  public static getHugeDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("EEEE, MMMM dd, yyyy");
  };

  public static getDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd HH:mm:ss");
  };

  public static getShortDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("dd/MM/yyyy, hh:mm a");
  };

  public static getLongDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("MMM dd, yyyy, hh:mm a");
  };

  public static getFullDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("EEE, MMM dd, yyyy 'at' hh:mm a");
  };

  public static getHugeDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("EEEE, MMMM dd, yyyy 'at' hh:mm:ss a");
  };

  public static getDateAndMonth = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("dd/MM");
  };

  public static getHourAndMinute = (time: string) => {
    const timeArray = time.split(":");
    return timeArray[0] + ":" + timeArray[1];
  };
}
