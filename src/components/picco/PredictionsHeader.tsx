import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export const PredictionsHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 border-b border-[var(--border-color)] bg-[var(--background-dark)]">
      <div className="container mx-auto flex h-full items-center justify-between gap-4 px-4">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search predictions..."
            className="bg-[var(--surface-dark)] pl-10 border-[var(--border-color)] focus:ring-[var(--primary-green)]"
          />
        </div>
        <Tabs defaultValue="all" className="hidden sm:block">
          <TabsList className="bg-[var(--surface-dark)] border border-[var(--border-color)]">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="my-predictions" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              My Predictions
            </TabsTrigger>
            <TabsTrigger 
              value="following" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};