import { createI18n } from "vue-i18n";
import { LangConst } from "../const/lang.const";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  legacy: false,
  locale: LangConst.DEFAULT_LOCALE.lng,
  fallbackLocale: LangConst.DEFAULT_LOCALE.lng,
  messages: messages,
});

export { i18n };
