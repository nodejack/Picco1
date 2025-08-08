import React from 'react';
import { LeaderboardUser } from './LeaderboardUser';

const leaderboardData = [
  { rank: 1, name: 'CryptoKing', avatar: 'https://robohash.org/CryptoKing.png', points: 12500, isCurrentUser: false },
  { rank: 2, name: 'DiamondHands', avatar: 'https://robohash.org/DiamondHands.png', points: 11800, isCurrentUser: false },
  { rank: 3, name: 'Satoshi Jr.', avatar: 'https://robohash.org/Satoshi%20Jr.png', points: 11250, isCurrentUser: false },
  { rank: 4, name: 'You', avatar: 'https://robohash.org/You.png', points: 10500, isCurrentUser: true },
  { rank: 5, name: 'ToTheMoon', avatar: 'https://robohash.org/ToTheMoon.png', points: 9800, isCurrentUser: false },
  { rank: 6, name: 'LaserEyes', avatar: 'https://robohash.org/LaserEyes.png', points: 9200, isCurrentUser: false },
  { rank: 7, name: 'Hodler', avatar: 'https://robohash.org/Hodler.png', points: 8750, isCurrentUser: false },
  { rank: 8, name: 'WhaleWatcher', avatar: 'https://robohash.org/WhaleWatcher.png', points: 8100, isCurrentUser: false },
  { rank: 9, name: 'AltcoinQueen', avatar: 'https://robohash.org/AltcoinQueen.png', points: 7600, isCurrentUser: false },
  { rank: 10, name: 'FOMO_Sapien', avatar: 'https://robohash.org/FOMO_Sapien.png', points: 7100, isCurrentUser: false },
];

export const Leaderboard = () => {
  return (
    <div className="p-4 space-y-4">
      {leaderboardData.map((user) => (
        <LeaderboardUser key={user.rank} {...user} />
      ))}
    </div>
  );
};