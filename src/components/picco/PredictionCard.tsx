import React from 'react';

interface PredictionCardProps {
  coin: string;
  question: string;
  percentage: number;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ coin, question, percentage }) => {
  return (
    <div className="bg-[var(--surface-dark)] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold">{coin}</h3>
        <p className="text-sm text-[var(--text-secondary-light)]">{question}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-full bg-gray-700 rounded-full h-4 progress-bar-animated">
          <div className="bg-[var(--primary-green)] h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="text-lg font-bold w-16 text-right">{percentage}%</span>
      </div>
    </div>
  );
};