import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface VoteDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onVote: (vote: 'yes' | 'no') => void;
  question: string;
}

export const VoteDialog: React.FC<VoteDialogProps> = ({ isOpen, onOpenChange, onVote, question }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[var(--background-dark)] border-[var(--border-color)] text-white rounded-2xl w-[95vw] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold leading-tight pt-4">{question}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-around py-6">
          <Button
            onClick={() => onVote('yes')}
            className="bg-[var(--primary-green)] text-[var(--surface-dark)] rounded-lg px-8 py-4 flex items-center justify-center hover:bg-[var(--primary-green)]/90 transition-all duration-300"
          >
            <ThumbsUp size={24} />
            <span className="ml-2 font-semibold">Yes</span>
          </Button>
          <Button
            onClick={() => onVote('no')}
            className="bg-[var(--primary-red)] text-white rounded-lg px-8 py-4 flex items-center justify-center hover:bg-[var(--primary-red)]/90 transition-all duration-300"
          >
            <ThumbsDown size={24} />
            <span className="ml-2 font-semibold">No</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};