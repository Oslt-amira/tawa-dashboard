"use client";

import { Users2, Target, TrendingUp, Clock3 } from "lucide-react";

export const StatsOverview = () => {
  const stats = [
    {
      value: "1M",
      label: "Total Reach Generated",
    },
    {
      value: "20K",
      label: "Engaged Audience",
    },
    {
      value: "3.6%",
      label: "TAWA Eng Rate",
    },
    {
      value: "12.4h",
      label: "Avg. Eng Time",
    },
  ];

  return (
    <div className="w-full rounded-3xl border  px-6 py-4 flex justify-between items-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center px-2"
        >
          <div className="text-xl font-semibold text-muted-foreground">
            {stat.value}
          </div>
          <div className="text-xs text-stone-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
