import React from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { Footer } from './Footer';
import { SidebarProvider } from '@/components/ui/sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] flex min-h-screen">
        <DesktopSidebar />
        <main className="flex-1 flex flex-col min-w-0">
          {children}
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};