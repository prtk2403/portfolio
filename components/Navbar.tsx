'use client';
import { useState } from "react";
import CustomFontText from "@/app/_components/custom-font";
import githubdark from "@/public/logos/github-dark.png";
import twitterdark from "@/public/logos/twitter-logo-dark.png";
import linkedindark from "@/public/logos/linkedin-dark.png";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import { ModeToggle } from "./darkModeToggle";
import { Menu } from "lucide-react"; // Import the Menu icon

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '500', '600'],
  variable: '--font--jetbrains_mono',
});

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black/50 fixed backdrop-blur-md w-full flex justify-between items-center p-4 h-[4rem] z-50">
      <div className="flex items-center">
        <CustomFontText />
      </div>
      <div className="hidden md:flex items-center gap-4">
        <ModeToggle />
        <a href="https://github.com/prtk2403" target="_blank">
          <Image src={githubdark} alt="github logo" width={20} height={20} />
        </a>
        <a href="https://x.com/xyzprtk" target="_blank">
          <Image src={twitterdark} alt="twitter logo" width={15} height={15} />
        </a>
        <a href="https://linkedin.com/in/prtk2403" target="_blank">
          <Image src={linkedindark} alt="linkedin logo" width={20} height={20} />
        </a>
      </div>
      <button
        className="md:hidden flex items-center justify-center w-8 h-8 bg-black/50 rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="text-white w-6 h-6" /> {/* Use the Menu icon */}
      </button>
      {isMenuOpen && (
        <div className="absolute top-[4rem] left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 p-4 md:hidden">
          <ModeToggle />
          <a href="https://github.com/prtk2403" target="_blank">
            <Image src={githubdark} alt="github logo" width={20} height={20} />
          </a>
          <a href="https://x.com/xyzprtk" target="_blank">
            <Image src={twitterdark} alt="twitter logo" width={15} height={15} />
          </a>
          <a href="https://linkedin.com/in/prtk2403" target="_blank">
            <Image src={linkedindark} alt="linkedin logo" width={20} height={20} />
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;