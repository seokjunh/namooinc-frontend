import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/rounting";

export const metadata: Metadata = {
  title: "나무아이앤씨",
  description:
    "스마트 팩토리, 통합 방재 솔루션, 가스 통합 모니터링, 공장자동화 솔루션, 인터페이스 미들웨어, lloT, loT, 사물인터넷.",
  icons: {
    icon: "/image/namoo-icon.png",
  },
};

const pretendard = localFont({
  src: "./font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "ko" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`&{pretendard.variable}`}>
      <body className={`${pretendard.className} flex min-h-screen flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
