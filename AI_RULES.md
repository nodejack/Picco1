# Tech Stack

- You are building a React application.
- Use TypeScript.
- Use React Router. KEEP the routes in src/App.tsx
- Always put source code in the src folder.
- Put pages into src/pages/
- Put components into src/components/
- The main page (default page) is src/pages/Index.tsx
- UPDATE the main page to include the new components. OTHERWISE, the user can NOT see any components!
- ALWAYS try to use the shadcn/ui library.
- Tailwind CSS: always use Tailwind CSS for styling components. Utilize Tailwind classes extensively for layout, spacing, colors, and other design aspects.

Available packages and libraries:

- The lucide-react package is installed for icons.
- You ALREADY have ALL the shadcn/ui components and their dependencies installed. So you don't need to install them again.
- You have ALL the necessary Radix UI components installed.
- Use prebuilt components from the shadcn/ui library after importing them. Note that these files shouldn't be edited, so make new components if you need to change them.

---

## Project-Specific Documentation (Picco App)

# Picco Application Documentation

This document outlines the features and components of the Picco crypto prediction application.

## 1. Core Technologies

-   **Framework**: React with TypeScript
-   **Routing**: React Router
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui
-   **State Management**: React Query for server state (placeholder)
-   **Notifications**: Sonner for toast notifications

## 2. Project Structure

The project follows a standard React application structure:

-   `src/pages`: Contains the top-level page components for each route.
-   `src/components/ui`: Contains the base UI components from shadcn/ui. These should not be modified directly.
-   `src/components/picco`: Contains all the custom, application-specific components built for Picco.
-   `src/globals.css`: Defines the global styles, including the custom dark theme and color palette.
-   `src/App.tsx`: Defines the application's routes using React Router.

## 3. Data Handling

**Current State**: All data within the application is currently **static and hardcoded**. This includes user lists, prediction markets, and market data. The application serves as a high-fidelity frontend prototype. The integration of a backend API would be the next logical step to make the application dynamic.

## 4. Pages & Routes

The application is structured into the following main pages:

### 4.1. Home Page (`/`)

This is the main landing page of the application.

-   **Header**: Displays the application name "Picco" with an animated background.
-   **Market Movers Carousel**: A horizontally scrollable carousel showcasing trending cryptocurrencies, their prices, and recent percentage changes.
-   **Today's Hot Prediction**: A prominent card featuring a special daily prediction with a countdown timer and "YES"/"NO" voting buttons.
-   **Prediction List**: A feed of other active prediction markets.
-   **Leaderboard Snippet**: A preview of the top 3 users from the leaderboard, with a button to view the full leaderboard.
-   **Footer Navigation**: A fixed footer providing easy navigation to Home, Predictions, Leaderboard, and Profile pages.

### 4.2. Predictions Page (`/predictions`)

This page displays a comprehensive feed of all prediction markets.

-   **Predictions Header**: A sticky header containing a search bar and filter tabs for "All", "My Predictions", and "Following".
-   **Predictions Feed**: A list of `PredictionFeedCard` components. Each card shows:
    -   The cryptocurrency and its icon.
    -   The prediction question.
    -   Time remaining or "Closed" status.
    -   Community consensus (e.g., "75% Yes").
    -   The user's current vote, if any.
-   **Voting System**: Users can click "Vote Now" on active predictions, which opens a `VoteDialog`.
-   **Vote Dialog**: A modal where users can cast a "Yes" or "No" vote. The dialog closes automatically after a vote is cast, and a confirmation toast is shown.

### 4.3. Leaderboard Page (`/leaderboard`)

This page ranks users based on their prediction performance.

-   **Leaderboard Header**: A sticky header with filters for "Global", "Weekly", and "Daily" leaderboards.
-   **Leaderboard List**: A ranked list of users, displaying:
    -   Rank, avatar, and name.
    -   Stats like total correct predictions and current streak.
    -   A "Follow" / "Following" button.
-   **Podium Styling**: The top 3 users have special gold, silver, and bronze styling on their cards.
-   **Rank Change Animation**: Users who have moved up or down in the rankings have a subtle animation on their card.

### 4.4. Profile Page (`/profile`)

This page displays the user's personal information and statistics.

-   **Profile Header**: A simple header with a back button.
-   **Profile Info**: Shows the user's avatar, name, handle, and a "Verified" badge.
-   **Profile Stats**: Key performance indicators like "Win Rate" and total "Predictions" made.
-   **Achievements**: A grid showcasing earned badges like "Early Adopter" and "Power User".
-   **Recent Activity**: A list of the user's most recent predictions and their outcomes (Win/Loss).
-   **Referrals**: A section with a unique, copyable referral code to invite friends.

### 4.5. Not Found Page (`*`)

A standard 404 page is shown for any route that does not exist.

## 5. Key Features & Components

-   **Responsive Design**: The UI is fully responsive and optimized for mobile devices.
-   **Dark Theme**: The application uses a custom dark theme for a modern, sleek look.
-   **Interactive Elements**: Smooth transitions, hover effects, and animations are used throughout the app to enhance user experience. This includes hover effects on the Profile page for stats, achievements, and recent activity to improve interactivity.
-   **Toast Notifications**: Non-intrusive feedback is provided for actions like voting or copying text.
-   **Reusable Components**: The application is built with a modular component architecture, with most components located in `src/components/picco/`.

## 6. Color Scheme

The application uses a custom color palette defined in `src/globals.css` to achieve its distinct dark theme.

-   `--background-dark: #0A0A0F` (Main background color)
-   `--surface-dark: #121218` (Card and surface backgrounds)
-   `--primary-green: #19E6A2` (Primary action color, for "Yes" votes, highlights)
-   `--primary-red: #FF4D4D` (Secondary action color, for "No" votes, negative changes)
-   `--text-primary-light: #FFFFFF` (Primary text color)
-   `--text-secondary-light: #A0AEC0` (Secondary text color for less important information)
-   `--border-color: rgba(255, 255, 255, 0.1)` (Borders and separators)
-   `--gold-color: #FFD700` (For the #1 rank on the leaderboard)
-   `--silver-color: #C0C0C0` (For the #2 rank on the leaderboard)
-   `--bronze-color: #CD7F32` (For the #3 rank on the leaderboard)