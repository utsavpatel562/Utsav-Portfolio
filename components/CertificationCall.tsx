"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "SQL Advanced HackerRank",
    description:
      "I have earned the SQL Advanced Certification from HackerRank, showcasing my ability to handle complex queries, optimize database performance, and manage large datasets effectively. This certification highlights my advanced skills in SQL and my commitment to continuous learning in database management.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/hackerrank.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Google Analytics 360",
    description:
      "I have earned the Google Analytics 360 Certification from Google, showcasing my ability to analyze and optimize digital marketing campaigns. This certification highlights my skills in using advanced tracking, creating custom reports, and leveraging data-driven insights to enhance website performance and marketing ROI.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/googleAnalytics.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Google Analytics Certification"
        />
      </div>
    ),
  },
  {
    title: "MongoDB for SQL Experts",
    description:
      "I have earned the MongoDB for SQL Experts Certification, demonstrating my ability to transition from SQL to MongoDB efficiently. This certification highlights my skills in designing and managing NoSQL databases, understanding document-based data models, and leveraging MongoDB's powerful features to optimize database performance and scalability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/mongodb.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Google Analytics Certification"
        />
      </div>
    ),
  },
  {
    title: "Entrepreneurship Foundations",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/linkedin.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Google Analytics Certification"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <h1 className="heading mb-16">
        My <span className="text-purple">Certifications</span>
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
