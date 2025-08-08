import React from 'react';
import { Settings } from 'lucide-react';

export const LeaderboardHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-[var(--background-dark)]/80 backdrop-blur-sm">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="w-12"></div>
        <h1 className="text-2xl font-bold leading-tight tracking-tighter flex-1 text-center">Leaderboard</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center h-12 w-12 rounded-full text-[var(--text-secondary-light)] hover:bg-[var(--surface-dark)] transition-colors">
            <Settings />
          </button>
        </div>
      </div>
      <div className="border-b border-[var(--border-color)]">
        <div className="flex px-4 gap-4 justify-center">
          <a className="flex flex-col items-center justify-center border-b-2 border-b-[var(--primary-green)] text-[var(--primary-green)] pb-3 pt-4 px-4" href="#">
            <p className="text-base font-bold leading-normal">Global</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[var(--text-secondary-light)] pb-3 pt-4 px-4 hover:text-white transition-colors" href="#">
            <p className="text-base font-bold leading-normal">Weekly</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[var(--text-secondary-light)] pb-3 pt-4 px-4 hover:text-white transition-colors" href="#">
            <p className="text-base font-bold leading-normal">Daily</p>
          </a>
        </div>
      </div>
    </div>
  );
};