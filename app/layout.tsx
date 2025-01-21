import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Ubuntu_Sans } from "next/font/google";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });
const myFont = Ubuntu_Sans({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Fix Track",
  description: "Track, Fix and Maintain Production level issues/bugs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={myFont.className}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="teal" radius="large">
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
              {/* <ThemePanel /> */}
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
