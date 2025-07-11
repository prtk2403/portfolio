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
          Data Analyst.
        </Highlight>
      </motion.h1>
      <div className="flex justify-center md:justify-end m-5 p-2">
        <a
          href="https://drive.google.com/file/d/1SSqZcVf_x6GDhgVkVdJ7w2vkRbbn1dgw/view?usp=sharing"
          target="_blank"
        >
          <Button className="bg-purple-500 hover:bg-purple-600 text-center font-semibold text-md gap-1">
            Resume <MoveUpRight className="h-5 w-5 gap-2" />
          </Button>
        </a>
      </div>
    </HeroHighlight>
  );
}
