"use client";

import React from "react";
import Heading from "@/components/heading";
import { motion } from "framer-motion";
import { useHooks } from "@/lib/hook";
import { SendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function ContactMe() {
  const customRef = useHooks(0.7, "Contact");

  return (
    <motion.section
      ref={customRef}
      id="contact"
      className="text-center mb-10 sm:mb-18 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Heading>Get in Touch</Heading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please Contact me directly on{" "}
        <a className="underline" href="mailto:ahmedaamir604@gmail.com">
          ahmedaamir604@gmail.com
        </a>{" "}
        or Through this form.
      </p>
      
      <form
        className="mt-8 flex flex-col dark:text-white"
        action={async (formData) => {
          const { error, data } = await SendEmail(formData);

          if (error) {
            toast.error(error);
          } else {
            toast.success("Email sent successfully!");
          }
        }}
      >
        <input
          required
          name="senderEmail"
          placeholder="Your Email Here"
          className="px-3 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 dark:outline-none transition-all"
          type="email"
        ></input>
        <textarea
          required
          name="message"
          placeholder="Message"
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 dark:outline-none transition-all"
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
