import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Импортируем Хедер и Футер из папки components
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Премиальные Хозблоки",
  description: "Строительство хозблоков под ключ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}
        suppressHydrationWarning // <-- Добавьте это сюда
      >
        {/* 2. Вставляем Хедер наверх */}
        <Header />

        {/* Стили Bootstrap flex-grow-1 заставят прижать футер к низу, если контента мало */}
        <div className="flex-grow-1">{children}</div>

        {/* 3. Вставляем Футер вниз */}
        <Footer />
      </body>
    </html>
  );
}
