import { DateTime } from "luxon";

export class DatetimeHelper {
  public static getCurrentUTCMilliseconds() {
    return DateTime.now().toUTC().toMillis();
  }

  public static getHourAndMinute = (time: string) => {
    const timeArray = time.split(":");
    return timeArray[0] + ":" + timeArray[1];
  };

  public static getLocalDate = (date: Date) => {
    return DateTime.fromJSDate(date).toFormat("dd-MM-yyyy");
  };
}
