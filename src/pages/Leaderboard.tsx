import { LeaderboardHeader } from "@/components/picco/LeaderboardHeader";
import { LeaderboardList } from "@/components/picco/LeaderboardList";
import { Footer } from "@/components/picco/Footer";

const LeaderboardPage = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <div className="relative flex flex-col min-h-screen overflow-x-hidden pb-20">
        <LeaderboardHeader />
        <LeaderboardList />
        <Footer />
      </div>
    </div>
  );
};

export default LeaderboardPage;