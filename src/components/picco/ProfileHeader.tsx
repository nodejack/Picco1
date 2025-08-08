import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 flex items-center bg-[var(--background-dark)]/80 p-4 pb-2 backdrop-blur-sm">
      <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <h1 className="flex-1 text-center text-xl font-bold tracking-tight pr-10">Profile</h1>
    </header>
  );
};