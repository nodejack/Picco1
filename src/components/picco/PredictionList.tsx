import React from 'react';
import { PredictionCard } from './PredictionCard';

const predictions = [
  { coin: 'BTC/USDT', question: 'Will BTC break $65,000?', percentage: 65 },
  { coin: 'SOL/USDT', question: 'Will SOL reach $150?', percentage: 40 },
  { coin: 'ETH/USDT', question: 'Will ETH hold $2,900 support?', percentage: 80 },
];

export const PredictionList = () => {
  return (
    <section className="px-4 mt-6">
      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <PredictionCard key={index} {...prediction} />
        ))}
      </div>
    </section>
  );
};