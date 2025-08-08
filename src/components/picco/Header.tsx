import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 border-b border-[var(--border-color)] bg-ticker-animated">
      <div className="container mx-auto flex h-full items-center justify-start px-4">
        <h1 className="text-3xl font-bold text-[var(--text-primary-light)]">Picco</h1>
      </div>
    </header>
  );
};