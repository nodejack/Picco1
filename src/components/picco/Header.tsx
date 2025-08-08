import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-ticker-animated">
      <div className="container mx-auto px-4 py-3 flex items-center justify-start">
        <h1 className="text-3xl font-bold text-[var(--text-primary-light)]">Picco</h1>
      </div>
    </header>
  );
};