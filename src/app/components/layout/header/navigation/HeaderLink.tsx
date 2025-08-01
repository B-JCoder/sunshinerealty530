"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/layout/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className={`${item.submenu ? "relative" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className={`text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary ${path === item.href ? '!text-primary' : ' text-black dark:text-white '} ${path.startsWith(`/${item.label.toLowerCase()}`) ? "!text-primary " : null}`}>
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div className={`absolute py-2 top-9 left-0 mt-0.5 w-60 bg-white dark:bg-darkmode shadow-lg dark:shadow-darkmd rounded-lg `} data-aos="fade-up" data-aos-duration="300">
          {item.submenu?.map((subItem, index) => (
            <Link key={index} href={subItem.href} className={`block px-4 py-2  ${path === subItem.href ? 'text-white bg-primary hover:bg-blue-700' : ' text-midnight_text dark:text-white hover:bg-section dark:hover:bg-semidark'}`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )
      }
    </div >
  );
};

export default HeaderLink;           