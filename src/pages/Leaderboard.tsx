import { LeaderboardHeader } from "@/components/picco/LeaderboardHeader";
import { LeaderboardList } from "@/components/picco/LeaderboardList";
import { Navigation } from "@/components/picco/Navigation";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const LeaderboardPage = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <LeaderboardHeader />
      <Navigation />
      <main className={cn(
        "pt-16 pb-20 transition-all duration-300 md:pb-0",
        isCollapsed ? "md:pl-20" : "md:pl-64"
      )}>
        <LeaderboardList />
      </main>
    </div>
  );
};

export default LeaderboardPage;