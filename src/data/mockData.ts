import { User } from "@/types";

export const mockLeaderboardData: User[] = [
  { id: 1, name: 'Cygnus', score: 1500, change: 50, isVerified: true, avatar: '/avatars/avatar1.png' },
  { id: 2, name: 'Orion', score: 1450, change: -20, isVerified: true, avatar: '/avatars/avatar2.png' },
  { id: 3, name: 'Lyra', score: 1420, change: 100, isVerified: false, avatar: '/avatars/avatar3.png' },
  { id: 4, name: 'Aquila', score: 1380, change: 0, isVerified: true, avatar: '/avatars/avatar4.png' },
  { id: 5, name: 'Pegasus', score: 1350, change: 75, isVerified: false, avatar: '/avatars/avatar5.png' },
  { id: 6, name: 'Draco', score: 1300, change: -50, isVerified: true, avatar: '/avatars/avatar6.png' },
  { id: 7, name: 'Vela', score: 1280, change: 120, isVerified: false, avatar: '/avatars/avatar7.png' },
  { id: 8, name: 'Centaurus', score: 1250, change: 30, isVerified: true, avatar: '/avatars/avatar8.png' },
  { id: 9, name: 'Andromeda', score: 1200, change: -10, isVerified: false, avatar: '/avatars/avatar9.png' },
  { id: 10, name: 'Cassiopeia', score: 1180, change: 90, isVerified: true, avatar: '/avatars/avatar10.png' },
];

export const mockWeeklyLeaderboardData: User[] = [
  { id: 7, name: 'Vela', score: 1280, change: 120, isVerified: false, avatar: '/avatars/avatar7.png' },
  { id: 3, name: 'Lyra', score: 1420, change: 100, isVerified: false, avatar: '/avatars/avatar3.png' },
  { id: 10, name: 'Cassiopeia', score: 1180, change: 90, isVerified: true, avatar: '/avatars/avatar10.png' },
  { id: 5, name: 'Pegasus', score: 1350, change: 75, isVerified: false, avatar: '/avatars/avatar5.png' },
  { id: 1, name: 'Cygnus', score: 1500, change: 50, isVerified: true, avatar: '/avatars/avatar1.png' },
  { id: 8, name: 'Centaurus', score: 1250, change: 30, isVerified: true, avatar: '/avatars/avatar8.png' },
  { id: 4, name: 'Aquila', score: 1380, change: 0, isVerified: true, avatar: '/avatars/avatar4.png' },
  { id: 9, name: 'Andromeda', score: 1200, change: -10, isVerified: false, avatar: '/avatars/avatar9.png' },
  { id: 2, name: 'Orion', score: 1450, change: -20, isVerified: true, avatar: '/avatars/avatar2.png' },
  { id: 6, name: 'Draco', score: 1300, change: -50, isVerified: true, avatar: '/avatars/avatar6.png' },
].sort((a, b) => b.change - a.change);

export const mockDailyLeaderboardData: User[] = [
  { id: 8, name: 'Centaurus', score: 30, change: 30, isVerified: true, avatar: '/avatars/avatar8.png' },
  { id: 1, name: 'Cygnus', score: 15, change: 15, isVerified: true, avatar: '/avatars/avatar1.png' },
  { id: 5, name: 'Pegasus', score: 12, change: 12, isVerified: false, avatar: '/avatars/avatar5.png' },
  { id: 3, name: 'Lyra', score: 10, change: 10, isVerified: false, avatar: '/avatars/avatar3.png' },
  { id: 10, name: 'Cassiopeia', score: 8, change: 8, isVerified: true, avatar: '/avatars/avatar10.png' },
  { id: 4, name: 'Aquila', score: 0, change: 0, isVerified: true, avatar: '/avatars/avatar4.png' },
  { id: 9, name: 'Andromeda', score: -2, change: -2, isVerified: false, avatar: '/avatars/avatar9.png' },
  { id: 2, name: 'Orion', score: -5, change: -5, isVerified: true, avatar: '/avatars/avatar2.png' },
  { id: 6, name: 'Draco', score: -8, change: -8, isVerified: true, avatar: '/avatars/avatar6.png' },
  { id: 7, name: 'Vela', score: -15, change: -15, isVerified: false, avatar: '/avatars/avatar7.png' },
].sort((a, b) => b.score - a.score);