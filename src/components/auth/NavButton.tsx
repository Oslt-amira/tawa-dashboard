"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "back" | "next" | "submit" | "signUp";

interface NavButtonProps {
  onClick: () => void;
  variant: Variant;
  showText?: boolean;
  className?: string;
}

export default function NavButton({
  onClick,
  variant,
  showText = false,
  className,
}: NavButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 rounded-md p-2 text-sm";

  const styles = {
    back: "border rounded-full",
    next: "bg-stone-900 rounded-full text-stone-200",
    submit: "bg-stone-900 rounded-full text-stone-200",
    signUp: "bg-stone-900 text-stone-200",
  };

  const icon = {
    back: <ChevronLeft size={16} />,
    next: <ChevronRight size={16} />,
    submit: <Check size={16} />,
    signUp: <Check size={16} />,
  };

  const label = {
    back: "Back",
    next: "Next",
    submit: "Finish",
    signUp: "Sign up",
  };

  const animation = {
    back: { whileTap: { x: -5 } },
    next: { whileTap: { scale: 0.96 } },
    submit: { whileTap: { scale: 0.96 } },
    signUp: { whileTap: { scale: 0.96 } },
  };

  return (
    <motion.button
      onClick={onClick}
      type="button"
      className={cn(baseClasses, styles[variant], className)}
      {...animation[variant]}
    >
      {variant === "back" && icon.back}
      {variant !== "back" && showText && <span>{label[variant]}</span>}
      {variant !== "back" && icon[variant]}
    </motion.button>
  );
}
