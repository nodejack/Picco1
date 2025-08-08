import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <img
          alt="User Avatar"
          className="h-32 w-32 rounded-full border-4 border-[var(--surface-dark)] object-cover"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop"
        />
        <div className="verified-badge absolute bottom-1 right-1">
          <ShieldCheck className="h-3 w-3" />
          <span>Verified</span>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold">CryptoMaster</p>
        <p className="text-base text-[var(--text-secondary-light)]">@cryptotrader</p>
      </div>
    </div>
  );
};