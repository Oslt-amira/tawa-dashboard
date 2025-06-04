import { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Clock4 } from "lucide-react";

interface UserCardProps {
  name: string;
  surname: string;
  activeSince: string;
  skills: string[];
}

export const UserCard: FC<UserCardProps> = ({
  name,
  surname,
  activeSince,
  skills,
}) => {
  return (
    <motion.div
      className="rounded-3xl border  bg-stone-900 text-stone-200 p-4 w-full sm:w-72 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold leading-tight">
        {name}
        <br />
        {surname},
      </div>
      <div className="text-sm items-center justify-start text-stone-500 mt-1 flex space-x-1">
        <Clock4 strokeWidth={1.5} className="h-3.5 w-3.5" />
        <p>Active since {activeSince}</p>
      </div>

      <div className="mt-30">
        <div className="text-sm items-center justify-start text-stone-400 mt-1 flex space-x-1">
          <p>TAWA Verified skills</p>
          <BadgeCheck strokeWidth={1.5} className="h-4 w-4 text-green-600" />
        </div>
        <p className="text-xs text-zinc-400 uppercase my-2"></p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-red-200/10 backdrop-blur-md text-red-200 font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
