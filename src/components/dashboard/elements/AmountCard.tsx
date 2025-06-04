import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

interface AmountCardProps {
  title: string;
  amount: number;
  percentage: string;
}

export const AmountCard = ({ title, amount, percentage }: AmountCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="bg-stone-900 border  text-stone-200 rounded-3xl p-3 relative overflow-hidden w-full sm:w-72"
    >
      <div className="text-sm text-white/60 mb-2 ">{title}</div>
      <CountUp
        from={0}
        to={amount}
        separator=","
        direction="up"
        className="text-3xl font-semibold text-white"
        duration={1}
      >
        DT
      </CountUp>
      <div className="text-xs text-white/50 flex items-center gap-1">
        {percentage.startsWith("-") ? (
          <TrendingDown
            className="h-3.5 w-3.5 text-red-500"
            strokeWidth={1.5}
          />
        ) : (
          <TrendingUp
            className="h-3.5 w-3.5 text-green-400"
            strokeWidth={1.5}
          />
        )}
        <span>{percentage} this Week</span>
      </div>
      <div className="absolute top-3 right-3 bg-white rounded-full p-1">
        <ArrowUpRight className="h-4 w-4 text-black" strokeWidth={1.5} />
      </div>
    </motion.div>
  );
};
