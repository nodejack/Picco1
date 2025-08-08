import { Header } from "@/components/picco/Header";
import { MarketMoversCarousel } from "@/components/picco/MarketMoversCarousel";
import { HotPredictionCard } from "@/components/picco/HotPredictionCard";
import { PredictionList } from "@/components/picco/PredictionList";
import { LeaderboardSnippet } from "@/components/picco/LeaderboardSnippet";
import { PageLayout } from "@/components/picco/PageLayout";

const Index = () => {
  return (
    <PageLayout>
      <Header />
      <main className="flex-grow pb-20 lg:pb-8">
        <MarketMoversCarousel />
        <HotPredictionCard />
        <PredictionList />
        <LeaderboardSnippet />
      </main>
    </PageLayout>
  );
};

export default Index;