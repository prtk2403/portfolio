import { ModeToggle } from "@/components/darkModeToggle";
import { HeroHighlightComponent } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroHighlightComponent/>
      <Skills/>
    </div>
  );
}
