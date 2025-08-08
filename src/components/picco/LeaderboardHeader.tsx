import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const LeaderboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-auto border-b border-[var(--border-color)] bg-[var(--background-dark)]">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-3">
        <h2 className="text-2xl font-bold mb-3">Leaderboard</h2>
        <Tabs defaultValue="global">
          <TabsList className="bg-[var(--surface-dark)] border border-[var(--border-color)]">
            <TabsTrigger 
              value="global" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              Global
            </TabsTrigger>
            <TabsTrigger 
              value="weekly" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger 
              value="daily" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              Daily
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};