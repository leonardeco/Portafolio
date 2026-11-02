export type Locale = "es" | "en";

export type Localized<T = string> = Record<Locale, T>;

export const locales: Locale[] = ["es", "en"];
