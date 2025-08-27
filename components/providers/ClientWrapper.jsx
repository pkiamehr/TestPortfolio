"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@providers/ThemeProvider";
import Navbar from "@layout/Navbar";
import Header from "@layout/Header";
import About from "@sections/About";
import Services from "@sections/Services";
import Work from "@sections/Work";
import Contact from "@sections/Contact";
import Footer from "@layout/Footer";

export default function ClientWrapper({ lang, dict }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    window.dispatchEvent(new Event("scroll")); // برای تریگر انیمیشن‌ها
  }, [pathname]);
  return (
    <ThemeProvider>
      <Navbar lang={lang} dict={dict} />
      <Header dict={dict} lang={lang}/>
      <About dict={dict} />
      <Services dict={dict} />
      <Work dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} />
    </ThemeProvider>
  );
}
