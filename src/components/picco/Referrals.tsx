import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const Referrals = () => {
  const { toast } = useToast();
  const referralCode = 'PICCO-X42';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Copied to clipboard!",
      description: "Your referral code has been copied.",
    });
  };

  return (
    <section className="mt-6 rounded-lg bg-[var(--surface-dark)] p-4 text-center">
      <h2 className="text-base font-bold">Referrals</h2>
      <p className="mt-1 text-xs text-[var(--text-secondary-light)]">
        Share your unique code and earn rewards for every friend who joins.
      </p>
      <div className="relative mt-3">
        <Input
          className="w-full rounded-md border-2 border-dashed border-[var(--border-color)] bg-[var(--background-dark)] py-2 pl-3 pr-10 text-center text-sm font-medium tracking-widest text-emerald-300 h-auto"
          readOnly
          type="text"
          value={referralCode}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute inset-y-0 right-0 flex items-center pr-2 text-[var(--text-secondary-light)] h-full hover:bg-transparent"
          onClick={copyToClipboard}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <Button className="mt-3 w-full rounded-md bg-[var(--primary-green)] py-2 text-sm font-bold text-[var(--background-dark)] transition-transform active:scale-95 h-auto hover:bg-emerald-500">
        Invite Friends
      </Button>
    </section>
  );
};