"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SignInCard from "@/components/auth/SignInCard";

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const gradients = [
      `radial-gradient(circle at 20% 30%, #8d7dca, transparent 60%),
       radial-gradient(circle at 80% 70%, #33a0ff, transparent 60%),
       radial-gradient(circle at 50% 50%, #ff7a33, transparent 60%)`,
      `radial-gradient(circle at 30% 60%, #ff7a33, transparent 60%),
       radial-gradient(circle at 70% 30%, #8d7dca, transparent 60%),
       radial-gradient(circle at 50% 50%, #33a0ff, transparent 60%)`,
    ];

    let step = 0;
    const animate = () => {
      gsap.to(el, {
        backgroundImage: gradients[step % gradients.length],
        duration: 5,
        ease: "power1.inOut",
        onComplete: () => {
          step++;
          animate();
        },
      });
    };

    animate();

    return () => gsap.killTweensOf(el);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center sm:p-18 p-10">
      <div
        ref={bgRef}
        className="fixed inset-0 -z-10 transition-colors duration-1000"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #8d7dca, transparent 60%)`,
          backgroundColor: "#0f172a",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <SignInCard />
    </div>
  );
}
