"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export function BackgroundBoxesDemo() {
  return (
    <div
      className="h-96 relative w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center mb-20"
      id="contact"
    >
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn("text-4xl relative z-20 font-bold w-[90%] text-center")}
      >
        Ready to take <span className="text-purple">your</span> digital presence
        to the next level?
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Reach out to me today and let's discuss how I can help you achieve your
        goals.
      </p>
      <Link href="mailto:utsavpatel562@gmail.com">
        <button className="mt-9 relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Let's get me touch
          </span>
        </button>
      </Link>
      <div className="mt-5">
        <Link href="www.linkedin.com/in/utsav-patel-coder">
          <button className="bg-slate-800 no-underline group rounded-full cursor-pointer mr-3 relative shadow-2xl shadow-zinc-900 p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-black-100 py-0.5 px-4 ring-1 ring-white/10 ">
              <Image
                src="/linkedin1.png"
                alt="LinkedIn"
                width={46}
                height={46}
                className="p-2"
              />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </Link>
        <Link href="https://github.com/utsavpatel562">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-black-100 py-0.5 px-4 ring-1 ring-white/10 ">
              <Image
                src="/github.png"
                alt="GitHub"
                width={46}
                height={46}
                className="p-2"
              />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </Link>
      </div>
    </div>
  );
}
