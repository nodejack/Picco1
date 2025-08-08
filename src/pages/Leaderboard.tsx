import { LeaderboardHeader } from "@/components/picco/LeaderboardHeader";
import { LeaderboardList } from "@/components/picco/LeaderboardList";
import { Navigation } from "@/components/picco/Navigation";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const LeaderboardPage = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] min-h-screen">
      <Navigation />
      <div className={cn("transition-all duration-300", isCollapsed ? "md:pl-20" : "md:pl-64")}>
        <LeaderboardHeader />
        <main className="pb-20 md:pb-0">
          <LeaderboardList />
        </main>
      </div>
    </div>
  );
};

export default LeaderboardPage;