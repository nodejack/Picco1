import { LeaderboardHeader } from "@/components/picco/LeaderboardHeader";
import { LeaderboardList } from "@/components/picco/LeaderboardList";
import { Navigation } from "@/components/picco/Navigation";

const LeaderboardPage = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] min-h-screen">
      <Navigation />
      <main className="pb-20 md:pb-0 md:pl-64">
        <LeaderboardHeader />
        <LeaderboardList />
      </main>
    </div>
  );
};

export default LeaderboardPage;