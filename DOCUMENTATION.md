# Picco Application Documentation

## Overview
Picco is a crypto prediction application that allows users to make predictions on cryptocurrency price movements and compete on leaderboards. The app features a modern dark theme with responsive design for both mobile and desktop.

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
- **Mobile**: Bottom navigation bar with 4 main sections
- **Desktop**: Collapsible sidebar navigation
- **Tablet**: Optimized layouts for medium screens
- **Touch-friendly**: Large tap targets for mobile

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
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **Environment Variables**: API keys for CoinGecko
- **Build Optimization**: Tree-shaking, minification
- **CDN**: Asset optimization

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