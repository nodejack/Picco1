import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useTelegram } from '@/context/TelegramContext';
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';

export const ProfileInfo = () => {
  const { user, isTelegramWebApp } = useTelegram();

  // Use Telegram user data if available, otherwise fallback to default
  const displayName = user?.first_name 
    ? `${user.first_name}${user.last_name ? ` ${user.last_name}` : ''}`
    : 'CryptoMaster';
  
  const username = user?.username 
    ? `@${user.username}` 
    : '@cryptotrader';
  
  const isVerified = isTelegramWebApp || user?.is_premium;

  // Generate avatar SVG using dicebear bottts (same as LeaderboardUser)
  const avatarSeed = user?.username || user?.first_name || displayName;
  const avatar = createAvatar(bottts, {
    seed: avatarSeed,
    size: 96, // Larger size for profile page
  });
  const avatarSvg = avatar.toString();

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative">
        {/* Use Telegram photo if available, otherwise use Dicebear Bottts */}
        {user?.photo_url ? (
          <img
            alt={`${displayName} Avatar`}
            className="h-24 w-24 md:h-20 md:w-20 rounded-full border-2 border-[var(--surface-dark)] object-cover"
            src={user.photo_url}
          />
        ) : (
          <div 
            className="h-24 w-24 md:h-20 md:w-20 rounded-full border-2 border-[var(--surface-dark)] flex items-center justify-center overflow-hidden"
            dangerouslySetInnerHTML={{ __html: avatarSvg }}
          />
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