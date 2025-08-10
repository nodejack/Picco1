# Picco Application Documentation

## Overview
Picco is a crypto prediction application that allows users to make predictions on cryptocurrency price movements and compete on leaderboards. The app features a modern dark theme with responsive design for both mobile and desktop, plus native Telegram Mini App integration for seamless in-app experience.

## Current Features

### 1. Market Data Integration
- **Live Market Movers**: Real-time cryptocurrency data from CoinGecko API
- **Auto-scrolling carousel**: Shows top 15 cryptocurrencies with price changes
- **Loading states**: Skeleton loaders while data fetches
- **Error handling**: Graceful error states for API failures

### 2. Prediction System
- **Active Predictions**: Users can vote on crypto price predictions
- **Vote Dialog**: Modal interface for casting predictions
- **Consensus Display**: Shows community sentiment percentages
- **Status Tracking**: Active/Closed/Unpredicted states
- **Search & Filter**: Find predictions by keyword or filter by type

### 3. Leaderboard
- **Ranked Competition**: Global leaderboard with user rankings
- **Podium Styling**: Special visual treatment for top 3 positions
- **Rank Changes**: Animated indicators for rank movements
- **User Profiles**: Click through to view detailed profiles
- **Follow System**: Follow/unfollow other predictors

### 4. User Profile
- **Personal Stats**: Win rate, total predictions, streaks
- **Achievements**: Visual badges for accomplishments
- **Recent Activity**: History of recent predictions
- **Referral System**: Unique codes for inviting friends
- **Verified Status**: Badge for verified users

### 5. Responsive Design
- **Mobile**: Enhanced bottom navigation bar (96px height) optimized for Telegram WebApp
- **Desktop**: Collapsible sidebar navigation
- **Tablet**: Optimized layouts for medium screens
- **Touch-friendly**: Large tap targets (44px+ minimum) with proper safe area handling
- **Telegram Integration**: Native Mini App experience with seamless in-app navigation

### 6. Telegram Mini App Integration
- **Native Bot Integration**: Telegram bot with Mini App buttons (not external links)
- **Web App Buttons**: Uses `web_app` parameter for native Telegram experience
- **Bot Commands**: `/start`, `/help`, `/leaderboard`, `/predictions` with inline buttons
- **Seamless Launch**: Opens directly in Telegram without browser prompts
- **Mobile Optimized**: Enhanced navigation specifically for Telegram's mobile environment
- **HTTP Health Checks**: Simple server for deployment platform requirements

### 7. Telegram WebApp SDK Integration
- **Full-Screen Launch**: App opens immediately expanded (no swipe up needed)
- **Native Header**: Telegram's native Close/Menu buttons like Notcoin
- **User Authentication**: Automatic user recognition via Telegram data
- **Haptic Feedback**: Phone vibrations on interactions and votes
- **Native Alerts**: Telegram-style popups and confirmations
- **Theme Integration**: Adapts to user's Telegram theme colors
- **Back Button**: Native Telegram navigation functionality

### 8. Personalized User Experience
- **Real User Data**: Shows actual Telegram name, username, and profile photo
- **Premium Recognition**: Special badges and indicators for Telegram Premium users
- **Personalized Referrals**: Dynamic referral codes based on Telegram user ID
- **Enhanced Sharing**: Telegram-specific sharing functionality
- **Status Indicators**: Shows "Telegram Mini App" vs "Web Browser" status
- **Graceful Fallbacks**: Works seamlessly for non-Telegram users

## Technical Implementation

### State Management
- **React Query**: For server state and API caching
- **React Context**: For sidebar collapse state
- **Local State**: Component-level state for UI interactions

### Styling System
- **Tailwind CSS**: Utility-first styling
- **CSS Variables**: Consistent color theming
- **Custom Animations**: Rank changes, hover effects
- **Glassmorphism**: Modern card styling

### Component Architecture
- **Atomic Design**: Small, reusable components
- **Consistent Props**: Standardized component interfaces
- **Error Boundaries**: Graceful error handling
- **Loading States**: Skeleton screens and spinners

## API Integration

### CoinGecko API
- **Endpoint**: `/coins/markets`
- **Data**: Top 15 cryptocurrencies by market cap
- **Refresh**: 5-minute cache
- **Fields**: Price, 24h change, market cap, volume

### Future API Endpoints Needed
- **Predictions**: Create, read, update predictions
- **Users**: Authentication, profiles, stats
- **Leaderboard**: Real-time rankings
- **Votes**: Cast and retrieve votes
- **Achievements**: Unlock and display badges

## User Experience Features

### Navigation
- **Persistent Navigation**: Always accessible
- **Visual Feedback**: Active states and hover effects
- **Smooth Transitions**: 300ms duration animations
- **Keyboard Navigation**: Tab order and focus states

### Feedback System
- **Toast Notifications**: Success/error messages
- **Loading Indicators**: Skeleton screens
- **Empty States**: Helpful messages when no data
- **Error Messages**: User-friendly error handling

### Performance
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Optimized crypto icons
- **Caching**: React Query for API responses
- **Lazy Loading**: Components loaded on demand

## Color Palette

### Primary Colors
- **Background**: #0A0A0F (deep dark)
- **Surface**: #121218 (card backgrounds)
- **Primary Green**: #19E6A2 (positive actions)
- **Primary Red**: #FF4D4D (negative actions)

### Text Colors
- **Primary**: #FFFFFF (main text)
- **Secondary**: #A0AEC0 (supporting text)
- **Muted**: rgba(255,255,255,0.6) (disabled text)

### Accent Colors
- **Gold**: #FFD700 (1st place)
- **Silver**: #C0C0C0 (2nd place)
- **Bronze**: #CD7F32 (3rd place)

## Mobile vs Desktop Differences

### Mobile (≤768px)
- **Bottom Navigation**: Fixed at bottom
- **Stacked Layout**: Single column
- **Touch Targets**: 44x44px minimum
- **Swipe Gestures**: Carousel swiping

### Desktop (>768px)
- **Sidebar Navigation**: Left-side collapsible
- **Grid Layout**: Multi-column where appropriate
- **Hover States**: Enhanced interactivity
- **Keyboard Shortcuts**: Arrow key navigation

## Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation
- **Feature Detection**: Modern CSS features

## Development Setup
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview build: `npm run preview`

## Deployment

### Frontend (React App)
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **Environment Variables**: API keys for CoinGecko
- **Build Optimization**: Tree-shaking, minification
- **CDN**: Asset optimization

### Telegram Bot
- **Hosting**: Render (recommended), Heroku, DigitalOcean App Platform
- **Package Manager**: pnpm for consistency with main project
- **Environment Variables**: 
  - `TELEGRAM_BOT_TOKEN`: Bot token from @BotFather
  - `APP_URL`: Frontend deployment URL (Netlify/Vercel)
- **Health Checks**: HTTP server on assigned port for platform requirements
- **Auto-Deploy**: GitHub integration for continuous deployment

## Telegram Bot Architecture

### Bot Features
- **Command Handlers**: `/start`, `/help`, `/leaderboard`, `/predictions`
- **Mini App Integration**: Native `web_app` buttons instead of external links
- **Auto-Welcome**: Responds to any message with welcome buttons
- **User Experience**: Seamless in-app navigation without browser prompts
- **Error Handling**: Comprehensive error logging and graceful failures
- **Health Monitoring**: HTTP endpoints for deployment platform health checks

### Bot Commands
```
/start - Welcome message with Mini App launch buttons
/help - Show available commands and tips
/leaderboard - Quick access to leaderboard with Mini App button
/predictions - Direct access to predictions with Mini App button
Any message - Triggers welcome message for new users
```

### Technical Stack
- **Runtime**: Node.js 18+
- **Library**: node-telegram-bot-api
- **Environment**: dotenv for configuration
- **HTTP Server**: Built-in Node.js HTTP module for health checks
- **Polling**: Telegram long polling for real-time message handling

## Telegram WebApp SDK Integration

### Core SDK Features
- **@twa-dev/sdk**: Official Telegram WebApp SDK integration
- **Auto-Expand**: `WebApp.expand()` called immediately on launch
- **Header Styling**: `WebApp.setHeaderColor('#0A0A0F')` matches app theme
- **Closing Confirmation**: `WebApp.enableClosingConfirmation()` prevents accidental exits
- **Back Button**: Native Telegram back button with custom navigation logic

### User Data Integration
```typescript
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}
```

### Native Features Implementation
- **Haptic Feedback**: Phone vibrations on interactions
  - `WebApp.HapticFeedback.impactOccurred('medium')`
  - `WebApp.HapticFeedback.notificationOccurred('success')`
- **Native Alerts**: Telegram-style popups
  - `WebApp.showAlert(message)`
  - `WebApp.showConfirm(message, callback)`
- **Theme Integration**: Adapts to user's Telegram theme
  - `WebApp.themeParams.bg_color`
  - `WebApp.themeParams.text_color`

### Context Provider Architecture
```typescript
// TelegramProvider wraps entire app
<TelegramProvider>
  <App />
</TelegramProvider>

// Components use Telegram context
const { user, hapticFeedback, showAlert } = useTelegram();
```

## Personalized User Experience

### Profile Integration
- **Real Names**: Shows actual Telegram `first_name + last_name`
- **Usernames**: Displays `@username` from Telegram account
- **Profile Photos**: Uses `photo_url` from Telegram if available
- **Premium Badges**: Special indicators for Telegram Premium users

### Dynamic Referral System
```typescript
const generateReferralCode = () => {
  if (user?.id) {
    const hash = user.id.toString(36).toUpperCase().slice(-3);
    return `PICCO-${hash}${user.first_name.slice(0, 2).toUpperCase()}`;
  }
  return 'PICCO-X42'; // Fallback
};
```

### Enhanced Sharing
- **Telegram Users**: Native sharing with formatted messages
- **Web Users**: Standard clipboard functionality
- **Smart Detection**: Different UX based on platform

## Development Environment Setup

### Telegram WebApp Testing
1. **Local Development**: Works in browser with fallbacks
2. **Telegram Testing**: Use ngrok or deploy to test in Telegram
3. **Debug Mode**: Console logs show Telegram WebApp status
4. **Fallback Handling**: Graceful degradation for non-Telegram users

### Environment Variables
```env
# Frontend (Netlify/Vercel)
VITE_APP_URL=https://your-app.netlify.app

# Bot (Render)
TELEGRAM_BOT_TOKEN=your_bot_token
APP_URL=https://your-app.netlify.app
```

## Future Roadmap

### Phase 1: Core Features
- [ ] User authentication
- [ ] Real prediction system
- [ ] Live leaderboard updates
- [ ] User settings

### Phase 2: Social Features
- [ ] User profiles
- [ ] Following system
- [ ] Comments on predictions
- [ ] Share predictions

### Phase 3: Advanced Features
- [ ] Push notifications
- [ ] Price alerts
- [ ] Advanced analytics
- [ ] Premium features

### Phase 4: Platform Expansion
- [ ] Web3 integration
- [ ] Token rewards
- [ ] NFT achievements
- [ ] Mobile app