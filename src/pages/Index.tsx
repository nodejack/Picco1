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
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] min-h-screen">
      <Navigation />
      <div className={cn("transition-all duration-300", isCollapsed ? "md:pl-20" : "md:pl-64")}>
        <Header />
        <main className="pb-20 md:pb-0">
          <MarketMoversCarousel />
          <HotPredictionCard />
          <PredictionList />
          <LeaderboardSnippet />
        </main>
      </div>
    </div>
  );
};

export default Index;