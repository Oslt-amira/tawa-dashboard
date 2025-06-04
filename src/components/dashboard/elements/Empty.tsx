"use client";
import Image from "next/image";
import type * as React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

export const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <motion.div className="relative  ">
        <Image
          unoptimized
          src="/asleepbat.gif"
          alt="Empty"
          width={80}
          height={80}
          className="opacity-85"
        />
      </motion.div>
      <h2 className="text-xl text-muted-foreground font-normal my-2">
        This page is feeling kinda empty.
      </h2>
      <p className="text-muted-foreground font-extralight opacity-70 mb-6 max-w-md">
        Connect your GitHub repo to auto-generate slick READMEs and visualize
        your code like never before.
      </p>
      <Button
        size="lg"
        variant="ghost"
        className=" text-muted-foreground border-1 dark:border-stone-800  border-gray-200 hover:border-1 hover:border-purple-200/50 hover:bg-transparent items-center  justify-center gap-1 px-2 font-normal transition-colors duration-300 hover:text-purple-400 hover-radial-purple"
      >
        <Github className="mr-2 h-5 w-5" />
        Get Started
      </Button>
    </div>
  );
};
