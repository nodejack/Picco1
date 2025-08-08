import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MarketMoverCard } from './MarketMoverCard';

const marketMovers = [
  { icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032', ticker: 'BTC', price: '$68,420.69', change: 2.5 },
  { icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032', ticker: 'ETH', price: '$3,550.12', change: -1.2 },
  { icon: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=032', ticker: 'SOL', price: '$150.78', change: 5.8 },
  { icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=032', ticker: 'BNB', price: '$580.45', change: 0.5 },
  { icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032', ticker: 'XRP', price: '$0.52', change: -3.1 },
  { icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=032', ticker: 'ADA', price: '$0.45', change: 1.9 },
  { icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=032', ticker: 'DOGE', price: '$0.15', change: 12.3 },
  { icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=032', ticker: 'AVAX', price: '$35.67', change: -0.8 },
  { icon: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=032', ticker: 'SHIB', price: '$0.000025', change: 8.1 },
  { icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=032', ticker: 'DOT', price: '$7.15', change: 2.2 },
  { icon: 'https://cryptologos.cc/logos/chainlink-link-logo.png?v=032', ticker: 'LINK', price: '$15.80', change: -1.5 },
  { icon: 'https://cryptologos.cc/logos/tron-trx-logo.png?v=032', ticker: 'TRX', price: '$0.12', change: 0.1 },
  { icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=032', ticker: 'MATIC', price: '$0.72', change: 3.4 },
  { icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=032', ticker: 'LTC', price: '$85.20', change: -2.0 },
  { icon: 'https://cryptologos.cc/logos/internet-computer-icp-logo.png?v=032', ticker: 'ICP', price: '$12.50', change: 6.7 },
  { icon: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=032', ticker: 'UNI', price: '$10.10', change: 4.5 },
];

export const MarketMoversCarousel = () => {
  return (
    <section className="px-4 pt-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {marketMovers.map((mover, index) => (
            <CarouselItem key={index} className="pl-2 basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="p-1">
                <MarketMoverCard {...mover} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};