"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SignUpCard from "./SignUpCard";
import SocialButtons from "./SocialButtons";

export default function SignInCard() {
  const [showSignUp, setShowSignUp] = useState(false);
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  if (showSignUp) {
    return <SignUpCard onBack={() => setShowSignUp(false)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full sm:max-w-md  bg-stone-200/50  backdrop-blur-md mx-auto px-8 py-10 rounded-3xl shadow-md "
    >
      <div className="flex flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center items-center">
          <Image
            src="/tawa-logo.svg"
            alt="Main"
            width={100}
            height={100}
            className="opacity-75 "
            unoptimized
          />
          <h1 className="text-2xl font-semibold tracking-tight text-stone-800/80">
            Sign in to your account
          </h1>
          <p className="text-sm text-muted-foreground/80 dark:text-stone-600">
            Enter your credentials to continue
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSignIn}>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            required
            className=" placeholder:text-stone-500"
          />
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            required
            className=" placeholder:text-stone-500"
          />
          <Button
            type="submit"
            className="w-full dark:bg-stone-900 bg-stone-900 text-stone-200 dark:text-stone-200"
          >
            Sign In <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="  backdrop-blur-xl px-2 text-muted-foreground dark:text-stone-600">
              Or sign in with
            </span>
          </div>
        </div>

        <SocialButtons />
        <div className="px-8   text-center text-sm text-muted-foreground dark:text-stone-600">
          Don't have an account?{" "}
          <button
            type="button"
            className="underline underline-offset-4 hover:text-primary"
            onClick={() => setShowSignUp(true)}
          >
            Sign up
          </button>
        </div>
      </div>
    </motion.div>
  );
}
