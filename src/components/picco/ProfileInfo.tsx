import React from 'react';
import { ShieldCheck, User } from 'lucide-react';
import { useTelegram } from '@/context/TelegramContext';

export const ProfileInfo = () => {
  const { user, isTelegramWebApp } = useTelegram();

  // Use Telegram user data if available, otherwise fallback to default
  const displayName = user?.first_name 
    ? `${user.first_name}${user.last_name ? ` ${user.last_name}` : ''}`
    : 'CryptoMaster';
  
  const username = user?.username 
    ? `@${user.username}` 
    : '@cryptotrader';
  
  const avatarUrl = user?.photo_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop';
  
  const isVerified = isTelegramWebApp || user?.is_premium;

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative">
        {user?.photo_url ? (
          <img
            alt={`${displayName} Avatar`}
            className="h-24 w-24 md:h-20 md:w-20 rounded-full border-2 border-[var(--surface-dark)] object-cover"
            src={avatarUrl}
          />
        ) : (
          <div className="h-24 w-24 md:h-20 md:w-20 rounded-full border-2 border-[var(--surface-dark)] bg-[var(--surface-dark)] flex items-center justify-center">
            <User size={32} className="text-[var(--text-secondary-light)]" />
          </div>
        )}
        
        {isVerified && (
          <div className="verified-badge absolute bottom-0 right-0">
            <ShieldCheck className="h-2.5 w-2.5" />
            <span>{user?.is_premium ? 'Premium' : 'Verified'}</span>
          </div>
        )}
      </div>
      
      <div>
        <div className="flex items-center gap-2 justify-center">
          <p className="text-xl md:text-lg font-bold">{displayName}</p>
          {user?.is_premium && (
            <span className="text-[var(--primary-green)]" title="Telegram Premium">⭐</span>
          )}
        </div>
        <p className="text-sm text-[var(--text-secondary-light)]">{username}</p>
        {isTelegramWebApp && (
          <p className="text-xs text-[var(--primary-green)] mt-1">
            Connected via Telegram
          </p>
        )}
      </div>
    </div>
  );
};