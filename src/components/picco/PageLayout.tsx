import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { DesktopSidebar } from './DesktopSidebar';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <div className="flex min-h-screen">
        {!isMobile && <DesktopSidebar />}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {children}
        </div>
        {isMobile && <Footer />}
      </div>
    </div>
  );
};