import { LeaderboardUser } from './LeaderboardUser';

const leaderboardData = [
  { 
    rank: 1, 
    name: 'CryptoKing', 
    isVerified: true, 
    correct: 284, 
    streak: 15, 
    isFollowing: false, 
    rankChange: 'up' as const 
  },
  { 
    rank: 2, 
    name: 'DiamondHands', 
    isVerified: true, 
    correct: 267, 
    streak: 12, 
    isFollowing: true, 
    rankChange: null 
  },
  { 
    rank: 3, 
    name: 'Satoshi Jr.', 
    isVerified: false, 
    correct: 251, 
    streak: 8, 
    isFollowing: false, 
    rankChange: 'down' as const 
  },
  { 
    rank: 4, 
    name: 'ToTheMoon', 
    isVerified: true, 
    correct: 243, 
    streak: 22, 
    isFollowing: false, 
    rankChange: 'up' as const 
  },
  { 
    rank: 5, 
    name: 'LaserEyes', 
    isVerified: false, 
    correct: 238, 
    streak: 5, 
    isFollowing: true, 
    rankChange: null 
  },
  { 
    rank: 6, 
    name: 'Hodler', 
    isVerified: true, 
    correct: 229, 
    streak: 18, 
    isFollowing: false, 
    rankChange: 'up' as const 
  },
  { 
    rank: 7, 
    name: 'WhaleWatcher', 
    isVerified: false, 
    correct: 221, 
    streak: 3, 
    isFollowing: false, 
    rankChange: 'down' as const 
  },
  { 
    rank: 8, 
    name: 'AltcoinQueen', 
    isVerified: true, 
    correct: 215, 
    streak: 11, 
    isFollowing: true, 
    rankChange: null 
  },
  { 
    rank: 9, 
    name: 'FOMO_Sapien', 
    isVerified: false, 
    correct: 208, 
    streak: 7, 
    isFollowing: false, 
    rankChange: 'up' as const 
  },
  { 
    rank: 10, 
    name: 'CryptoNinja', 
    isVerified: true, 
    correct: 201, 
    streak: 14, 
    isFollowing: false, 
    rankChange: 'down' as const 
  },
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