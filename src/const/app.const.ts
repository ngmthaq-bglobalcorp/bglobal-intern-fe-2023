export class AppConst {
  public static EVENTS = {
    internalError: "internalError",
  };

  public static ROLE = {
    auth: "AUTH",
    all: "ALL",
    guest: "GUEST",
    admin: "ROLE_ADMIN",
    organization: "ROLE_HR",
    seeker: "ROLE_SEEKER",
  };

  public static STATUS = {
    active: "ACTIVE",
    disabled: "DISABLE",
  };

  public static INTERACTION_TYPE = {
    like: "LIKE",
    dislike: "DISLIKE",
  };

  public static ORGANIZATION_TYPE = {
    typeB: "B",
    typeC: "C",
    typeE: "E",
  };

  public static NEWS_CATEGORY = {
    seminar: 1,
    briefing: 2,
    other: 3,
  };

  public static VIEW = {
    columnView: "column",
    listView: "list",
  };

  public static DEFAULT = {
    location: "_defautl",
    time: "_defautl",
  };
}
