import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Activity, Trophy, User } from 'lucide-react';

const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Activity, label: 'Predictions', path: '/predictions' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: User, label: 'Profile', path: '/profile' },
];

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[var(--background-dark)]/80 backdrop-blur-sm border-t border-[var(--border-color)] z-20">
      <nav className="flex justify-around items-center h-20">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 w-1/4 py-2 transition-colors ${isActive ? 'text-[var(--primary-green)]' : 'text-[var(--text-secondary-light)] hover:text-white'}`}
            >
              <Icon className="h-7 w-7" />
              <span className={`text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </footer>
  );
};