import "~/styles/globals.css";

import { type Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";

export const metadata: Metadata = {
  title: "Hi! | Paweł J. Wal",
  description: "Paweł J. Wal is a hacker, a builder, and a software engineer.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", url: "/favicon-16x16.png" },
  ],
  manifest: "/site.webmanifest",
};

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin", "latin-ext"],
  variable: "--font-atkinson",
  weight: ["400", "700"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-gray-200 dark:bg-slate-800 ${atkinson.variable}`}
    >
      <head>
        <link rel="preload" href="/face.png" as="image" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
