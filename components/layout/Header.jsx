"use client";

import { assets } from "@utils/assets";
import Image from "next/image";
import { motion } from "motion/react";

export default function Header({ dict ,lang }) {
  return (
    <div
      key={dict.header.title} // کلید برای رندر مجدد هنگام تغییر زبان
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
        <Image src={assets.profile_img} className="rounded-full w-40 " alt="kimehr" />
      </motion.div>
      <motion.h3 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        {dict.header.h3}
      </motion.h3>
      <motion.h1 initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        {dict.header.title}
      </motion.h1>
      {/* <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="max-w-2xl mx-auto font-Ovo">
        {dict.header.description}
      </motion.p> */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          href="#contact"
          className="px-10 py-2 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent  hover:-translate-y-1 duration-500  dark:hover:bg-darkHover"
        >
          {dict.header.btn1}
          <Image src={assets.right_arrow_white} className="w-4" alt="Arrow icon" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          href={lang === "fa" ? "pejman-kiamehr-resume-pe.pdf" : "Pejman-kiamehr-resume-en.pdf"}
          download
          className="px-10 py-2 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black  hover:-translate-y-1 duration-500  dark:hover:bg-darkHover"
        >
          {dict.header.btn2}
          <Image src={assets.download_icon} className="w-4" alt="Download icon" />
        </motion.a>
      </div>
    </div>
  );
}
