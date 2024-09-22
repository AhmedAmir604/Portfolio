"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

type Theme = "light" | "dark";
interface props {
  children: React.ReactNode;
}
interface themeContextProviderType {
  theme: Theme;
  toggleTheme: () => void;
}

const themeContext = createContext<themeContextProviderType | null>(null);

export default function ThemeContextProvider({ children }: props) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      localTheme === "dark" && document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <themeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export const useThemeContextProvider = () => {
  const context = useContext(themeContext);
  if (context == null) {
    throw new Error("Cannot create theme context");
  }
  return context;
};
