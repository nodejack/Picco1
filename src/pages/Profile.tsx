import { Navigation } from "@/components/picco/Navigation";
import { ProfileHeader } from "@/components/picco/ProfileHeader";
import { ProfileInfo } from "@/components/picco/ProfileInfo";
import { ProfileStats } from "@/components/picco/ProfileStats";
import { Achievements } from "@/components/picco/Achievements";
import { RecentActivity } from "@/components/picco/RecentActivity";
import { Referrals } from "@/components/picco/Referrals";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <ProfileHeader />
      <Navigation />
      <main className={cn(
        "pt-16 pb-20 transition-all duration-300 md:pb-0",
        isCollapsed ? "md:pl-20" : "md:pl-64"
      )}>
        <div className="p-4 sm:p-6">
          <ProfileInfo />
          <ProfileStats />
          <Achievements />
          <RecentActivity />
          <Referrals />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;