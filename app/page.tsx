import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { CardHoverEffectDemo } from "@/components/HoverEffect";
import RecentProjects from "@/components/RecentProjects";
import { TabsDemo } from "@/components/TabsDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FaPhone, FaRProject, FaServicestack, FaUser } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaUser /> },
            { name: "My Projects", link: "#projects", icon: <FaRProject /> },
            { name: "Services", link: "#services", icon: <FaServicestack /> },
            { name: "Contact", link: "#", icon: <FaPhone /> },
          ]}
        />
        <Hero />
        <Grid />
        <TabsDemo />
        <RecentProjects />
        <CardHoverEffectDemo />
      </div>
    </main>
  );
}
