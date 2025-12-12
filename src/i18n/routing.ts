export const routing = {
    locales: ["en", "de", "it"],
    defaultLocale: "en",
} as const;

export type Locale = (typeof routing.locales)[number];

export function isLocale(locale: string): locale is Locale {
    return routing.locales.includes(locale as Locale);
}