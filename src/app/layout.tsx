import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Разработка сайтов в Алматы под ключ | Parasat Dev",
  description:
    "Создаём продающие сайты под ключ в Алматы и по всему Казахстану: интернет-магазины, лендинги, корпоративные сайты. SEO, дизайн, поддержка. Бесплатная консультация.",
  keywords: [
    "разработка сайтов в Алматы",
    "создание сайтов под ключ в Алматы",
    "веб-студия Алматы",
    "разработка сайтов в Казахстане",
    "заказать сайт под ключ в Алматы",
    "Parasat Dev",
    "сайт под ключ в Алматы",
    "создать лендинг в Алматы",
    "создать корпоративный сайт в Алматы",
    "создание интернет-магазинов в Алматы",
    "SEO-продвижение сайтов в Алматы",
  ],
  authors: [{ name: "Parasat Dev", url: "https://parasat-dev.kz" }],
  creator: "Parasat Dev",
  openGraph: {
    title: "Разработка сайтов в Алматы под ключ | Parasat Dev",
    description:
      "Создаём продающие сайты под ключ в Алматы и по всему Казахстану: интернет-магазины, лендинги, корпоративные сайты. SEO, дизайн, поддержка. Бесплатная консультация.",
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
