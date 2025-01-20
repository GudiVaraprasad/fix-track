import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Navbar from "./Navbar";
import { Theme } from '@radix-ui/themes';

const myFont = Ubuntu_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fix Tracker",
  description: "Production Issues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={myFont.className}>
        <Theme>
          <Navbar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}