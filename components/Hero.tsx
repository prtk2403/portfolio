"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";


export function HeroHighlightComponent() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hi , I&apos;m Pratheek Nistala,a{" "}
        <Highlight className="text-black dark:text-white">
          Full Stack Developer.
        </Highlight>
      </motion.h1>
      <div className="flex justify-end m-5 p-2">
      <a href="https://drive.google.com/file/d/1J7GMV3WMUFNkpXbgerOdvgwaZeQVDVhP/view" target="_blank"><Button className="bg-purple-500 hover:bg-purple-600"> <MoveUpRight/>Resume</Button></a>
      </div>
    </HeroHighlight>
  );
}
