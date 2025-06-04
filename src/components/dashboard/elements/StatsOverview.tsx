"use client";

import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

export const StatsOverview = () => {
  const stats = [
    {
      number: 1,
      suffix: "M",
      label: "Total Reach Generated",
    },
    {
      number: 20,
      suffix: "K",
      label: "Engaged Audience",
    },
    {
      number: 3.6,
      suffix: "%",
      label: "TAWA Eng Rate",
    },
    {
      number: 12.4,
      suffix: "h",
      label: "Avg. Eng Time",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-3xl border px-6 py-4 flex justify-between items-center"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center px-2"
        >
          <CountUp
            from={0}
            to={stat.number}
            separator=""
            duration={1}
            className="text-2xl font-semibold"
          >
            <span className=" font-semibold text-xl text-muted-foreground">
              {stat.suffix}
            </span>
          </CountUp>

          <div className="text-xs text-stone-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};
