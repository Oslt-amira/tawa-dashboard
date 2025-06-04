"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Check } from "lucide-react";
import Step1Account from "./Step1Account";
import Step2Details from "./Step2Details";
import Step3Profile from "./Step3Profile";
import StepProgress from "./StepProgress";
import { steps } from "./signupConfig";

export default function SignUpCard({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = () => router.push("/dashboard");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full sm:max-w-md  bg-stone-200/50  backdrop-blur-md mx-auto px-8 py-10 rounded-3xl shadow-md "
    >
      <div className="flex flex-col items-center justify-center space-y-2 mb-6 text-center">
        <Image
          src="/tawa-logo.svg"
          alt="Main"
          width={100}
          height={100}
          className="opacity-75 "
          unoptimized
        />
        <h1 className="text-2xl font-semibold text-stone-800/80">
          {step === 1 && "Create your account"}
          {step === 2 && "Tell us more"}
          {step === 3 && "Your Creator Profile"}
        </h1>
      </div>

      <StepProgress steps={steps} currentStep={step} />
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {step === 1 && <Step1Account onNext={nextStep} />}
          {step === 2 && <Step2Details onNext={nextStep} onBack={prevStep} />}
          {step === 3 && (
            <Step3Profile onBack={prevStep} onSubmit={handleSubmit} />
          )}
        </motion.div>
      </AnimatePresence>

      {step === 1 && (
        <div className="text-center text-sm text-muted-foreground dark:text-stone-600 mt-6">
          Already have an account?{" "}
          <button onClick={onBack} className="underline hover:text-primary">
            Sign in
          </button>
        </div>
      )}
    </motion.div>
  );
}
