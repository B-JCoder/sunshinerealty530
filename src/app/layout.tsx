import "./globals.css";
import { DM_Sans } from "next/font/google";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import { AppContextProvider } from "../context-api/PropertyContext";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import ScrollToTop from "./components/scroll-to-top";
import SessionProviderComp from "./provider/SessionProviderComp";
import type { Metadata } from "next";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Project Title",
  description: "Your project description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${dmsans.className} antialiased`}>
          <AppContextProvider>
           
              <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
                <Aoscompo>
                  <Header />

                  {/* Clerk Auth Buttons */}
                  <div className="flex justify-end items-center p-4 gap-4 h-16">
                    <SignedOut>
                      <SignInButton />
                      <SignUpButton>
                        <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>

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
