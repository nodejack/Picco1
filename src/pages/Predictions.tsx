import { PredictionsHeader } from "@/components/picco/PredictionsHeader";
import { PredictionsFeed } from "@/components/picco/PredictionsFeed";
import { Navigation } from "@/components/picco/Navigation";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const PredictionsPage = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] min-h-screen">
      <Navigation />
      <div className={cn("transition-all duration-300", isCollapsed ? "md:pl-20" : "md:pl-64")}>
        <PredictionsHeader />
        <main className="pb-20 md:pb-0">
          <PredictionsFeed />
        </main>
      </div>
    </div>
  );
};

export default PredictionsPage;