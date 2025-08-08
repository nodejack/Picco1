import { LeaderboardHeader } from "@/components/picco/LeaderboardHeader";
import { LeaderboardList } from "@/components/picco/LeaderboardList";
import { PageLayout } from "@/components/picco/PageLayout";

const LeaderboardPage = () => {
  return (
    <PageLayout>
      <LeaderboardHeader />
      <LeaderboardList />
    </PageLayout>
  );
};

export default LeaderboardPage;