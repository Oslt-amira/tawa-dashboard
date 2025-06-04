"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  InstagramIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const hoverMotion = {
  whileHover: {
    scale: 1.1,
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

export default function SocialButtons() {
  return (
    <div className="flex justify-center gap-4">
      <motion.div {...hoverMotion}>
        <Button
          size="icon"
          className="bg-stone-100/60 backdrop-blur-md border border-stone-400/50"
          variant="outline"
          aria-label="Sign in with Google"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
          >
            <path d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.2H272v95h146.9c-6.3 34.1-25.2 62.9-53.7 82.2v68h86.7c50.7-46.7 81.6-115.5 81.6-195z" />
            <path d="M272 544.3c72.9 0 134.1-24.2 178.8-65.9l-86.7-68c-24.1 16.2-55 25.8-92.1 25.8-70.8 0-130.8-47.9-152.3-112.2H29.9v70.5C74.7 482 166.7 544.3 272 544.3z" />
            <path d="M119.7 324c-10.8-32.1-10.8-66.9 0-99l-89.8-70.5C4 201.4-7.1 245-7.1 289.5s11.1 88.1 32.8 134.9l89.8-70.4z" />
            <path d="M272 107.7c39.7-.6 77.7 14.7 106.9 41.4l80.3-80.3C418.2 24.8 347.2-1.1 272 0 166.7 0 74.7 62.3 29.9 154.4l89.8 70.5C141.2 155.6 201.2 107.7 272 107.7z" />
          </svg>
        </Button>
      </motion.div>

      <motion.div {...hoverMotion}>
        <Button
          size="icon"
          className="bg-stone-100/70 backdrop-blur-md border border-stone-400/50"
          variant="outline"
          aria-label="Sign in with X"
        >
          <TwitterIcon className="h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div {...hoverMotion}>
        <Button
          size="icon"
          className="bg-stone-100/70 backdrop-blur-md border border-stone-400/50"
          variant="outline"
          aria-label="Sign in with Instagram"
        >
          <InstagramIcon className="h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div {...hoverMotion}>
        <Button
          size="icon"
          className="bg-stone-100/70 backdrop-blur-md border border-stone-400/50"
          variant="outline"
          aria-label="Sign in with TikTok"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41,15.4c-3.3,0-6.4-1.4-8.5-3.8V31.6c0,6.8-5.5,12.4-12.4,12.4S7.7,38.4,7.7,31.6s5.5-12.4,12.4-12.4c1.3,0,2.5,0.2,3.6,0.7V26
              c-1-0.6-2.2-1-3.6-1c-3.9,0-7,3.2-7,7s3.2,7,7,7s7-3.2,7-7V4h6.1c1.1,5.8,5.6,10.3,11.4,11.4V15.4z"
            />
          </svg>
        </Button>
      </motion.div>

      <motion.div {...hoverMotion}>
        <Button
          size="icon"
          className="bg-stone-100/70 backdrop-blur-md border border-stone-400/50"
          variant="outline"
          aria-label="Sign in with YouTube"
        >
          <YoutubeIcon className="h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div {...hoverMotion}>
        <Button
          size="icon"
          className="bg-stone-100/70 backdrop-blur-md border border-stone-400/50"
          variant="outline"
          aria-label="Sign in with Twitch"
        >
          <TwitchIcon className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
}
