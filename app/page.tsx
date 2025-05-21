import { HeroHighlightComponent } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroHighlightComponent/>
      <Skills/>
    </div>
  );
}
