import React from 'react';

export const ProfileStats = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <div className="flex flex-col items-center gap-1 rounded-lg bg-[var(--surface-dark)] p-3 transition-transform duration-200 hover:scale-105 cursor-pointer">
        <p className="text-2xl md:text-xl font-bold tracking-tight text-[var(--primary-green)]">75%</p>
        <p className="text-xs text-[var(--text-secondary-light)]">Win Rate</p>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-lg bg-[var(--surface-dark)] p-3 transition-transform duration-200 hover:scale-105 cursor-pointer">
        <p className="text-2xl md:text-xl font-bold tracking-tight">120</p>
        <p className="text-xs text-[var(--text-secondary-light)]">Predictions</p>
      </div>
    </div>
  );
};