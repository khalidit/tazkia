export type SupportedLocale = 'ar' | 'fr' | 'en';

export type MessageKeyValue = {
  [key in SupportedLocale]: Record<string, string>;
};
