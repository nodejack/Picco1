import React, { createContext, useContext, useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

interface TelegramContextType {
  user: TelegramUser | null;
  isReady: boolean;
  isTelegramWebApp: boolean;
  themeParams: any;
  showAlert: (message: string) => void;
  showConfirm: (message: string) => Promise<boolean>;
  hapticFeedback: {
    impactOccurred: (style?: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
    notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
    selectionChanged: () => void;
  };
  close: () => void;
}

const TelegramContext = createContext<TelegramContextType | null>(null);

export const useTelegram = () => {
  const context = useContext(TelegramContext);
  if (!context) {
    throw new Error('useTelegram must be used within a TelegramProvider');
  }
  return context;
};

interface TelegramProviderProps {
  children: React.ReactNode;
}

export const TelegramProvider: React.FC<TelegramProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);
  const [themeParams, setThemeParams] = useState<any>({});

  useEffect(() => {
    // Check if we're running in Telegram WebApp
    const isTelegram = typeof window !== 'undefined' && window.Telegram?.WebApp;
    setIsTelegramWebApp(!!isTelegram);

    if (isTelegram) {
      try {
        // Initialize Telegram WebApp
        WebApp.ready();
        
        // Expand to full height immediately
        WebApp.expand();
        
        // Enable closing confirmation
        WebApp.enableClosingConfirmation();
        
        // Set header color to match app theme
        WebApp.setHeaderColor('#0A0A0F');
        
        // Get user data
        const telegramUser = WebApp.initDataUnsafe?.user;
        if (telegramUser) {
          setUser({
            id: telegramUser.id,
            first_name: telegramUser.first_name,
            last_name: telegramUser.last_name,
            username: telegramUser.username,
            language_code: telegramUser.language_code,
            is_premium: telegramUser.is_premium,
            photo_url: telegramUser.photo_url,
          });
        }

        // Get theme parameters
        setThemeParams(WebApp.themeParams);

        // Set up main button (can be used for primary actions)
        WebApp.MainButton.setText('Make Prediction');
        WebApp.MainButton.color = '#19E6A2';
        WebApp.MainButton.textColor = '#FFFFFF';

        // Show back button
        WebApp.BackButton.show();
        WebApp.BackButton.onClick(() => {
          // Handle back navigation - you can customize this
          if (window.history.length > 1) {
            window.history.back();
          } else {
            WebApp.close();
          }
        });

        setIsReady(true);

        console.log('🚀 Telegram WebApp initialized successfully');
        console.log('👤 User:', telegramUser);
        console.log('🎨 Theme:', WebApp.themeParams);
        
      } catch (error) {
        console.error('❌ Error initializing Telegram WebApp:', error);
        setIsReady(true); // Still set ready to true so app works
      }
    } else {
      // Not in Telegram, still set ready for development
      setIsReady(true);
      console.log('🌐 Running outside Telegram WebApp');
    }
  }, []);

  const showAlert = (message: string) => {
    if (isTelegramWebApp) {
      WebApp.showAlert(message);
    } else {
      alert(message);
    }
  };

  const showConfirm = (message: string): Promise<boolean> => {
    if (isTelegramWebApp) {
      return new Promise((resolve) => {
        WebApp.showConfirm(message, resolve);
      });
    } else {
      return Promise.resolve(confirm(message));
    }
  };

  const hapticFeedback = {
    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' = 'medium') => {
      if (isTelegramWebApp) {
        WebApp.HapticFeedback.impactOccurred(style);
      }
    },
    notificationOccurred: (type: 'error' | 'success' | 'warning') => {
      if (isTelegramWebApp) {
        WebApp.HapticFeedback.notificationOccurred(type);
      }
    },
    selectionChanged: () => {
      if (isTelegramWebApp) {
        WebApp.HapticFeedback.selectionChanged();
      }
    },
  };

  const close = () => {
    if (isTelegramWebApp) {
      WebApp.close();
    } else {
      window.close();
    }
  };

  const value: TelegramContextType = {
    user,
    isReady,
    isTelegramWebApp,
    themeParams,
    showAlert,
    showConfirm,
    hapticFeedback,
    close,
  };

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};