import React from 'react';
import { Home, Activity, Trophy, User } from 'lucide-react';

const navItems = [
    { icon: <Home className="h-7 w-7" fill="currentColor" />, label: 'Home', active: true },
    { icon: <Activity className="h-7 w-7" />, label: 'Predictions', active: false },
    { icon: <Trophy className="h-7 w-7" />, label: 'Leaderboard', active: false },
    { icon: <User className="h-7 w-7" />, label: 'Profile', active: false },
];

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[var(--background-dark)] border-t border-[var(--border-color)] z-20">
      <nav className="flex justify-around items-center h-20">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex flex-col items-center gap-1 ${item.active ? 'text-[var(--primary-green)]' : 'text-[var(--text-secondary-light)]'}`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </footer>
  );
};