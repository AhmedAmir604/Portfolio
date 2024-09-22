"use client";

import React, { useState, createContext, useContext } from "react";
import { sectionName } from "@/lib/types";

interface props {
  children: React.ReactNode;
}

interface ActiveSectionContextType {
  activeSelection: sectionName;
  setActiveSelection: React.Dispatch<React.SetStateAction<sectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

function ActiveSectionContextProvider({ children }: props) {
  const [activeSelection, setActiveSelection] = useState<sectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSelection,
        setActiveSelection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("Use active section Error :(");
  }
  return context;
};
