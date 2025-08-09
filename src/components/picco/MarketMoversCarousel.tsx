import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!marketMovers || marketMovers.length === 0) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.children[0]?.clientWidth || 280;
        const gap = 16; // 1rem gap
        const scrollAmount = cardWidth + gap;
        
        if (currentIndex >= marketMovers.length - 1) {
          // Reset to beginning
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentIndex(0);
        } else {
          // Scroll to next
          const nextScrollLeft = (currentIndex + 1) * scrollAmount;
          container.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, marketMovers]);

  // Update scroll buttons state
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons(); // Initial check
      
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, [marketMovers]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280;
      const gap = 16;
      scrollContainerRef.current.scrollBy({ 
        left: -(cardWidth + gap), 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280;
      const gap = 16;
      scrollContainerRef.current.scrollBy({ 
        left: cardWidth + gap, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="pt-4">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-4">Market Movers</h2>
      </div>
      
      <div className="relative">
        {/* Scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-2"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {isLoading && (
            Array.from({ length: 5 }).map((_, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[280px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <MarketMoverCardSkeleton />
              </div>
            ))
          )}
          
          {isError && (
            <div className="flex-shrink-0 w-full">
              <div className="bg-red-900/50 text-red-400 p-4 rounded-lg flex items-center gap-2">
                <AlertCircle size={20} />
                <span>Error fetching market data.</span>
              </div>
            </div>
          )}
          
          {marketMovers?.map((mover) => (
            <div 
              key={mover.id} 
              className="flex-shrink-0 w-[280px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <MarketMoverCard
                icon={mover.image}
                ticker={mover.symbol.toUpperCase()}
                price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(mover.current_price)}
                change={mover.price_change_percentage_24h}
              />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        {marketMovers && marketMovers.length > 0 && (
          <div className="flex justify-center gap-2 mt-4 px-4">
            {Array.from({ length: Math.min(marketMovers.length, 8) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 280;
                    const gap = 16;
                    const scrollLeft = index * (cardWidth + gap);
                    scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                    setCurrentIndex(index);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-4 bg-[var(--primary-green)]' : 'w-2 bg-zinc-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};