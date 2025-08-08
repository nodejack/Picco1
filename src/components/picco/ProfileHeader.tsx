import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ProfileHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 border-b border-[var(--border-color)] bg-[var(--background-dark)]">
      <div className="container mx-auto flex h-full items-center px-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="ml-4 text-2xl font-bold">Profile</h2>
      </div>
    </header>
  );
};