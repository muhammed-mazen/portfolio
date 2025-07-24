import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { getPortfolioConfig } from "@/config/portfolio.config"; // new dynamic config
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from "next/navigation";
import { routing } from '@/i18n/routing';
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-montserrat",
});


export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const config = getPortfolioConfig(params.locale);

  return {
    metadataBase: new URL(config.seo.url),
    title: {
      default: config.name,
      template: `%s - ${config.title}`,
    },
    description: config.description,
    keywords: config.seo.keywords,
    authors: config.seo.authors,
    creator: config.name,
    openGraph: {
      type: "website",
      locale: params.locale === "ar" ? "ar_AR" : "en_US",
      url: config.seo.url,
      title: config.name,
      description: config.description,
      images: [`${config.seo.url}/og-image.png`],
      siteName: config.name,
    },
    twitter: {
      card: "summary_large_image",
      title: config.name,
      description: config.description,
      images: [`${config.seo.url}/og-image.png`],
      creator: config.seo.twitterHandle,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${montserrat.variable} ${locale === 'ar' ? 'font-ar' : ''}`}>
        <main
          className={cn(
            "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20",
            "bg-[radial-gradient(circle,_rgb(96, 111, 248)_1px,_transparent_1px)] [background-size:20px_20px]"
          )}
        >
          <NextIntlClientProvider locale={locale}>
            <ThemeProvider attribute="class">
              <Navbar />
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
