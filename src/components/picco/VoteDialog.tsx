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
            className="bg-transparent border-2 border-[var(--primary-green)] text-[var(--primary-green)] rounded-full w-24 h-24 flex flex-col items-center justify-center hover:bg-[var(--primary-green)] hover:text-[var(--surface-dark)] transition-all duration-300 btn-glow-green"
          >
            <ThumbsUp size={32} />
            <span className="mt-2 font-semibold">Yes</span>
          </Button>
          <Button
            onClick={() => onVote('no')}
            className="bg-transparent border-2 border-[var(--primary-red)] text-[var(--primary-red)] rounded-full w-24 h-24 flex flex-col items-center justify-center hover:bg-[var(--primary-red)] hover:text-[var(--surface-dark)] transition-all duration-300 btn-glow-red"
          >
            <ThumbsDown size={32} />
            <span className="mt-2 font-semibold">No</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};