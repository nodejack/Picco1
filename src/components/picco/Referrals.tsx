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
    <section className="mt-8 rounded-xl bg-[var(--surface-dark)] p-6 text-center">
      <h2 className="text-xl font-bold">Referrals</h2>
      <p className="mt-2 text-sm text-[var(--text-secondary-light)]">
        Share your unique code and earn rewards for every friend who joins.
      </p>
      <div className="relative mt-4">
        <Input
          className="w-full rounded-lg border-2 border-dashed border-[var(--border-color)] bg-[var(--background-dark)] py-3 pl-4 pr-12 text-center text-lg font-medium tracking-widest text-emerald-300 h-auto"
          readOnly
          type="text"
          value={referralCode}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--text-secondary-light)] hover:text-white h-full"
          onClick={copyToClipboard}
        >
          <Copy className="h-5 w-5" />
        </Button>
      </div>
      <Button className="mt-4 w-full rounded-lg bg-[var(--primary-green)] py-3 text-base font-bold text-[var(--background-dark)] transition-transform active:scale-95 h-auto hover:bg-emerald-500">
        Invite Friends
      </Button>
    </section>
  );
};