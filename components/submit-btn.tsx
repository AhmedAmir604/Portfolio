import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group dark:bg-[#ececed] bg-black dark:text-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 text-sm rounded-full outline-none dark:hover:bg-[#c7c7c7] hover:bg-gray-700 active:scale-105 transition w-fit mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <div className="h-4 w-4 rounded-full animate-spin border-2 border-current border-t-transparent"></div>
          Sending...
        </>
      ) : (
        <>
          Submit
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </>
      )}
    </button>
  );
}
