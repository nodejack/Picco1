import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MarketMoverCard } from './MarketMoverCard';
import { MarketMoverCardSkeleton } from './MarketMoverCardSkeleton';
import { AlertCircle } from 'lucide-react';

// Define the structure of the data we expect from the CoinGecko API
interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

// Function to fetch the top 15 coins from the CoinGecko API
const fetchMarketMovers = async (): Promise<Coin[]> => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const MarketMoversCarousel = () => {
  const { data: marketMovers, isLoading, isError } = useQuery<Coin[]>({
    queryKey: ['marketMovers'],
    queryKeyHash: 'marketMovers', // Add this line
    queryFn: fetchMarketMovers,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  return (
    <section className="px-4 pt-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {isLoading && (
            Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-2 basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <MarketMoverCardSkeleton />
                </div>
              </CarouselItem>
            ))
          )}
          {isError && (
            <CarouselItem className="w-full">
              <div className="bg-red-900/50 text-red-400 p-4 rounded-lg flex items-center gap-2">
                <AlertCircle size={20} />
                <span>Error fetching market data.</span>
              </div>
            </CarouselItem>
          )}
          {marketMovers?.map((mover) => (
            <CarouselItem key={mover.id} className="pl-2 basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="p-1">
                <MarketMoverCard
                  icon={mover.image}
                  ticker={mover.symbol.toUpperCase()}
                  price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(mover.current_price)}
                  change={mover.price_change_percentage_24h}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};