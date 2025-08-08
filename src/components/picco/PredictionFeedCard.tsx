import React from 'react';
import { Button } from '@/components/ui/button';

interface PredictionFeedCardProps {
  icon: string;
  name: string;
  ticker: string;
  timeLeft: string;
  question: string;
  userPrediction?: {
    choice: 'Yes' | 'No';
    amount: number;
  };
  consensus: number;
  status: 'active' | 'closed' | 'unpredicted';
}

export const PredictionFeedCard: React.FC<PredictionFeedCardProps> = ({
  icon,
  name,
  ticker,
  timeLeft,
  question,
  userPrediction,
  consensus,
  status,
}) => {
  const isClosed = status === 'closed';
  const hasPredicted = status !== 'unpredicted';

  return (
    <div className="bg-[var(--surface-dark)] rounded-2xl p-4 transition-transform hover:scale-[1.02] duration-300 ease-in-out">
      <div className="flex items-start gap-4">
        <img alt={`${name} icon`} className="w-10 h-10 rounded-full" src={icon} />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-[var(--text-secondary-light)]">{ticker} - {name}</p>
            <span className={`text-xs font-mono px-2 py-1 rounded-md ${isClosed ? 'bg-red-900/50 text-red-400' : 'bg-zinc-700 text-[var(--text-secondary-light)]'}`}>
              {isClosed ? 'Closed' : timeLeft}
            </span>
          </div>
          <p className="text-lg font-bold leading-tight mt-1">{question}</p>
          {hasPredicted && userPrediction ? (
            <p className="text-sm text-[var(--text-secondary-light)] mt-2">
              Your prediction: <span className={`font-semibold ${userPrediction.choice === 'Yes' ? 'text-green-400' : 'text-red-400'}`}>{userPrediction.choice}</span> ({userPrediction.amount})
            </p>
          ) : (
             <p className="text-sm text-[var(--text-secondary-light)] mt-2">You haven't predicted yet.</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-medium">Consensus</p>
          <p className="text-sm font-bold text-[var(--primary-green)]">{consensus}% Yes</p>
        </div>
        <div className="w-full bg-zinc-700 rounded-full h-2.5">
          <div className="bg-[var(--primary-green)] h-2.5 rounded-full" style={{ width: `${consensus}%`, transition: 'width 0.5s ease-in-out' }}></div>
        </div>
      </div>
      <Button
        className={`w-full mt-4 font-bold py-3 rounded-lg transition-colors h-auto ${
          isClosed
            ? 'bg-zinc-700 text-[var(--text-secondary-light)] cursor-not-allowed'
            : 'bg-[var(--primary-green)] text-black hover:bg-emerald-500'
        }`}
        disabled={isClosed}
      >
        {isClosed ? 'View Results' : 'Vote Now'}
      </Button>
    </div>
  );
};