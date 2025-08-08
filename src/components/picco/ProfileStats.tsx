import React from 'react';

export const ProfileStats = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center gap-1 rounded-xl bg-[var(--surface-dark)] p-4 transition-transform duration-200 hover:scale-105 cursor-pointer">
        <p className="text-3xl font-bold tracking-tight text-[var(--primary-green)]">75%</p>
        <p className="text-sm text-[var(--text-secondary-light)]">Win Rate</p>
      </div>
      <div className="flex flex-col items-center gap-1 rounded-xl bg-[var(--surface-dark)] p-4 transition-transform duration-200 hover:scale-105 cursor-pointer">
        <p className="text-3xl font-bold tracking-tight">120</p>
        <p className="text-sm text-[var(--text-secondary-light)]">Predictions</p>
      </div>
    </div>
  );
};