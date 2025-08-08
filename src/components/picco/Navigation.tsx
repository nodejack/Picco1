import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Activity, Trophy, User, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Activity, label: 'Predictions', path: '/predictions' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: User, label: 'Profile', path: '/profile' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-20 flex h-20 flex-row justify-around border-t border-[var(--border-color)] bg-[var(--background-dark)]/80 backdrop-blur-sm md:bottom-auto md:right-auto md:h-full md:w-64 md:flex-col md:justify-start md:border-r md:border-t-0 md:p-4">
      {/* Desktop Logo */}
      <div className="hidden items-center gap-2 p-4 md:flex">
        <BarChart3 className="h-8 w-8 text-[var(--primary-green)]" />
        <h1 className="text-2xl font-bold text-white">Picco</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex h-full w-full flex-row items-center justify-around md:mt-4 md:h-auto md:flex-col md:items-stretch md:justify-start md:gap-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center gap-1 p-2 transition-colors md:flex-row md:justify-start md:gap-3 md:rounded-lg md:px-4 md:py-3',
                isActive
                  ? 'text-[var(--primary-green)] md:bg-[var(--surface-dark)]'
                  : 'text-[var(--text-secondary-light)] hover:text-white md:hover:bg-zinc-800'
              )}
            >
              <Icon className="h-7 w-7" />
              <span className={cn('text-xs md:text-base', isActive ? 'font-bold' : 'font-medium')}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};