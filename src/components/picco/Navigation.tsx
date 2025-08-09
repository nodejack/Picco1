import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Activity, Trophy, User, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/context/SidebarContext';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '../ui/button';

const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Activity, label: 'Predictions', path: '/predictions' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: User, label: 'Profile', path: '/profile' },
];

export const Navigation = () => {
  const location = useLocation();
  const { isCollapsed, setIsCollapsed } = useSidebar();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        "fixed top-16 left-0 z-20 hidden h-[calc(100vh-4rem)] flex-col justify-start border-r border-[var(--border-color)] bg-[var(--background-dark)] p-4 transition-all duration-300 md:flex",
        isCollapsed ? 'w-20' : 'w-64'
      )}>
        <nav className="flex flex-col items-stretch justify-start gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Tooltip key={item.label} disableHoverableContent={!isCollapsed}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.path}
                    className={cn(
                      'flex flex-row items-center justify-start gap-3 rounded-lg p-3 transition-colors',
                      isActive ? 'bg-[var(--surface-dark)] text-[var(--primary-green)]' : 'text-[var(--text-secondary-light)] hover:bg-zinc-800 hover:text-white',
                      isCollapsed && 'justify-center'
                    )}
                  >
                    <Icon className="h-7 w-7 flex-shrink-0" />
                    <span className={cn('text-base', isActive ? 'font-bold' : 'font-medium', isCollapsed && 'hidden')}>
                      {item.label}
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="border-zinc-700 bg-zinc-800 text-white">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
        <div className="mt-auto">
          <Button variant="ghost" onClick={() => setIsCollapsed(!isCollapsed)} className="w-full justify-start gap-3 rounded-lg p-3 text-[var(--text-secondary-light)] hover:bg-zinc-800 hover:text-white">
            {isCollapsed ? <PanelLeftOpen className="h-7 w-7" /> : <PanelLeftClose className="h-7 w-7" />}
            <span className={cn(isCollapsed && 'hidden')}>Collapse</span>
          </Button>
        </div>
      </aside>

      {/* Mobile Footer - Enhanced for Telegram WebApp */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 flex h-24 flex-row justify-around bg-[var(--background-dark)] border-t border-[var(--border-color)] md:hidden" 
              style={{ 
                paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
                paddingTop: '8px'
              }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                'flex w-full flex-col items-center justify-center gap-1 p-3 transition-colors min-h-[60px] touch-manipulation',
                isActive ? 'text-[var(--primary-green)]' : 'text-[var(--text-secondary-light)]'
              )}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Icon className="h-8 w-8 flex-shrink-0" />
              <span className={cn('text-sm leading-tight', isActive ? 'font-bold' : 'font-medium')}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </footer>
    </>
  );
};