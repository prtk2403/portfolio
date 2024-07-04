"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Github } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Navbar from "./Navbar";

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
      <a href="https://github.com/prtk2403" target="_blank"><GitHubLogoIcon /></a>
    </HeroHighlight>
  );
}
