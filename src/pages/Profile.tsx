import { ChevronLeft, Copy } from 'lucide-react';
import { ProfileInfo } from '@/components/picco/ProfileInfo';
import { ProfileStats } from '@/components/picco/ProfileStats';
import { Achievements } from '@/components/picco/Achievements';
import { RecentActivity } from '@/components/picco/RecentActivity';
import { toast } from 'sonner';

const referralCode = 'PICCO-ALEX-2024';

export const ProfilePage = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success('Referral code copied!');
  };

  return (
    <div className="min-h-screen bg-[var(--background-dark)] p-4 text-[var(--text-primary-light)]">
      <header className="flex items-center">
        <button className="p-2">
          <ChevronLeft className="size-6" />
        </button>
        <h1 className="flex-grow text-center text-xl font-bold">Profile</h1>
        <div className="w-8"></div>
      </header>

      <main className="mt-6">
        <ProfileInfo
          avatar="https://source.unsplash.com/150x150/?portrait&sig=1"
          name="Alex"
          handle="@alex_crypto"
          isVerified={true}
        />
        <ProfileStats />
        <Achievements />
        <RecentActivity />

        <section className="mt-8">
          <h2 className="text-xl font-bold">Refer a Friend</h2>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[var(--surface-dark)] p-4">
            <p className="font-mono text-lg text-[var(--text-secondary-light)]">{referralCode}</p>
            <button onClick={handleCopy} className="flex items-center gap-2 rounded-lg bg-[var(--primary-green)] px-4 py-2 text-sm font-bold text-black">
              <Copy className="size-4" />
              Copy
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;