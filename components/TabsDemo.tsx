"use client";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "About Me",
      value: "product",
      content: (
        <div
          id="about"
          className="w-full overflow-hidden bg-pink-100 relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
          style={{
            boxShadow: "0px 0px 17px 1px #7EC5FF",
          }}
        >
          <p className="mb-8">About Me</p>
          <img src="/about.png" alt="myImg1" className=" m-auto rounded-2xl" />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "teach stack",
      content: (
        <div
          className="w-full overflow-hidden bg-pink-100 relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
          style={{
            boxShadow: "0px 0px 17px 1px #7EC5FF",
          }}
        >
          <p className="mb-8">Tech Stack</p>
          <img
            src="/my_tech_stack.png"
            alt="myImg2"
            className="w-[110%] m-auto rounded-2xl"
          />
        </div>
      ),
    },
    {
      title: "GitHub Stats",
      value: "github stats",
      content: (
        <div
          className="w-full overflow-hidden bg-pink-100 relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
          style={{
            boxShadow: "0px 0px 17px 1px #7EC5FF",
          }}
        >
          <p className="mb-8">GitHub Stats</p>
          <img
            src="/github_stats.png"
            alt="myImg3"
            className="w-[90%] m-auto rounded-2xl"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
