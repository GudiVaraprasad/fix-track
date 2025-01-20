import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Navbar from "./Navbar";



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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Navbar />
      </body>
    </html>
  );
}