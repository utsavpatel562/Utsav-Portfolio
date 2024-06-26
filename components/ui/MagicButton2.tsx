import React from "react";
import { FaDownload } from "react-icons/fa6";

const MagicButton2 = () => {
  return (
    <button className="flex mt-2 h-11 leading-10 animate-shimmer items-center justify-center rounded-full border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      Download my CV <FaDownload className="ml-2" />
    </button>
  );
};

export default MagicButton2;
