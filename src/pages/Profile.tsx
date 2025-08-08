import { Footer } from "@/components/picco/Footer";
import { ProfileHeader } from "@/components/picco/ProfileHeader";
import { ProfileInfo } from "@/components/picco/ProfileInfo";
import { ProfileStats } from "@/components/picco/ProfileStats";
import { Achievements } from "@/components/picco/Achievements";
import { RecentActivity } from "@/components/picco/RecentActivity";
import { Referrals } from "@/components/picco/Referrals";

const ProfilePage = () => {
  return (
    <div className="bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <div className="relative flex flex-col min-h-screen">
        <ProfileHeader />
        <main className="flex-grow p-4 sm:p-6 pb-20">
          <ProfileInfo />
          <ProfileStats />
          <Achievements />
          <RecentActivity />
          <Referrals />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;