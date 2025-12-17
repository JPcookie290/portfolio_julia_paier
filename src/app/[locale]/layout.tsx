import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { Suspense } from "react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  // Enables static rendering per locale where possible
  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense fallback={null}>
            <Nav />
          </Suspense>
          {children}
          <Footer />
        </NextIntlClientProvider>
  );
}
