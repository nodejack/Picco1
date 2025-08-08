import React from 'react';
import { PredictionFeedCard } from './PredictionFeedCard';

const predictionsData = [
  {
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    name: 'Ethereum',
    ticker: 'ETH',
    timeLeft: '2d 12h left',
    question: 'Will ETH reach $3,000 by Dec 31?',
    userPrediction: { choice: 'Yes' as const, amount: 100 },
    consensus: 75,
    status: 'active' as const,
  },
  {
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/btc.svg',
    name: 'Bitcoin',
    ticker: 'BTC',
    timeLeft: 'Closed',
    question: 'Will BTC reach $50,000 by Dec 31?',
    userPrediction: { choice: 'No' as const, amount: 50 },
    consensus: 60,
    status: 'closed' as const,
  },
  {
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/sol.svg',
    name: 'Solana',
    ticker: 'SOL',
    timeLeft: '1d 4h left',
    question: 'Will SOL reach $200 by Dec 31?',
    consensus: 80,
    status: 'unpredicted' as const,
  },
  {
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/ada.svg',
    name: 'Cardano',
    ticker: 'ADA',
    timeLeft: '5d 8h left',
    question: 'Will ADA price surpass $0.50 this month?',
    consensus: 45,
    status: 'unpredicted' as const,
  },
];

export const PredictionsFeed = () => {
  return (
    <main className="flex-grow p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
      {predictionsData.map((prediction, index) => (
        <PredictionFeedCard key={index} {...prediction} />
      ))}
    </main>
  );
};