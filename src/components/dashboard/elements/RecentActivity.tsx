"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock4 } from "lucide-react";
import { motion } from "framer-motion";

interface ActivityItem {
  message: string;
  time: string;
}

export const activities: ActivityItem[] = [
  { message: "You gained 1.2K followers on Instagram", time: "2h ago" },
  { message: "Nike brand deal finalized", time: "5h ago" },
  { message: "New YouTube content approved", time: "1 day ago" },
  { message: "Collaboration request from Adidas", time: "2 days ago" },
  { message: "TikTok engagement rate updated", time: "3 days ago" },
  { message: "Content calendar auto-synced", time: "4 days ago" },
];

export const RecentActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" py-4 px-5 border lg:col-span-2 shadow-none  w-full rounded-3xl "
    >
      <div>
        <div className="text-muted-foreground font-bold">Recent Activity</div>

        <CardDescription className="text-stone-400">
          Your latest actions and updates
        </CardDescription>
      </div>
      <CardContent className="p-0">
        <ScrollArea className="h-52  py-2 space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="flex  flex-col gap-1 items-start justify-center px-1 rounded-md border-b border-stone-400/50 pt-4 pb-2 last:border-b-0"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <p>{activity.message}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-stone-400 whitespace-nowrap">
                <Clock4 className="w-4 h-4" strokeWidth={1.25} />
                {activity.time}
              </div>
            </motion.div>
          ))}
        </ScrollArea>
      </CardContent>
    </motion.div>
  );
};
