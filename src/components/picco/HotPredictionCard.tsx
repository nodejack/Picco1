import React from 'react';
import { CountdownTimer } from './CountdownTimer';

export const HotPredictionCard = () => {
  return (
    <section className="p-4 mt-4">
      <div className="glassmorphic rounded-2xl p-6">
        <h2 className="text-lg font-bold text-center mb-2">Today's Hot Prediction</h2>
        <p className="text-2xl font-bold text-center mb-6">Will ETH close above $2,950 today?</p>
        <div className="flex justify-center items-center gap-4 mb-6">
          <button className="w-full py-4 text-xl font-bold rounded-2xl bg-[rgba(25,230,162,0.2)] text-[var(--primary-green)] border-2 border-[var(--primary-green)] btn-glow-green">
            YES
          </button>
          <button className="w-full py-4 text-xl font-bold rounded-2xl bg-[rgba(255,77,77,0.2)] text-[var(--primary-red)] border-2 border-[var(--primary-red)] btn-glow-red">
            NO
          </button>
        </div>
        <CountdownTimer />
      </div>
    </section>
  );
};