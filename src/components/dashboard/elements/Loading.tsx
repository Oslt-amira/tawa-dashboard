"use client";
import Image from "next/image";
import type * as React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center">
      <motion.div className="relative">
        <Image src="/purplebat.gif" alt="Empty" width={50} height={50} unoptimized />
      </motion.div>
      <p className="text-muted-foreground my-2 max-w-md">Just a second..</p>
    </div>
  );
};
