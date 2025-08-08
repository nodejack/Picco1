import { cn } from "@/lib/utils";

export const LeaderboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 border-b border-[var(--border-color)] bg-[var(--background-dark)]">
      <div className="container mx-auto flex h-full items-center justify-center px-4">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
      </div>
    </header>
  );
};