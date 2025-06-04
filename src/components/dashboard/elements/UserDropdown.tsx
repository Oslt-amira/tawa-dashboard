"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, Settings } from "lucide-react";
import { UserAvatar } from "./UserAvatar";
import { Button } from "@/components/ui/button";
interface UserProps {}

export const UserDropdown: React.FC<UserProps> = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <UserAvatar />
      </PopoverTrigger>
      <PopoverContent
        align="center"
        sideOffset={10}
        className="w-fit  text-muted-foreground flex flex-col gap-1 p-1 items-start   "
      >
        <Button
          variant="ghost"
          size="icon"
          className="border  border-transparent hover:border-1 hover:border-purple-200/50 hover:bg-transparent w-full justify-between gap-4 px-2 font-normal transition-colors duration-300 hover:text-purple-400 hover-radial-purple"
        >
          Settings <Settings className="h-5 w-5" strokeWidth={1.5} />{" "}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="border  border-transparent hover:border-1 hover:border-purple-200/50 hover:bg-transparent w-full justify-between gap-4 px-2 font-normal transition-colors duration-300 hover:text-purple-400 hover-radial-purple"
        >
          Sign Out <LogOut className="h-5 w-5" strokeWidth={1.5} />{" "}
        </Button>
      </PopoverContent>
    </Popover>
  );
};
