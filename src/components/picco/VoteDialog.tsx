import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface VoteDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  question: string;
  onVote: (choice: 'Yes' | 'No') => void;
}

export const VoteDialog: React.FC<VoteDialogProps> = ({ isOpen, onOpenChange, question, onVote }) => {
  const handleVote = (choice: 'Yes' | 'No') => {
    onVote(choice);
    onOpenChange(false); // Close dialog after voting
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[var(--surface-dark)] border-[var(--border-color)] text-white rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold leading-tight pt-4">{question}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center gap-4 my-6">
          <Button
            onClick={() => handleVote('Yes')}
            className="w-full py-3 text-lg font-bold rounded-xl bg-[rgba(25,230,162,0.2)] text-[var(--primary-green)] border-2 border-[var(--primary-green)] btn-glow-green h-auto"
          >
            YES
          </Button>
          <Button
            onClick={() => handleVote('No')}
            className="w-full py-3 text-lg font-bold rounded-xl bg-[rgba(255,77,77,0.2)] text-[var(--primary-red)] border-2 border-[var(--primary-red)] btn-glow-red h-auto"
          >
            NO
          </Button>
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};