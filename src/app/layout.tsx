// app/layout.tsx
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import { AppContextProvider } from "../context-api/PropertyContext";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import ScrollToTop from "./components/scroll-to-top";
import type { Metadata } from "next";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Project Title",
  description: "Your project description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${dmsans.className} antialiased`}>
          <AppContextProvider>
            <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
              <Aoscompo>
                <Header />
                <NextTopLoader />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
