import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Activity, Trophy, User, PanelLeftClose, PanelRightClose, Sparkles } from 'lucide-react';
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Activity, label: 'Predictions', path: '/predictions' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: User, label: 'Profile', path: '/profile' },
];

export const DesktopSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <Sidebar isCollapsed={isCollapsed} className="hidden lg:flex h-screen sticky top-0 border-r border-[var(--border-color)]">
      <SidebarHeader>
        <div className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
            <Sparkles className="w-8 h-8 text-[var(--primary-green)]" />
            <span className={cn("text-2xl font-bold", isCollapsed && "hidden")}>Picco</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-grow">
        <nav className="flex flex-col gap-2 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Button
                key={item.label}
                variant={'ghost'}
                className={cn(
                    "w-full justify-start h-12 text-base",
                    isActive && "bg-[var(--surface-dark)] text-[var(--primary-green)] hover:bg-zinc-800 hover:text-[var(--primary-green)]",
                    isCollapsed && "justify-center"
                )}
                asChild
              >
                <Link to={item.path}>
                  <Icon className={cn("h-6 w-6", !isCollapsed && "mr-4")} />
                  <span className={cn(isCollapsed && "hidden")}>{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="w-full justify-start h-12" onClick={() => setIsCollapsed(!isCollapsed)}>
            <div className="flex items-center w-full">
                {isCollapsed ? <PanelRightClose className="h-6 w-6 mx-auto" /> : <PanelLeftClose className="h-6 w-6 mr-4" />}
                <span className={cn(isCollapsed && "hidden")}>Collapse</span>
            </div>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};