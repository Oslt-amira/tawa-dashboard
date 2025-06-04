"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const shouldExpand = isFocused || hasText;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFocused(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex justify-center">
      <AnimatePresence>
        {shouldExpand && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }} // slower and smoother
            className="fixed inset-0 z-30 backdrop-blur-sm bg-black/25"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ width: 250, zIndex: 10, scale: 1 }}
        animate={{
          width: shouldExpand ? "100vw" : "35vw",
          maxWidth: shouldExpand ? 350 : 250,
          zIndex: shouldExpand ? 40 : 10,
          scale: shouldExpand ? 1.015 : 1,
        }}
        whileHover={{ width: "80vw", maxWidth: 320 }}
        transition={{
          width: { duration: 0.5, ease: "easeInOut" },
          scale: { duration: 0.4, ease: "easeInOut" },
          zIndex: { duration: 0 },
        }}
        className="flex relative 
          left-0 sm:left-10 
          items-center 
          border border-transparent 
          hover:border-1 
          hover:border-purple-200/50 
          hover:text-purple-400 
          hover-radial-purple 
          rounded-full 
          bg-muted 
          px-4 py-2 
          text-muted-foreground 
          shadow-inner 
          max-w-xs sm:max-w-[350px] 
          hover:rounded-full 
          overflow-hidden 
    
          z-40
          w-[35vw] sm:w-[250px]"
      >
        <Search className="h-4 w-4 mr-2 opacity-60" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search data"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setHasText(e.target.value.length > 0)}
          className="bg-transparent focus:outline-none text-sm placeholder:text-muted-foreground w-full"
        />
      </motion.div>
    </div>
  );
}
