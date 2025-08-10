# Picco - Crypto Prediction Platform

A modern crypto prediction platform with native Telegram Mini App integration. Make predictions on cryptocurrency price movements and compete with other traders on the global leaderboard.

## 🚀 Features

- **Live Market Data**: Real-time cryptocurrency data from CoinGecko API
- **Prediction System**: Vote on crypto price movements with real-time consensus
- **Global Leaderboard**: Compete with other predictors and climb the rankings
- **User Profiles**: Track your performance, achievements, and referral rewards
- **Telegram Integration**: Native Mini App experience with full-screen launch
- **Mobile Optimized**: Responsive design with enhanced mobile navigation

## 🎯 Telegram Mini App

Experience Picco as a native Telegram Mini App:
- **Full-screen launch** - no swipe up needed, opens like Notcoin
- **Native header** - Telegram's Close/Menu buttons
- **User integration** - automatic login with Telegram user data
- **Haptic feedback** - phone vibrations on interactions
- **Native alerts** - Telegram-style popups and confirmations

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React Query for server state
- **Routing**: React Router
- **Telegram**: @twa-dev/sdk for Mini App integration
- **Bot**: Node.js with node-telegram-bot-api

## 📱 Getting Started

### Prerequisites
- Node.js 18+
- pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd picco
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

## 🤖 Telegram Bot Setup

1. **Navigate to bot directory**
   ```bash
   cd telegram-bot
   ```

2. **Install bot dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your bot token and app URL
   ```

4. **Start the bot**
   ```bash
   pnpm start
   ```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
- **Build Command**: `pnpm build`
- **Publish Directory**: `dist`
- **Auto-deploy**: Enabled on main branch

### Telegram Bot (Render)
- **Root Directory**: `telegram-bot`
- **Build Command**: `pnpm install`
- **Start Command**: `pnpm start`
- **Environment Variables**: `TELEGRAM_BOT_TOKEN`, `APP_URL`

## 📖 Documentation

- [Full Documentation](DOCUMENTATION.md) - Comprehensive technical documentation
- [AI Rules](AI_RULES.md) - Development guidelines and project structure
- [Bot Deployment](telegram-bot/DEPLOYMENT.md) - Telegram bot deployment guide

## 🎮 How to Use

1. **Find the bot** on Telegram
2. **Send any message** to get welcome buttons
3. **Tap "🚀 Launch Picco"** to open the Mini App
4. **Make predictions** on crypto price movements
5. **Compete** on the global leaderboard
6. **Track progress** in your profile

## 🏗️ Project Structure

```
├── src/                    # React frontend
│   ├── components/picco/   # Custom components
│   ├── pages/             # Route components
│   ├── context/           # React contexts
│   └── types/             # TypeScript definitions
├── telegram-bot/          # Telegram bot
│   ├── telegram-bot.js    # Bot logic
│   └── package.json       # Bot dependencies
└── docs/                  # Documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for the crypto community**