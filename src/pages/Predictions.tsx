import { PredictionsHeader } from "@/components/picco/PredictionsHeader";
import { PredictionsFeed } from "@/components/picco/PredictionsFeed";
import { Navigation } from "@/components/picco/Navigation";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const PredictionsPage = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <PredictionsHeader />
      <Navigation />
      <main className={cn(
        "pt-16 pb-24 transition-all duration-300 md:pb-0",
        isCollapsed ? "md:pl-20" : "md:pl-64"
      )} style={{ paddingBottom: 'calc(6rem + max(8px, env(safe-area-inset-bottom)))' }}>
        <PredictionsFeed />
      </main>
    </div>
  );
};

export default PredictionsPage;