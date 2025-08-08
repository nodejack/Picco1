import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative">
        <img
          alt="User Avatar"
          className="h-24 w-24 md:h-20 md:w-20 rounded-full border-2 border-[var(--surface-dark)] object-cover"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop"
        />
        <div className="verified-badge absolute bottom-0 right-0">
          <ShieldCheck className="h-2.5 w-2.5" />
          <span>Verified</span>
        </div>
      </div>
      <div>
        <p className="text-xl md:text-lg font-bold">CryptoMaster</p>
        <p className="text-sm text-[var(--text-secondary-light)]">@cryptotrader</p>
      </div>
    </div>
  );
};