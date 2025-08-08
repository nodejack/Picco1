import { ArrowRight, Bell, Bitcoin, Gem, Search } from 'lucide-react';
import { MarketMoverCard } from '@/components/picco/MarketMoverCard';
import { PredictionCard } from '@/components/picco/PredictionCard';
import { LeaderboardPreview } from '@/components/picco/LeaderboardPreview';

const marketMovers = [
  { name: 'Bitcoin', price: '$68,420.00', change: '+5.2%', icon: <Bitcoin className="size-6 text-yellow-400" /> },
  { name: 'Ethereum', price: '$3,560.50', change: '+4.1%', icon: <Gem className="size-6 text-gray-400" /> },
  { name: 'Solana', price: '$150.80', change: '-2.5%', icon: <div className="size-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" /> },
  { name: 'Dogecoin', price: '$0.158', change: '+8.9%', icon: <div className="size-6 rounded-full bg-yellow-500 p-0.5"><img src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=032" alt="Doge" /></div> },
];

const predictions = [
  {
    id: '2',
    title: 'Will Ethereum cross $4,000 by the end of the week?',
    icon: <Gem className="size-8 text-gray-400" />,
    timeLeft: '3d 12h',
    consensus: '75% Yes',
  },
  {
    id: '3',
    title: 'Will Solana reach $200 in the next 30 days?',
    icon: <div className="size-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />,
    timeLeft: '28d 4h',
    consensus: '60% Yes',
  },
];

const topUsers = [
  { rank: 1, name: 'Alex', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=1' },
  { rank: 2, name: 'Brie', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=2' },
  { rank: 3, name: 'Charlie', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=3' },
];

export const IndexPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Picco</span>
        </h1>
        <div className="flex items-center gap-4">
          <Search className="size-6 text-[var(--text-secondary-light)]" />
          <Bell className="size-6 text-[var(--text-secondary-light)]" />
        </div>
      </header>

      <main className="p-4 pt-0">
        <section>
          <h2 className="text-lg font-semibold">Market Movers</h2>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none]">
            {marketMovers.map((mover) => (
              <MarketMoverCard key={mover.name} {...mover} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Today's Hot Prediction</h2>
          <PredictionCard
            id="1"
            title="Will Bitcoin hit $70,000 by midnight?"
            icon={<Bitcoin className="size-8 text-yellow-400" />}
            timeLeft="8h 24m"
            isHot
          />
        </section>

        <section className="mt-6">
          {predictions.map((prediction) => (
            <PredictionCard key={prediction.id} {...prediction} />
          ))}
        </section>

        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Leaderboard</h2>
            <a href="/leaderboard" className="flex items-center gap-1 text-sm text-[var(--primary-green)]">
              View All <ArrowRight className="size-4" />
            </a>
          </div>
          <LeaderboardPreview users={topUsers} />
        </section>
      </main>
    </div>
  );
};