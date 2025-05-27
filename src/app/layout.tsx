import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Разработка сайтов | Parasat Dev",
  description:
    "Создаём продающие сайты под ключ: лендинги, интернет-магазины, корпоративные сайты. Дизайн, адаптив, SEO и интеграции.",
  keywords: [
    "разработка сайтов в Казахстане",
    "создание лендинга в Казахстане",
    "веб-студия Казахстан",
    "веб-дизайн Алматы",
    "создание интернет-магазинов в Алматы",
    "Parasat Dev",
    "сайт под ключ",
    "лендинг",
    "корпоративный сайт",
  ],
  authors: [{ name: "Parasat Dev", url: "https://parasat-dev.kz" }],
  creator: "Parasat Dev",
  openGraph: {
    title: "Разработка сайтов под ключ | Parasat Dev",
    description:
      "Продающие сайты для бизнеса: дизайн, верстка, SEO. Работаем на результат.",
    url: "https://parasat-dev.kz",
    siteName: "Parasat Dev",
    images: [
      {
        url: "https://parasat-dev.kz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parasat Dev — Разработка сайтов",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru_RU" className={poppins.className}>
      <body className="bg-[#1F1D2B]">{children}</body>
    </html>
  );
}
