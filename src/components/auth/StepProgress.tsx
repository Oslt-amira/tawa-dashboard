"use client";

import { Check } from "lucide-react";

interface StepProgressProps {
  steps: string[];
  currentStep: number;
}

export default function StepProgress({
  steps,
  currentStep,
}: StepProgressProps) {
  return (
    <div className="flex justify-center items-center gap-6 mb-8">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;
        const isLast = stepNum === steps.length;

        return (
          <div key={label} className="flex items-center">
            {/* Dot + Label */}
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition duration-200 ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : isCompleted
                    ? "bg-gradient-to-b from-pink-500/80 to-purple-500/80 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {isCompleted ? <Check size={14} /> : stepNum}
              </div>
              <span className="text-[11px] mt-1 text-gray-500 tracking-wide">
                {label}
              </span>
            </div>

            {!isLast && (
              <div className="w-10 sm:w-16 h-px bg-gray-200 mx-2 relative -top-2 left-2" />
            )}
          </div>
        );
      })}
    </div>
  );
}
