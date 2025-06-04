"use client";

import { CalendarDays, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const views = ["Day", "Week", "Month", "Year"];

export const DateRangeSelector = () => {
  const [selectedView, setSelectedView] = useState("Month");
  const [selectedRange, setSelectedRange] = useState("28 Jan – 29 Jan 2023");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="flex
           items-center gap-2
hover:text-muted-foreground
            rounded-full mt-4 mb-8
          bg-muted            text-muted-foreground 
 px-4 py-6  
           shadow-inner 
            transition-colors"
        >
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-sm font-medium">{selectedRange}</span>
          </div>
          <motion.button
            className=" bg-white/80  items-center flex 
        backdrop-blur-md rounded-full p-1  border 
        border-border  transition-all text-muted-foreground
      hover:text-purple-400 hover-radial-purple  "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Dock"
          >
            <motion.div initial={{ rotate: 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-5 w-5 strokeWidth={1.5}" />
            </motion.div>
          </motion.button>{" "}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-44 p-2 rounded-lg shadow-md"></PopoverContent>
    </Popover>
  );
};
