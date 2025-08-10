"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileInfoProps {
  name: string;
  username: string;
  avatar?: string;
  isPremium?: boolean;
}

export function ProfileInfo({ name, username, avatar, isPremium }: ProfileInfoProps) {
  const [telegramUsername, setTelegramUsername] = useState(username);
  const [telegramName, setTelegramName] = useState(name);
  const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);

  useEffect(() => {
    // Check if running in Telegram WebApp
    const isInTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user !== undefined;
    setIsTelegramWebApp(isInTelegram);

    if (isInTelegram) {
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      if (user) {
        setTelegramName(user.first_name || name || "User");
        
        if (user?.username) {
          setTelegramUsername(`@${user.username}`);
        } else if (user?.id) {
          setTelegramUsername(`#${user.id}`);
        }
      }
    }
  }, [name]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Avatar className="w-20 h-20">
          <AvatarImage src={avatar} alt={telegramName} />
          <AvatarFallback className="bg-[var(--surface-light)] text-[var(--text-primary)]">
            {(telegramName || "U").charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        {isPremium && (
          <div className="absolute -top-1 -right-1 bg-[var(--primary-green)] rounded-full p-1">
            <Star className="w-3 h-3 text-white fill-white" />
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] flex items-center gap-2">
          {telegramName}
          {isPremium && <Star className="w-4 h-4 text-[var(--primary-green)] fill-[var(--primary-green)]" />}
        </h2>
        <p className="text-sm text-[var(--text-secondary-light)]">{telegramUsername}</p>
        {isTelegramWebApp && (
          <p className="text-xs text-[var(--primary-green)] mt-1">
            Connected via Telegram
          </p>
        )}
      </div>
    </div>
  );
}