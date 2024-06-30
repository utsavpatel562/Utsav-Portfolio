import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { MacbookScrollDemo } from "@/components/MacBookScroll";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FaRProject } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "#projects" },
            { name: "My Projects", link: "#projects", icon: <FaRProject /> },
            { name: "Services", link: "#" },
            { name: "Contact", link: "#" },
          ]}
        />
        <Hero />
        <Grid />
        <MacbookScrollDemo />
        <RecentProjects />
      </div>
    </main>
  );
}
