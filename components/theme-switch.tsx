"use client";

import React from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { useThemeContextProvider } from "@/context-provider/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContextProvider();

  return (
    <button
      className="hidden sm:flex h-[3rem] w-[3rem] rounded-full fixed right-5 bottom-5 bg-white bg-opacity-80 border border-white border-opacity-40 backdrop-blur-[0.5rem] shadow-2xl flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
