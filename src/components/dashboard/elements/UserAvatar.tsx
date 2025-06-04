import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarFallback>
        <Image
          src="/gradient.jpg"
          alt="User"
          className="   object-cover  opacity-75 hover:cursor-pointer"
          fill
          unoptimized
        />
      </AvatarFallback>
    </Avatar>
  );
};
