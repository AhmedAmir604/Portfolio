import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="w-fit mx-auto">
      {pending ? (
        <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-white"></div>
      ) : (
        <Link
          href="#contact"
          className="group dark:bg-[#ececed] bg-black dark:text-gray-900 text-white px-7 py-3 flex item-center gap-2 text-sm rounded-full
          outline-none  dark:hover:bg-[#c7c7c7] hover:bg-gray-700 active-scale-105 transition"
        >
          Submit
          <BsArrowRight className="mt-1 opacity-70 group-hover:translate-x-1 transition " />
        </Link>
      )}
    </button>
  );
}
