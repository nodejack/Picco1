import React from 'react';
import { useTelegram } from '@/context/TelegramContext';
import { User } from 'lucide-react';

export const Header = () => {
  const { user, isTelegramWebApp } = useTelegram();

  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 border-b border-[var(--border-color)] bg-[var(--background-dark)]">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <h1 className="text-3xl font-bold text-[var(--text-primary-light)]">Picco</h1>
        
        {/* Telegram User Info */}
        {isTelegramWebApp && user && (
          <div className="flex items-center gap-2 text-[var(--text-secondary-light)]">
            {user.photo_url ? (
              <img 
                src={user.photo_url} 
                alt={user.first_name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[var(--surface-dark)] flex items-center justify-center">
                <User size={16} />
              </div>
            )}
            <span className="text-sm font-medium">
              {user.first_name}
              {user.is_premium && (
                <span className="ml-1 text-[var(--primary-green)]">⭐</span>
              )}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};