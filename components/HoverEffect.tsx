import { icons } from "@tabler/icons-react";
import { HoverEffect } from "./ui/card-hover-effect";
import { FaWebAwesome } from "react-icons/fa6";

export function CardHoverEffectDemo() {
  return (
    <>
      <h1 className="heading">
        My Services / <span className="text-purple">What I Do?</span>
      </h1>
      <div className="max-w-7xl mx-auto px-1" id="services">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Web Application Development",
    description:
      "I develop custom, scalable web applications tailored to your business, ensuring security and seamless user experiences.",
    link: "#",
    icons: <FaWebAwesome />,
  },
  {
    title: "Technical Support",
    description:
      "I provide reliable technical support, ensuring your systems run smoothly and efficiently.I resolve issues and offer expert guidance.",
    link: "#",
  },
  {
    title: "Database Management",
    description:
      "I specialize in code optimization, enhancing performance, efficiency, and maintainability. I ensures faster, more reliable applications.",
    link: "#",
  },
  {
    title: "Code Optimization",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "#",
  },
  {
    title: "Consultation Services",
    description:
      "Providing insights and solutions to optimize your projects.Ensuring efficient and high-quality code development.",
    link: "#",
  },
  {
    title: "Freelancer",
    description:
      "I offer freelance web development services, creating custom, scalable solutions to meet your business needs.",
    link: "#",
  },
];
