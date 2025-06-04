"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { menuItems, navGlowVariants } from "./config";
import { DockItem } from "./DockItem";

export function DashboardDock() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-muted/20 
        backdrop-blur-md rounded-full p-1 shadow-lg border 
        border-border  transition-all text-muted-foreground
      hover:text-purple-400 hover-radial-purple  "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Dock"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isVisible ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 strokeWidth={1.5}" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="fixed bottom-0 z-40 mb-2 px-4 py-2 border border-gray-200/65 dark:border-stone-800 rounded-3xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg shadow-lg overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-radial from-transparent to-transparent rounded-3xl z-0 pointer-events-none"
              variants={navGlowVariants}
            />
            <ul className="flex items-center gap-4 relative z-10">
              {menuItems.map((item) => (
                <DockItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
