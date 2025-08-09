import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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
    queryFn: fetchMarketMovers,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="pt-4">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-4">Market Movers</h2>
      </div>
      <div className="w-full overflow-hidden">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1 pl-4">
            {isLoading && (
              Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 basis-[calc(100vw-120px)] min-[480px]:basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/4">
                  <MarketMoverCardSkeleton />
                </CarouselItem>
              ))
            )}
            {isError && (
              <CarouselItem className="pl-1 basis-full">
                <div className="bg-red-900/50 text-red-400 p-4 rounded-lg flex items-center gap-2 mr-4">
                  <AlertCircle size={20} />
                  <span>Error fetching market data.</span>
                </div>
              </CarouselItem>
            )}
            {marketMovers?.map((mover) => (
              <CarouselItem key={mover.id} className="pl-1 basis-[calc(100vw-120px)] min-[480px]:basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/4">
                <MarketMoverCard
                  icon={mover.image}
                  ticker={mover.symbol.toUpperCase()}
                  price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(mover.current_price)}
                  change={mover.price_change_percentage_24h}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? 'w-4 bg-[var(--primary-green)]' : 'w-2 bg-zinc-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};