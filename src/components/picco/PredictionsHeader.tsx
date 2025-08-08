import { Input } from "@/components/ui/input";
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
      </div>
    </header>
  );
};