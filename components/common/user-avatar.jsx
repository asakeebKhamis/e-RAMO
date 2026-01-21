import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ image, name, isOnline, className }) => {
  const firstLetter = name?.[0]?.toUpperCase() || "?";

  return (
    <div className="relative inline-block">
      <Avatar className={cn("size-9 rounded-full", className)}>
        <AvatarImage
          className="object-cover"
          src={image}
          alt={name || "User"}
        />
        <AvatarFallback className="bg-linear-to-r from-main to-main text-white text-xs font-semibold">
          {firstLetter}
        </AvatarFallback>
      </Avatar>

      {isOnline && (
        <span className="absolute bottom-0 end-0 size-3 rounded-full bg-green-500 border-2 border-background" />
      )}
    </div>
  );
};

export default UserAvatar;
