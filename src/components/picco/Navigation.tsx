"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, TrendingUp, Trophy, User } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navigationItems = [
  { name: "home", label: "Home", href: "/", icon: Home },
  { name: "predictions", label: "Predictions", href: "/predictions", icon: TrendingUp },
  { name: "leaderboard", label: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "profile", label: "Profile", href: "/profile", icon: User },
];

export function Navigation() {
  const location = useLocation();
  const { isOpen, toggleSidebar } = useSidebar();
  const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);

  useEffect(() => {
    setIsTelegramWebApp(window.Telegram?.WebApp !== undefined);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col fixed left-0 top-0 h-full bg-[var(--surface)] border-r border-[var(--border-color)] transition-all duration-300 z-30",
          isOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex-1 py-4">
          <div className="px-3 py-2">
            <h1 className={cn(
              "text-xl font-bold text-[var(--text-primary)] transition-all duration-300",
              isOpen ? "opacity-100" : "opacity-0"
            )}>
              Picco
            </h1>
          </div>
          <nav className="px-3 space-y-2">
            <TooltipProvider>
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Tooltip key={item.name} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                          isActive
                            ? "bg-[var(--primary-green)] text-white"
                            : "text-[var(--text-secondary)] hover:bg-[var(--surface-light)] hover:text-[var(--text-primary)]"
                        )}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className={cn(
                          "transition-all duration-300",
                          isOpen ? "opacity-100" : "opacity-0"
                        )}>
                          {item.label}
                        </span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="md:hidden">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--surface-dark)] border-t border-[var(--border-color)] z-40">
        <div className="flex items-center justify-around h-24 pb-[env(safe-area-inset-bottom)]">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2 px-3 min-w-0 flex-1 transition-colors",
                  isActive
                    ? "text-[var(--primary-green)]"
                    : "text-[var(--text-secondary)]"
                )}
              >
                <Icon className="h-8 w-8 flex-shrink-0" />
                <span className={cn('text-sm leading-tight', isActive ? 'font-medium' : 'font-normal')}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}