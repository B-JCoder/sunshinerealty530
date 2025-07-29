"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Logo from "./logo";
import HeaderLink from "./navigation/HeaderLink";
import MobileHeaderLink from "./navigation/MobileHeaderLink";
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const { isSignedIn, user } = useUser();

  const [data, setData] = useState<any[]>([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && navbarOpen) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/layoutdata');
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        setData(json?.headerData || []);
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };
    fetchData();
  }, [pathUrl]);

  return (
    <header className={`fixed h-24 top-0 py-1 z-50 w-full transition-all ${sticky ? "shadow-lg dark:shadow-darkmd bg-white dark:bg-semidark" : "bg-transparent shadow-none"}`}>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4 py-6">
        <Logo />

        <nav className="hidden lg:flex flex-grow items-center justify-center space-x-6">
          {data.map((item: any, index: number) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
          >
            <svg viewBox="0 0 16 16" className={`hidden h-6 w-6 dark:block ${!sticky && pathUrl === "/" && "text-white"}`}>
              <path d="..." fill="#FFFFFF" />
            </svg>
            <svg viewBox="0 0 23 23" className={`h-8 w-8 text-dark dark:hidden ${!sticky && pathUrl === "/" && "text-white"}`}>
              <path d="..." />
            </svg>
          </button>

          {isSignedIn ? (
            <>
              <div className="relative group flex items-center justify-center">
                <Image
                  src={user?.imageUrl || "/images/avatar/avatar_1.jpg"}
                  alt="avatar"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <p className="absolute text-sm font-medium text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-primary text-white py-1 px-2 min-w-28 rounded-lg shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3">
                  {user?.fullName || user?.username}
                </p>
              </div>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <SignInButton>
                <button className="hidden lg:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-secondary hover:text-white">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="hidden lg:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          )}

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 z-50 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text dark:text-white">Menu</h2>
          <button onClick={() => setNavbarOpen(false)} aria-label="Close mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="dark:text-white">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-start p-4">
          {data.map((item: any, index: number) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-4 flex flex-col space-y-4 w-full">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <button className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-secondary hover:text-white w-full">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary w-full">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
