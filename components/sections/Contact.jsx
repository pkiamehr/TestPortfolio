"use client";

import { assets } from "@utils/assets.js";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const Contact = ({ dict }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data?.success) {
      setResult("Success");
      event.target.reset();
      toast.success("Success");
    } else {
      setResult(data.message);
      toast.error("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className=' w-full px-[12%] py-6 scroll-mt-17 bg-[url("/images/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className=" text-center mb-2 text-lg font-Ovo">
        {dict.contact.h4}
      </motion.h4>
      <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className=" text-center text-5xl font-Ovo">
        {dict.contact.title}
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className=" text-center max-w-2xl mx-auto mt-4 mb-8 font-Ovo">
        {dict.contact.description}
      </motion.p>
      <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} onSubmit={onSubmit} className=" max-w-2xl mx-auto">
        <div className="grid grid-template-columns:repeat(auto-fit,minmax(200px,1fr)) gap-6 mt-8 mb-7">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            type="text"
            placeholder={dict.contact.placeholder1}
            required
            className=" flex-1 p-3 outline-hidden border-[0.5px] valid:border-green-500  border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 "
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            type="email"
            placeholder={dict.contact.placeholder2}
            required
            className=" flex-1 p-3 outline-hidden border-[0.5px] valid:border-green-500  border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90 "
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          rows="6"
          placeholder={dict.contact.placeholder3}
          required
          className=" w-full p-4 outline-hidden border-[0.5px] valid:border-green-500 border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90 "
          name="message"
        ></motion.textarea>
        <motion.button
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          disabled={result === "Sending...."}
          type="submit"
          className=" cursor-pointer py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] hover:-translate-y-1 duration-500 dark:hover:bg-darkHover"
        >
          {result === "Sending...." ? (
            <>
              {/* ✅ اینجا لودر کوچیک روی خود دکمه */}
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {dict.contact.btn}
            </>
          ) : (
            <>
              <span>{dict.contact.btn}</span>
              <Image src={assets.right_arrow_white} alt="arrow" className="w-4" width={16} height={16} />
            </>
          )}
        </motion.button>
        <p className=" mt-3">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
