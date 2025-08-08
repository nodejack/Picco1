import { PredictionsHeader } from "@/components/picco/PredictionsHeader";
import { PredictionsFeed } from "@/components/picco/PredictionsFeed";
import { PageLayout } from "@/components/picco/PageLayout";

const PredictionsPage = () => {
  return (
    <PageLayout>
      <PredictionsHeader />
      <PredictionsFeed />
    </PageLayout>
  );
};

export default PredictionsPage;