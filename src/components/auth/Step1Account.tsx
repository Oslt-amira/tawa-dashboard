"use client";
import { Input } from "@/components/ui/input";
import SocialButtons from "./SocialButtons";
import NavButton from "./NavButton";

export default function Step1Account({ onNext }: { onNext: () => void }) {
  return (
    <>
      <Input
        className="placeholder:text-stone-500"
        id="email"
        placeholder="Email"
        type="email"
        required
      />
      <Input
        className="placeholder:text-stone-500"
        id="password"
        placeholder="Password"
        type="password"
        required
      />
      <Input
        id="confirm-password"
        placeholder="Confirm Password"
        type="password"
        required
        className="placeholder:text-stone-500"
      />

      <NavButton
        onClick={onNext}
        showText
        variant="signUp"
        className="w-full"
      />

      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="  backdrop-blur-xl px-2 text-muted-foreground dark:text-stone-600">
            Or sign up with
          </span>
        </div>
      </div>

      <SocialButtons />
    </>
  );
}
