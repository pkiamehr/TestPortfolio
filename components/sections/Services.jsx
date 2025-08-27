"use client";

import { assets } from "@utils/assets";
import Image from "next/image";
import { motion } from "motion/react";

function Services({ dict }) {

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id="services" className=" w-full px-[12%] py-10 scroll-mt-18">
      <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className=" text-center mb-2 text-lg font-Ovo">
        {dict.services.h4}
      </motion.h4>
      <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className=" text-center text-5xl font-Ovo">
        {dict.services.title}
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        {dict.services.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10"
      >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" border border-gray-400 rounded-lg px-8 py-12
           hover:shadow-black cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <Image src={assets.web_icon} alt="service icon" className=" w-10" />
            <h3 className=" text-lg my-4 text-gray-700 dark:text-white">{dict.services.boxtitle1}</h3>
            <p className=" text-xs text-gray-600 leading-5 dark:text-white/80">{dict.services.boxdescription1}</p>
            {/* <a href="" className=" flex items-center gap-2 text-xs mt-5">
              {dict.services.boxbtn}
              <Image src={assets.right_arrow} alt="right arrow icon" className=" w-4" />{" "}
            </a> */}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" border border-gray-400 rounded-lg px-8 py-12
           hover:shadow-black cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <Image src={assets.mobile_icon} alt="service icon" className=" w-10" />
            <h3 className=" text-lg my-4 text-gray-700 dark:text-white">{dict.services.boxtitle2}</h3>
            <p className=" text-xs text-gray-600 leading-5 dark:text-white/80">{dict.services.boxdescription2}</p>
            {/* <a href="" className=" flex items-center gap-2 text-xs mt-5">
              {dict.services.boxbtn}
              <Image src={assets.right_arrow} alt="right arrow icon" className=" w-4" />{" "}
            </a> */}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" border border-gray-400 rounded-lg px-8 py-12
           hover:shadow-black cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <Image src={assets.ui_icon} alt="service icon" className=" w-10" />
            <h3 className=" text-lg my-4 text-gray-700 dark:text-white">{dict.services.boxtitle3}</h3>
            <p className=" text-xs text-gray-600 leading-5 dark:text-white/80">{dict.services.boxdescription3}</p>
            {/* <a href="" className=" flex items-center gap-2 text-xs mt-5">
              {dict.services.boxbtn}
              <Image src={assets.right_arrow} alt="right arrow icon" className=" w-4" />{" "}
            </a> */}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" border border-gray-400 rounded-lg px-8 py-12
           hover:shadow-black cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <Image src={assets.graphics_icon} alt="service icon" className=" w-10" />
            <h3 className=" text-lg my-4 text-gray-700 dark:text-white">{dict.services.boxtitle4}</h3>
            <p className=" text-xs text-gray-600 leading-5 dark:text-white/80">{dict.services.boxdescription4}</p>
            {/* <a href="" className=" flex items-center gap-2 text-xs mt-5">
              {dict.services.boxbtn}
              <Image src={assets.right_arrow} alt="right arrow icon" className=" w-4" />{" "}
            </a> */}
          </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
