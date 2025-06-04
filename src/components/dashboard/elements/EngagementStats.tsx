"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const engagementData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 60 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 234 },
  { day: "Fri", value: 100 },
  { day: "Sat", value: 75 },
];

export const EngagementStats = () => {
  const [selectedPlatform] = useState("TikTok");
  const [selectedView] = useState("Daily");

  const maxValue = Math.max(...engagementData.map((e) => e.value));

  return (
    <div className="rounded-3xl bg-muted px-6 py-5 space-y-8 w-full shadow-inner">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-muted-foreground">
          User Engagement
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{selectedPlatform}</span>
          <Button
            variant="outline"
            className="h-6 px-2 text-xs rounded-md border-muted-foreground/20"
          >
            {selectedView}
          </Button>
        </div>
      </div>

      <div className="flex items-end justify-between h-40 w-full gap-2">
        {engagementData.map((item, index) => {
          const isActive = item.value === maxValue;
          const heightPercent = (item.value / maxValue) * 100;

          return (
            <div key={index} className="flex flex-col items-center w-full">
              {isActive && (
                <div className="mb-1 text-[11px] px-2 py-0.5 rounded-full bg-black text-white font-medium">
                  {item.value}k
                </div>
              )}
              <div
                className={cn(
                  "w-6 rounded-full transition-all duration-300",
                  isActive ? "bg-green-500" : "bg-stone-300"
                )}
                style={{ height: `${heightPercent}px`, minHeight: "12px" }}
              />

              <span className="text-[10px] font-medium text-stone-400 mt-2">
                {item.day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
