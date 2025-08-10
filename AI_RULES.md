# Tech Stack

- **Framework**: React with TypeScript
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Query for server state
- **Notifications**: Sonner for toast notifications
- **Icons**: lucide-react

## Project Structure

- `src/pages`: Top-level page components for each route
- `src/components/ui`: Base UI components from shadcn/ui (do not modify)
- `src/components/picco`: Custom application-specific components
- `src/context`: React context providers
- `src/hooks`: Custom React hooks
- `src/utils`: Utility functions
- `src/globals.css`: Global styles and custom dark theme

## Key Features Implemented

### 1. Responsive Design
- Mobile-first approach with desktop sidebar navigation
- Collapsible sidebar for desktop (20px collapsed, 256px expanded)
- Fixed bottom navigation for mobile devices
- Smooth transitions between mobile and desktop layouts

### 2. Navigation System
- **Desktop**: Collapsible sidebar with tooltips
- **Mobile**: Enhanced fixed bottom navigation bar (96px height, optimized for Telegram WebApp)
- **Telegram Integration**: Native Mini App buttons for seamless in-app experience
- Active state indicators with green highlighting
- Touch-optimized targets (44px+ minimum) with proper safe area handling
- Smooth hover effects and transitions

### 3. Pages & Routes

#### Home Page (`/`)
- Animated "Picco" header
- Market Movers carousel with live crypto data from CoinGecko
- Today's Hot Prediction card with countdown timer
- Leaderboard snippet showing top 3 predictors
- Additional prediction markets feed

#### Predictions Page (`/predictions`)
- Search functionality for predictions
- Filter tabs: All, My Predictions, Following
- Prediction cards with voting status
- Vote dialog for casting predictions
- Real-time consensus percentages

#### Leaderboard Page (`/leaderboard`)
- Global/Weekly/Daily filter tabs
- Ranked user list with avatars
- Special styling for top 3 (gold/silver/bronze)
- Rank change animations (up/down)
- Follow/Following buttons

#### Profile Page (`/profile`)
- User avatar with verified badge
- Performance stats (win rate, predictions count)
- Achievements grid with icons
- Recent activity feed
- Referral system with copy functionality

### 4. Data Sources
- **Live Data**: CoinGecko API for market movers
- **Static Data**: Hardcoded predictions, leaderboard, user data
- **State Management**: React Query for API caching

### 5. Visual Design
- **Dark Theme**: Custom color palette
  - Background: #0A0A0F
  - Surface: #121218
  - Primary Green: #19E6A2 (for positive actions)
  - Primary Red: #FF4D4D (for negative actions)
  - Gold/Silver/Bronze for rankings
- **Glassmorphic effects** on cards
- **Smooth animations** throughout
- **Responsive typography**

### 6. Interactive Elements
- Hover effects on all clickable elements
- Smooth transitions (300ms duration)
- Toast notifications for user feedback
- Loading states with skeletons
- Error handling with user-friendly messages

### 7. Components Architecture
- **Modular**: Each component is self-contained
- **Reusable**: Components used across multiple pages
- **Consistent**: Unified styling and behavior
- **Accessible**: Proper ARIA labels and keyboard navigation

## Development Guidelines

1. **Color Usage**:
   - Use CSS variables for colors
   - Primary green for positive actions
   - Primary red for negative actions
   - Consistent text hierarchy

2. **Spacing**:
   - Use Tailwind spacing scale
   - Consistent padding/margins (4px increments)
   - Responsive spacing for mobile/desktop

3. **Animations**:
   - 300ms duration for transitions
   - Subtle hover effects
   - No excessive animations

4. **Mobile Considerations**:
   - Fixed navigation at bottom
   - Touch-friendly tap targets (min 44x44px)
   - No hover states on mobile
   - Proper safe area handling

### 8. Telegram Mini App Integration
- **Native Bot**: Telegram bot with Mini App buttons (not external links)
- **Seamless Launch**: Opens directly in Telegram without browser prompts
- **Bot Commands**: `/start`, `/help`, `/leaderboard`, `/predictions`
- **Enhanced Mobile**: 96px navigation bar optimized for Telegram WebApp
- **Touch Optimization**: 44px+ minimum touch targets with safe area handling
- **Deployment**: Bot hosted on Render with HTTP health checks

### 9. Telegram WebApp SDK Features
- **Full-Screen Launch**: App opens immediately expanded like Notcoin (no swipe up)
- **Native Header**: Telegram's native Close/Menu buttons and styling
- **User Authentication**: Automatic user recognition via Telegram user data
- **Haptic Feedback**: Phone vibrations on votes and interactions
- **Native Alerts**: Telegram-style popups instead of browser alerts
- **Theme Integration**: Adapts to user's Telegram theme colors
- **Back Button**: Native Telegram navigation with proper handling

### 10. Personalized User Experience
- **Real User Data**: Profile shows actual Telegram name, username, and photo
- **Premium Recognition**: Special badges for Telegram Premium users (⭐)
- **Dynamic Referrals**: Personalized referral codes based on Telegram user ID
- **Enhanced Sharing**: Telegram-specific sharing with native functionality
- **Status Indicators**: Shows "Telegram Mini App" vs "Web Browser" mode
- **Graceful Fallbacks**: Full compatibility for non-Telegram users

## Current Limitations

1. **Data**: All data is currently static/hardcoded
2. **Authentication**: No user auth system (could integrate Telegram user data)
3. **Backend**: No API integration beyond CoinGecko
4. **Real-time**: No live updates (would need WebSocket/SSE)
5. **Telegram SDK**: Basic Mini App integration (could enhance with @twa-dev/sdk)

## Next Steps for Enhancement

1. **Telegram SDK Integration**: Add @twa-dev/sdk for native Telegram features
2. **User Authentication**: Integrate Telegram user data for seamless login
3. **Backend API**: Connect to real prediction and user management system
4. **Real-time Updates**: Add WebSocket/SSE for live predictions and leaderboard
5. **Enhanced Bot Features**: Add more interactive bot commands and features
6. **Push Notifications**: Telegram notifications for prediction results
7. **Social Features**: Following/followers system with Telegram integration
8. **Advanced Analytics**: User performance tracking and insights

## File Structure Summary

```
├── src/                    # React frontend application
│   ├── components/
│   │   ├── picco/          # Custom components
│   │   │   ├── Navigation.tsx (enhanced for Telegram WebApp)
│   │   │   ├── Header.tsx
│   │   │   ├── MarketMoversCarousel.tsx
│   │   │   ├── HotPredictionCard.tsx
│   │   │   ├── PredictionFeedCard.tsx
│   │   │   ├── VoteDialog.tsx
│   │   │   ├── LeaderboardUser.tsx
│   │   │   ├── ProfileInfo.tsx
│   │   │   └── ... (other components)
│   │   └── ui/            # shadcn/ui components (don't modify)
│   ├── pages/
│   │   ├── Index.tsx      # Home page (updated mobile padding)
│   │   ├── Predictions.tsx (updated mobile padding)
│   │   ├── Leaderboard.tsx (updated mobile padding)
│   │   ├── Profile.tsx    # (updated mobile padding)
│   │   └── NotFound.tsx
│   ├── context/
│   │   └── SidebarContext.tsx
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── utils/
│   │   └── toast.ts
│   ├── globals.css        # Global styles
│   └── App.tsx           # Main app component
├── telegram-bot/           # Telegram Mini App bot
│   ├── telegram-bot.js    # Main bot logic with Mini App integration
│   ├── package.json       # Bot dependencies (pnpm)
│   ├── .env.example       # Environment variables template
│   ├── .env               # Bot configuration (not in git)
│   ├── DEPLOYMENT.md      # Render deployment guide
│   └── README.md          # Bot setup instructions
├── package.json           # Main project dependencies
└── ... (other config files)