"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context-provider/active-section";
import { IoIosArrowDown } from "react-icons/io";
import { BsSun, BsMoon } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useThemeContextProvider } from "@/context-provider/theme-context";

const Header = () => {
  const {
    activeSelection,
    setActiveSelection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  const { theme, toggleTheme } = useThemeContextProvider();
  const [menu, setMenue] = useState<boolean>();

  return (
    <header className="relative z-10">
      {/* Desktop Menu */}
      <div className="sm:inline hidden">
        <motion.div
          className="fixed top-0 sm:top-10 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-100 dark:border-none bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-sm sm:h-[3rem] sm:w-[36rem] sm:rounded-full dark:bg-[#1e1e1f] dark:border-black/40 dark:bg-opacity-70"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
        <nav
          className=" flex fixed top-[-6.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
      sm:top-[-3.3rem] sm:h-[initial] sm:py-0 "
        >
          <ul className="flex flex-wrap w-[22rem] justify-center align-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 100, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-100",
                    {
                      "text-gray-950 dark:text-gray-200":
                        activeSelection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSelection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {activeSelection === link.name && (
                    <motion.span
                      className="bg-gray-200 absolute inset-0 rounded-full -z-10 dark:bg-[#27272a]"
                      layoutId="activeSelection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button & Theme Toggle */}
      <div
        className={` fixed top-10 right-1/2 left-1/2 sm:hidden mx-auto visible flex gap-3 items-center justify-center z-10 ${
          menu && "hidden"
        }`}
      >
        <div
          onClick={() => setMenue(true)}
          className="cursor-pointer text-[15px] text-gray-800 dark:text-gray-100 hover:dark:bg-[#414145] h-fit w-fit dark:bg-[#27272a] bg-gray-100 flex gap-2 items-center px-9 py-3 rounded-full"
        >
          <p>Menu</p>
          <IoIosArrowDown />
        </div>
        <button
          className="px-4 py-4 rounded-full dark:bg-[#27272a] hover:dark:bg-[#414145] bg-gray-100 shadow-2xl transition-all"
          onClick={toggleTheme}
        >
          {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`p-5 z-30 bg-black/70 fixed top-0 pt-10 w-full h-full backdrop-blur-md transition-transform duration-100 ease-in-out ${
          menu
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-6 py-8 border border-gray-800 rounded-md dark:bg-[#09090b] bg-[#FFFFFF] ">
          <div className="w-full flex justify-between">
            <h1 className="dark:text-gray-400 text-gray-500 mb-6 font-semibold">
              Navigation
            </h1>
            <IoCloseOutline
              onClick={() => setMenue(false)}
              className="text-gray-400 text-2xl active:border-[2px] active:border-gray-500 active:rounded-lg"
            />
          </div>
          <ul>
            {links.map((link) => (
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSelection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMenue(false);
                }}
                key={link.hash}
                className="dark:text-gray-400 text-gray-500 text-[14px] font-semibold"
              >
                <span>{link.name}</span>
                <div
                  className={`${
                    link.name === "Contact" ? "hidden" : ""
                  } w-full h-[1px] dark:bg-gray-800 bg-gray-200 my-2`}
                ></div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
