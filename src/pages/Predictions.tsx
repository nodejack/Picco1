import { PredictionsHeader } from "@/components/picco/PredictionsHeader";
import { PredictionsFeed } from "@/components/picco/PredictionsFeed";
import { Navigation } from "@/components/picco/Navigation";

const PredictionsPage = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] min-h-screen">
      <Navigation />
      <main className="pb-20 md:pb-0 md:pl-64">
        <PredictionsHeader />
        <PredictionsFeed />
      </main>
    </div>
  );
};

export default PredictionsPage;