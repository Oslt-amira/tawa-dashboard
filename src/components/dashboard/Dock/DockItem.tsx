"use client";

import { motion } from "framer-motion";
import React from "react";

interface DockItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function DockItem({ label, href, icon }: DockItemProps) {
  return (
    <motion.li
      className="relative group"
      initial={{ width: "2.5rem" }}
      whileHover={{ width: "auto" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <a
        href={href}
        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-colors  
          group-hover:border-purple-200/50 
          group-hover:text-purple-400 
          hover-radial-purple "
      >
        <span className="text-muted-foreground group-hover:text-purple-400">
          {icon}
        </span>
        <motion.span
          className="text-sm  group-hover:text-purple-400  text-muted-foreground whitespace-nowrap overflow-hidden"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </a>
    </motion.li>
  );
}
