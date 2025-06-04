"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const deals = [
  {
    brand: "Nike Collaboration",
    amount: "$2,500",
    due: "Feb 15",
    status: "Active",
  },
  {
    brand: "Beauty Brand",
    amount: "$3,200",
    due: "Mar 1",
    status: "Negotiating",
  },
  {
    brand: "Beauty Brand",
    amount: "$3,200",
    due: "Jan 22",
    status: "Done",
  },
];

const statusColors = {
  Active: "bg-green-200/80 text-green-800/80",
  Negotiating: "bg-blue-200/80 text-blue-800/80",
  Done: "bg-red-200/80 text-red-800/80",
};

export const BrandDeals = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 px-5 border shadow-none rounded-3xl relative"
    >
      {" "}
      <div>
        <div className="absolute top-3 right-3 bg-muted rounded-full p-1 hover:cursor-pointer shadow-sm">
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
        </div>
        <div className="text-muted-foreground font-bold pb-2">Brand Deals</div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="rounded-xl border p-4 flex justify-between items-start"
          >
            <div className="space-y-1">
              <div className=" text-[13px] font-semibold text-muted-foreground">
                {deal.brand}
              </div>
              <div className="text-xs text-stone-400 font-light">
                {deal.amount} • Due: {deal.due}
              </div>
            </div>
            <span
              className={clsx(
                "text-[10px] font-medium px-3 py-0.5 rounded-full",
                statusColors[deal.status as keyof typeof statusColors]
              )}
            >
              {deal.status}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
