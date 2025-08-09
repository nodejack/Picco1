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
- **Mobile**: Fixed bottom navigation bar (no border, solid background)
- Active state indicators with green highlighting
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

## Current Limitations

1. **Data**: All data is currently static/hardcoded
2. **Authentication**: No user auth system
3. **Backend**: No API integration beyond CoinGecko
4. **Real-time**: No live updates (would need WebSocket/SSE)

## Next Steps for Enhancement

1. Add user authentication
2. Connect to backend API
3. Add real-time updates
4. Implement actual prediction system
5. Add user settings/preferences
6. Add dark/light theme toggle
7. Add push notifications
8. Add social features (following/followers)

## File Structure Summary

```
src/
├── components/
│   ├── picco/          # Custom components
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   ├── MarketMoversCarousel.tsx
│   │   ├── HotPredictionCard.tsx
│   │   ├── PredictionFeedCard.tsx
│   │   ├── VoteDialog.tsx
│   │   ├── LeaderboardUser.tsx
│   │   ├── ProfileInfo.tsx
│   │   └── ... (other components)
│   └── ui/            # shadcn/ui components (don't modify)
├── pages/
│   ├── Index.tsx      # Home page
│   ├── Predictions.tsx
│   ├── Leaderboard.tsx
│   ├── Profile.tsx
│   └── NotFound.tsx
├── context/
│   └── SidebarContext.tsx
├── hooks/
│   └── use-toast.ts
├── utils/
│   └── toast.ts
├── globals.css        # Global styles
└── App.tsx           # Main app component