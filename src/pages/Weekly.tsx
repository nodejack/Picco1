import { Header } from "@/components/picco/Header";
import { Leaderboard } from "@/components/picco/Leaderboard";
import { LeaderboardHeader } from "@/components/picco/LeaderboardHeader";
import { mockWeeklyLeaderboardData } from "@/data/mockData";

export default function Weekly() {
  return (
    <div className="bg-[var(--background-dark)] min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <LeaderboardHeader />
        <Leaderboard data={mockWeeklyLeaderboardData} />
      </main>
    </div>
  );
}