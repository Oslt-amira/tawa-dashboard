"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NavButton from "./NavButton";

export default function Step2Details({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          className="placeholder:text-stone-500"
          id="phone"
          placeholder="Phone Number (optional)"
        />
        <Input
          className="placeholder:text-stone-500"
          id="twitter"
          placeholder="Twitter Link"
        />
        <Input
          className="placeholder:text-stone-500"
          id="instagram"
          placeholder="Instagram Link"
        />
        <Input
          className="placeholder:text-stone-500"
          id="youtube"
          placeholder="YouTube Link"
        />
      </div>

      <div className="flex justify-between pt-4">
        <NavButton onClick={onBack} variant="back" />
        <NavButton onClick={onNext} variant="next" />
      </div>

      <div className="text-center text-xs text-muted-foreground/70 dark:text-stone-600  mt-2">
        You can skip this and add later
      </div>
    </>
  );
}
