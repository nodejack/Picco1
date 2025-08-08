import { Header } from "@/components/picco/Header";
import { MarketMoversCarousel } from "@/components/picco/MarketMoversCarousel";
import { HotPredictionCard } from "@/components/picco/HotPredictionCard";
import { PredictionList } from "@/components/picco/PredictionList";
import { LeaderboardSnippet } from "@/components/picco/LeaderboardSnippet";
import { Navigation } from "@/components/picco/Navigation";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const Index = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <Header />
      <Navigation />
      <main className={cn(
        "pt-16 pb-20 transition-all duration-300 md:pb-0",
        isCollapsed ? "md:pl-20" : "md:pl-64"
      )}>
        <MarketMoversCarousel />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          <HotPredictionCard />
          <LeaderboardSnippet />
        </div>

        <PredictionList />
      </main>
    </div>
  );
};

export default Index;