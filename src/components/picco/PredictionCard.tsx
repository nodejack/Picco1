import React from 'react';

interface PredictionCardProps {
  coin: string;
  question: string;
  percentage: number;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ coin, question, percentage }) => {
  return (
    <div className="bg-[var(--surface-dark)] rounded-lg p-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold">{coin}</h3>
        <p className="text-xs text-[var(--text-secondary-light)]">{question}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-full bg-gray-700 rounded-full h-2.5 progress-bar-animated">
          <div className="bg-[var(--primary-green)] h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="text-base font-bold w-12 text-right">{percentage}%</span>
      </div>
    </div>
  );
};