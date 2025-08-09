import React from 'react';
import { useTelegram } from '@/context/TelegramContext';
import { Smartphone, Globe } from 'lucide-react';

export const TelegramStatus: React.FC = () => {
  const { isTelegramWebApp, user, isReady } = useTelegram();

  if (!isReady) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-40 md:hidden">
      <div className="bg-[var(--surface-dark)] border border-[var(--border-color)] rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
        {isTelegramWebApp ? (
          <>
            <Smartphone size={16} className="text-[var(--primary-green)]" />
            <span className="text-[var(--text-secondary-light)]">
              Telegram Mini App
            </span>
            {user && (
              <span className="text-[var(--primary-green)] font-medium">
                ✓
              </span>
            )}
          </>
        ) : (
          <>
            <Globe size={16} className="text-[var(--text-secondary-light)]" />
            <span className="text-[var(--text-secondary-light)]">
              Web Browser
            </span>
          </>
        )}
      </div>
    </div>
  );
};