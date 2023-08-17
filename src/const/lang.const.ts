export class LangConst {
  public static LOCALES: Locales = {
    en: { text: "English (US)", lng: "en", iso: "en-us" },
    ja: { text: "Japan", lng: "ja", iso: "ja" },
    vi: { text: "Vietnamese", lng: "vi", iso: "vi" },
  };

  public static DEFAULT_LOCALE: Locale = this.LOCALES.en;

  public static DEFAULT_NS: string = "common";
}

export type Locale = {
  text: string;
  lng: string;
  iso: string; // https://www.andiamo.co.uk/resources/iso-language-codes/
};

export type Locales = {
  en: Locale;
  ja: Locale;
  vi: Locale;
};
