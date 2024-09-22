"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      className="w-1 h-16 my-24 bg-gray-200 rounded-full hidden sm:block dark:bg-white/20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.25,
      }}
    ></motion.div>
  );
}

export default SectionDivider;
