import { DateTime } from "luxon";

export class DatetimeHelper {
  public static getCurrentUTCMilliseconds() {
    return DateTime.now().toUTC().toMillis();
  }

  public static getShortDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("dd-MM-yyyy");
  };

  public static getLongDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("MMM dd, yyyy");
  };

  public static getFullDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("EEEE, MMMM dd, yyyy");
  };

  public static getShortDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("dd/MM/yyyy, hh:mm a");
  };

  public static getLongDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("MMM dd, yyyy, hh:mm a");
  };

  public static getFullDateTime = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("EEEE, MMMM dd, yyyy 'at' hh:mm a");
  };

  public static getHourAndMinute = (time: string) => {
    const timeArray = time.split(":");
    return timeArray[0] + ":" + timeArray[1];
  };
}
