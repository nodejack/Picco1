import React from 'react';
import { Settings, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const PredictionsHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-[var(--background-dark)]/80 backdrop-blur-sm">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="w-12"></div>
        <h1 className="text-xl font-bold leading-tight tracking-tighter flex-1 text-center">Picco</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center h-12 w-12 rounded-full text-[var(--text-secondary-light)] hover:bg-[var(--surface-dark)] transition-colors">
            <Settings />
          </button>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary-light)] w-5 h-5" />
          <Input
            className="w-full rounded-full border-none bg-[var(--surface-dark)] h-12 placeholder:text-[var(--text-secondary-light)] pl-10 pr-4 text-base font-normal leading-normal focus:ring-2 focus:ring-[var(--primary-green)] transition-shadow"
            placeholder="Search assets..."
          />
        </div>
      </div>
      <div className="border-b border-[var(--border-color)]">
        <div className="flex px-4 gap-8">
          <a className="flex flex-col items-center justify-center border-b-2 border-b-[var(--primary-green)] text-[var(--primary-green)] pb-3 pt-4" href="#">
            <p className="text-sm font-bold leading-normal">All</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[var(--text-secondary-light)] pb-3 pt-4 hover:text-white transition-colors" href="#">
            <p className="text-sm font-bold leading-normal">My Predictions</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[var(--text-secondary-light)] pb-3 pt-4 hover:text-white transition-colors" href="#">
            <p className="text-sm font-bold leading-normal">Following</p>
          </a>
        </div>
      </div>
    </div>
  );
};