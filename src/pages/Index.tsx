import { Header } from "@/components/picco/Header";
import { MarketMoversCarousel } from "@/components/picco/MarketMoversCarousel";
import { HotPredictionCard } from "@/components/picco/HotPredictionCard";
import { PredictionList } from "@/components/picco/PredictionList";
import { LeaderboardSnippet } from "@/components/picco/LeaderboardSnippet";
import { Footer } from "@/components/picco/Footer";

const Index = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <div className="relative flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow pb-20">
          <MarketMoversCarousel />
          <HotPredictionCard />
          <PredictionList />
          <LeaderboardSnippet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;