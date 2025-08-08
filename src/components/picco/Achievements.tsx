import React from 'react';

const achievements = [
  { name: 'Early Adopter', image: 'https://images.unsplash.com/photo-1611924434489-85c1b0d6c16a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Prediction Pro', image: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=800&auto=format&fit=crop' },
  { name: 'Referral Rockstar', image: 'https://images.unsplash.com/photo-1588590570312-359a154a7527?q=80&w=800&auto=format&fit=crop' },
  { name: 'Daily Streak', image: 'https://images.unsplash.com/photo-1528929537232-998648138098?q=80&w=800&auto=format&fit=crop' },
];

export const Achievements = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Achievements</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.name} className="flex flex-col gap-2">
            <img
              alt={`${achievement.name} Badge`}
              className="aspect-square w-full rounded-lg object-cover"
              src={achievement.image}
            />
            <p className="text-sm font-medium">{achievement.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};