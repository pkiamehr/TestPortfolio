"use client";

import { assets } from "@utils/assets";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "@providers/ThemeProvider";

function Navbar({ lang, dict }) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // Theme
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Menu

  const openMenu= () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  // Scroll

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (scrollY > 50) {
  //       setIsScroll(true);
  //     } else {
  //       setIsScroll(false);
  //     }
  //   });
  // }, []);
  useEffect(() => {
  const onScroll = () => {
    if (scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);
  return (
    <>
      <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Header Background Image" className=" w-full" priority />
      </div>

      <nav
        className={` w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 ${
          isScroll ? " bg-white/50   shadow-xs dark:bg-darkTheme/50 backdrop-blur-md dark:shadow-gray-100" : ""
        }`}
      >
        <a href="#top" className=" outline-0">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Website Logo" className=" w-30 mr-10 cursor-pointer" />
        </a>

        <ul className={` hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white/50 dark:border dark:border-white dark:bg-transparent shadow-xs"} `}>
          <li >
            <a href="#top" className=" font-Ovo hover:text-gray-500">
              {dict.navbar.link1}
            </a>
          </li>
          <li>
            <a href="#about" className=" font-Ovo hover:text-gray-500">
              {dict.navbar.link2}
            </a>
          </li>
          <li>
            <a href="#services" className=" font-Ovo hover:text-gray-500">
              {dict.navbar.link3}
            </a>
          </li>
          <li>
            <a href="#work" className=" font-Ovo hover:text-gray-500">
              {dict.navbar.link4}
            </a>
          </li>
          <li>
            <a href="#contact" className=" font-Ovo hover:text-gray-500">
              {dict.navbar.link5}
            </a>
          </li>
        </ul>
        <div className=" flex items-center gap-4">
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-2 hover:text-gray-500 hover:cursor-pointer">
              <span>{dict.languageselect.language}</span>
              <Image src={lang === "fa" ? assets.ir : assets.us} alt={lang === "fa" ? "Iran Flag" : "UK Flag"} className="w-6 h-4" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-38 bg-white rounded-md shadow-lg z-10">
                <Link href="/en" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setIsOpen(false)}  scroll={false}>
                  <Image src={assets.us} alt="UK Flag" className="w-6 h-4 mr-2" height={16} width={24} />
                  English
                </Link>
                <Link href="/fa" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setIsOpen(false)}  scroll={false}>
                  <Image src={assets.ir} alt="Iran Flag" className="w-6 h-4 mr-2" width={24} height={16} />
                  فارسی
                </Link>
              </div>
            )}
          </div>
          <button onClick={() => setIsDarkMode((prev) => !prev)} className="">
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Theme Icon" className=" w-6 cursor-pointer" />
          </button>
          <a href="#contact" className=" hidden lg:flex gap-3 items-center px-6 py-2 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white dark:hover:bg-darkHover hover:border-darkTheme">
            {dict.navbar.contact} <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Contact Arrow Icon" className="w-3" />
          </a>
          <button className=" block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu Toggle Icon" className=" w-6 cursor-pointer" />
          </button>
        </div>

        {/* mobile menu  */}

        <ul
          ref={sideMenuRef}
          className=" flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className=" absolute right-6 top-6" onClick={closeMenu}>
            <Image alt="Close Menu Icon" src={isDarkMode ? assets.close_white : assets.close_black} className=" w-5 cursor-pointer" />
          </div>
          <li>
            <a href="#top" className=" font-Ovo" onClick={closeMenu}>
              {dict.navbar.link1}
            </a>
          </li>
          <li>
            <a href="#about" className=" font-Ovo" onClick={closeMenu}>
              {dict.navbar.link2}
            </a>
          </li>
          <li>
            <a href="#services" className=" font-Ovo" onClick={closeMenu}>
              {dict.navbar.link3}
            </a>
          </li>
          <li>
            <a href="#work" className=" font-Ovo" onClick={closeMenu}>
              {dict.navbar.link4}
            </a>
          </li>
          <li>
            <a href="#contact" className=" font-Ovo" onClick={closeMenu}>
              {dict.navbar.link5}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
