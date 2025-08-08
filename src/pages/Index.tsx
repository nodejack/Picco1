import { Header } from "@/components/picco/Header";
import { MarketMoversCarousel } from "@/components/picco/MarketMoversCarousel";
import { HotPredictionCard } from "@/components/picco/HotPredictionCard";
import { PredictionList } from "@/components/picco/PredictionList";
import { LeaderboardSnippet } from "@/components/picco/LeaderboardSnippet";
import { Navigation } from "@/components/picco/Navigation";

const Index = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] min-h-screen">
      <Navigation />
      <main className="pb-20 md:pb-0 md:pl-64">
        <Header />
        <MarketMoversCarousel />
        <HotPredictionCard />
        <PredictionList />
        <LeaderboardSnippet />
      </main>
    </div>
  );
};

export default Index;