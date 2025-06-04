"use client";

import { Progress } from "@/components/ui/progress";

interface Target {
  title: string;
  current: number;
  total: number;
  unit: string;
  percentage: number;
}

const targets: Target[] = [
  {
    title: "Follower Goal",
    current: 85000,
    total: 100000,
    unit: "followers",
    percentage: 85,
  },
  {
    title: "Revenue Goal",
    current: 6200,
    total: 10000,
    unit: "TD",
    percentage: 62,
  },
  {
    title: "Content Goal",
    current: 27,
    total: 30,
    unit: "posts",
    percentage: 90,
  },
];

export const Targets = () => {
  return (
    <div
      className="w-full
     rounded-3xl        border   
px-5 py-5 space-y-5"
    >
      <h3 className="text-sm font-semibold text-muted-foreground">
        Monthly Targets
      </h3>

      {targets.map((target, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-sm text-stone-700 font-medium">
            <span className="text-medium text-muted-foreground">
              {target.title}
            </span>
            <span className="text-medium text-muted-foreground">
              {target.percentage}%
            </span>
          </div>
          <Progress
            value={target.percentage}
            className="h-2 bg-muted-foreground/10"
          />
          <div className="text-xs font-medium text-stone-400">
            {target.unit === "DT"
              ? `$${target.current.toLocaleString()} / $${target.total.toLocaleString()}`
              : `${target.current} / ${target.total} ${target.unit}`}
          </div>
        </div>
      ))}
    </div>
  );
};
