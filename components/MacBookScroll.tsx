import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-black-100 w-full">
      <MacbookScroll
        title={
          <h1 className="heading">
            Learn more <span className="text-purple">About me</span>
          </h1>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
