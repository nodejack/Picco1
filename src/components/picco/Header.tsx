import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-ticker-animated border-b border-[var(--border-color)]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gradient-neon">Picco</h1>
      </div>
    </header>
  );
};