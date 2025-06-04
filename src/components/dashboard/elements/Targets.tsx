"use client";

import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
            <CountUp
              from={0}
              to={target.percentage}
              separator=""
              duration={1}
              className="text-medium text-muted-foreground"
            >
              {" "}
              <span className="text-medium text-muted-foreground">%</span>
            </CountUp>
          </div>
          <Progress
            value={target.percentage}
            className="h-2 bg-muted-foreground/10"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-xs font-medium text-stone-400"
          >
            <CountUp
              to={target.current}
              from={target.current * 0.8}
              duration={1.3}
              delay={0.5}
            />
            <span className="mx-0.5">/</span>
            <span>{target.total} </span>
            <span>{target.unit}</span>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};
