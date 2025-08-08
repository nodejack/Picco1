import { PredictionsHeader } from "@/components/picco/PredictionsHeader";
import { PredictionsFeed } from "@/components/picco/PredictionsFeed";
import { Footer } from "@/components/picco/Footer";

const PredictionsPage = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <div className="relative flex flex-col min-h-screen overflow-x-hidden">
        <PredictionsHeader />
        <PredictionsFeed />
        <Footer />
      </div>
    </div>
  );
};

export default PredictionsPage;