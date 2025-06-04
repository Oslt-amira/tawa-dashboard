"use client";

import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  format,
  addDays,
  subDays,
  addMonths,
  subMonths,
  addYears,
  subYears,
} from "date-fns";

const views = ["Day", "Week", "Month", "Year"] as const;

type View = (typeof views)[number];

export const DateRangeSelector = () => {
  const [selectedView, setSelectedView] = useState<View>("Week");
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatRange = () => {
    switch (selectedView) {
      case "Day":
        return format(currentDate, "d MMM yyyy");
      case "Week":
        const startOfWeek = subDays(currentDate, currentDate.getDay());
        const endOfWeek = addDays(startOfWeek, 6);
        return `${format(startOfWeek, "d MMM")} – ${format(
          endOfWeek,
          "d MMM yyyy"
        )}`;
      case "Month":
        return format(currentDate, "MMMM yyyy");
      case "Year":
        return format(currentDate, "yyyy");
      default:
        return "";
    }
  };

  const goPrevious = () => {
    switch (selectedView) {
      case "Day":
        setCurrentDate(subDays(currentDate, 1));
        break;
      case "Week":
        setCurrentDate(subDays(currentDate, 7));
        break;
      case "Month":
        setCurrentDate(subMonths(currentDate, 1));
        break;
      case "Year":
        setCurrentDate(subYears(currentDate, 1));
        break;
    }
  };

  const goNext = () => {
    switch (selectedView) {
      case "Day":
        setCurrentDate(addDays(currentDate, 1));
        break;
      case "Week":
        setCurrentDate(addDays(currentDate, 7));
        break;
      case "Month":
        setCurrentDate(addMonths(currentDate, 1));
        break;
      case "Year":
        setCurrentDate(addYears(currentDate, 1));
        break;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 rounded-full mt-4 mb-6 bg-muted text-muted-foreground px-5 py-3 shadow-inner transition-colors hover:text-foreground"
        >
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-sm font-medium">{formatRange()}</span>
          </div>
          <motion.button
            className="bg-white/80 items-center flex backdrop-blur-md rounded-full p-1 border border-border transition-all text-muted-foreground hover:text-purple-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.button>
      </PopoverTrigger>

      <PopoverContent className="w-56 p-4 space-y-3 rounded-xl shadow-md">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={goPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-muted-foreground">
            {formatRange()}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={goNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {views.map((view) => (
            <Button
              key={view}
              variant={view === selectedView ? "default" : "outline"}
              size="sm"
              className="text-xs"
              onClick={() => setSelectedView(view)}
            >
              {view}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
