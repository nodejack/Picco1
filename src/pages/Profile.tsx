import { Navigation } from "@/components/picco/Navigation";
import { ProfileHeader } from "@/components/picco/ProfileHeader";
import { ProfileInfo } from "@/components/picco/ProfileInfo";
import { ProfileStats } from "@/components/picco/ProfileStats";
import { Achievements } from "@/components/picco/Achievements";
import { RecentActivity } from "@/components/picco/RecentActivity";
import { Referrals } from "@/components/picco/Referrals";

const ProfilePage = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)] min-h-screen">
      <Navigation />
      <main className="pb-20 md:pb-0 md:pl-64">
        <ProfileHeader />
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