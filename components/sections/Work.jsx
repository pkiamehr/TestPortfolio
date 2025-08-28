"use client";

import { assets } from "@utils/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@providers/ThemeProvider";
const Work = ({ dict }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 1 }} id="work" className=" w-full px-[12%] py-10 scroll-mt-18">
      <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className=" text-center mb-2 text-lg font-Ovo">
        {dict.work.h4}
      </motion.h4>
      <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className=" text-center text-5xl font-Ovo">
        {dict.work.title}
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className=" text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo">
        {dict.work.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] my-6 gap-5 dark:text-black"
      >
        <motion.div
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className='aspect-square  bg-[url("/images/project-1.png")] bg-no-repeat bg-center  bg-cover rounded-lg relative cursor-pointer group'
        >
          <div className=" bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className=" font-semibold">{dict.work.projecttitle1}</h2>
              <p className=" text-xs text-gray-700">{dict.work.projectdescription1}</p>
            </div>
            <div className=" border rounded-full border-black w-11 aspect-square flex items-center justify-center shadow:[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <Image src={assets.send_icon} alt="work send icon" className=" w-3" />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className='aspect-square  bg-[url("/images/project-2.png")] bg-no-repeat bg-center  bg-cover rounded-lg relative cursor-pointer group'
        >
          <div className=" bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className=" font-semibold">{dict.work.projecttitle2}</h2>
              <p className=" text-xs text-gray-700">{dict.work.projectdescription2}</p>
            </div>
            <a href="project1.kiamehr.dev" className=" border rounded-full border-black w-11 aspect-square flex items-center justify-center shadow:[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <Image src={assets.send_icon} alt="work send icon" className=" w-3" />
            </a>
          </div>
        </motion.div>
        <motion.div
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className='aspect-square  bg-[url("/images/project-3.png")] bg-no-repeat bg-center  bg-cover rounded-lg relative cursor-pointer group'
        >
          <div className=" bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className=" font-semibold">{dict.work.projecttitle3}</h2>
              <p className=" text-xs text-gray-700">{dict.work.projectdescription3}</p>
            </div>
            <div className=" border rounded-full border-black w-11 aspect-square flex items-center justify-center shadow:[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <Image src={assets.send_icon} alt="work send icon" className=" w-3" />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className='aspect-square  bg-[url("/images/project-4.png")] bg-no-repeat bg-center  bg-cover rounded-lg relative cursor-pointer group'
        >
          <div className=" bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className=" font-semibold">{dict.work.projecttitle4}</h2>
              <p className=" text-xs text-gray-700">{dict.work.projectdescription4}</p>
            </div>
            <div className=" border rounded-full border-black w-11 aspect-square flex items-center justify-center shadow:[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <Image src={assets.send_icon} alt="work send icon" className=" w-3" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        href=""
        className=" w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-15 hover:-translate-y-1 duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        {dict.work.btn} <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow icon" className=" w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
