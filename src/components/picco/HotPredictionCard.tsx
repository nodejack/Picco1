import React from 'react';
import { CountdownTimer } from './CountdownTimer';

export const HotPredictionCard = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Today's Hot Prediction</h2>
      <div className="glassmorphic rounded-2xl p-4 flex flex-col">
        <p className="text-lg font-bold text-center mb-4">Will ETH close above $2,950 today?</p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <button className="w-full py-2 text-lg font-bold rounded-xl bg-[var(--primary-green)] text-[var(--background-dark)] hover:bg-emerald-500 transition-colors">
            YES
          </button>
          <button className="w-full py-2 text-lg font-bold rounded-xl bg-[var(--primary-red)] text-white hover:bg-red-500 transition-colors">
            NO
          </button>
        </div>
        <div className="mt-auto">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};