"use client";

import { Video, CheckCircle, Clock4 } from "lucide-react";

export const SubmissionStatusCards = () => {
  const cards = [
    {
      label: "Video Submitted",
      value: 30,
      icon: <Video className="h-4 w-4 text-pink-600" />,
      bg: "bg-pink-100",
    },
    {
      label: "Content Approved",
      value: 25,
      icon: <CheckCircle className="h-4 w-4 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      label: "Being Processed",
      value: 5,
      icon: <Clock4 className="h-4 w-4 text-orange-600" />,
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="w-full py-4 flex flex-wrap justify-between gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-between border rounded-3xl px-4 py-2 w-full sm:w-[30%] "
        >
          <div className="flex items-center justify-end">
            <div
              className={`rounded-full p-2 ${card.bg} flex items-center justify-center shadow-sm`}
            >
              {card.icon}
            </div>
          </div>
          <div className="-mt-4">
            <span className="text-2xl font-semibold text-muted-foreground leading-snug tracking-tight">
              {card.value}
            </span>
          </div>
          <span className="text-xs text-stone-500 font-medium tracking-tight">
            {card.label}
          </span>
        </div>
      ))}
    </div>
  );
};
