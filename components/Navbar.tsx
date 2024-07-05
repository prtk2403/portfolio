import CustomFontText from "@/app/_components/custom-font";
import githubdark from "@/public/logos/github-dark.png";
import twitterdark from "@/public/logos/twitter-logo-dark.png";
import linkedindark from "@/public/logos/linkedin-dark.png";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image"
import { ModeToggle } from "./darkModeToggle";

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '500', '600'],
  variable: '--font--jetbrains_mono',
})
function Navbar() {
  return (
    <div className="bg-black flex justify-between items-center gap-3 p-4 h-[4rem]">
      <div className="flex justify-between items-center">
        <CustomFontText />
      </div>
      <div className="flex justify-between items-center gap-4">
        <ModeToggle/>
        <a href="https://github.com/prtk2403" target="_blank">
          <Image
            src={githubdark}
            alt="github logo"
            width={20}
            height={20}

          />
        </a>
        <a href="https://x.com/prtk2403" target="_blank">
          <Image
            src={twitterdark}
            alt="twitter logo"
            width={15}
            height={15}
          />
        </a>
        <a href="https://linkedin.com/in/prtk2403" target="_blank">
          <Image
            src={linkedindark}
            alt="linkedin logo"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  )
}

export default Navbar