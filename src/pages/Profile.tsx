import { ProfileHeader } from "@/components/picco/ProfileHeader";
import { ProfileInfo } from "@/components/picco/ProfileInfo";
import { ProfileStats } from "@/components/picco/ProfileStats";
import { Achievements } from "@/components/picco/Achievements";
import { RecentActivity } from "@/components/picco/RecentActivity";
import { Referrals } from "@/components/picco/Referrals";
import { PageLayout } from "@/components/picco/PageLayout";

const ProfilePage = () => {
  return (
    <PageLayout>
      <ProfileHeader />
      <main className="flex-grow p-4 sm:p-6 pb-20 lg:pb-8">
        <ProfileInfo />
        <ProfileStats />
        <Achievements />
        <RecentActivity />
        <Referrals />
      </main>
    </PageLayout>
  );
};

export default ProfilePage;