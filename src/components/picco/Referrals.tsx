import React from 'react';
import { Copy, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useTelegram } from '@/context/TelegramContext';

export const Referrals = () => {
  const { toast } = useToast();
  const { user, isTelegramWebApp, showAlert } = useTelegram();
  
  // Generate personalized referral code based on Telegram user ID
  const generateReferralCode = () => {
    if (user?.id) {
      // Create a simple hash from user ID for referral code
      const hash = user.id.toString(36).toUpperCase().slice(-3);
      return `PICCO-${hash}${user.first_name.slice(0, 2).toUpperCase()}`;
    }
    return 'PICCO-X42'; // Fallback for non-Telegram users
  };

  const referralCode = generateReferralCode();
  const referralUrl = `https://t.me/your_bot_username?start=${referralCode}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      if (isTelegramWebApp) {
        showAlert("Referral code copied! 📋");
      } else {
        toast({
          title: "Copied to clipboard!",
          description: "Your referral code has been copied.",
        });
      }
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const shareReferral = () => {
    if (isTelegramWebApp && user) {
      const shareText = `🎯 Join me on Picco - the crypto prediction platform!\n\nUse my referral code: ${referralCode}\n\nStart predicting and compete on the leaderboard! 🚀`;
      
      // In a real implementation, you'd use Telegram's share functionality
      // For now, we'll copy the share text
      navigator.clipboard.writeText(shareText);
      showAlert("Share message copied! Paste it in any chat 📤");
    } else {
      copyToClipboard();
    }
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
      <Button 
        onClick={shareReferral}
        className="mt-3 w-full rounded-md bg-[var(--primary-green)] py-2 text-sm font-bold text-[var(--background-dark)] transition-transform active:scale-95 h-auto hover:bg-emerald-500 flex items-center justify-center gap-2"
      >
        <Share size={16} />
        {isTelegramWebApp ? 'Share with Friends' : 'Invite Friends'}
      </Button>
    </section>
  );
};