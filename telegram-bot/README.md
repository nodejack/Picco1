# Picco Telegram Bot

A Telegram bot that provides quick access to the Picco crypto prediction app, similar to Notcoin and Hamster.

## Features

- 🚀 **Launch Button**: Direct access to the Picco app
- 📊 **Leaderboard Access**: Quick link to view rankings
- 🎯 **Predictions**: Direct access to make predictions
- 📱 **Mobile Optimized**: Works perfectly on mobile devices
- 🤖 **Smart Commands**: Multiple command options

## Setup Instructions

### 1. Create a Telegram Bot

1. **Message @BotFather** on Telegram
2. Send `/newbot`
3. Choose a name for your bot (e.g., "Picco Bot")
4. Choose a username (e.g., "picco_prediction_bot")
5. **Save the bot token** - you'll need this!

### 2. Configure Environment Variables

1. Copy `env.example` to `.env`
2. Update the values:
   ```env
   TELEGRAM_BOT_TOKEN=your_actual_bot_token_here
   APP_URL=https://your-actual-app-name.netlify.app
   ```

### 3. Install Dependencies

```bash
# Install bot dependencies
pnpm install
```

### 4. Run the Bot

```bash
# Development mode (with auto-restart)
pnpm run dev

# Production mode
pnpm start
```

## Bot Commands

- `/start` - Welcome message with launch button
- `/help` - Show available commands
- `/leaderboard` - Quick access to leaderboard
- `/predictions` - Quick access to predictions

## Deployment Options

### Option 1: Render (Recommended)
- Free tier with 750 hours/month
- Easy GitHub integration
- Automatic deployments
- Built-in SSL and monitoring

### Option 2: Heroku
- Reliable paid hosting ($7/month)
- Excellent tooling and add-ons
- Industry standard for Node.js apps
- Great for production use

### Option 3: DigitalOcean App Platform
- $5/month for apps
- Simple interface
- Good performance
- GitHub integration

### Option 4: VPS (Advanced)
- Deploy to any VPS (DigitalOcean, Linode, etc.)
- Full control over environment
- Requires server management skills
- Most cost-effective for high usage

## Bot Features

### Welcome Message
When users type `/start`, they get:
- Personalized welcome message
- App description and features
- Launch button to open the app
- Additional buttons for specific sections

### Inline Buttons
- **🚀 Launch Picco App** - Opens main app
- **📊 View Leaderboard** - Direct to leaderboard
- **🎯 Make Predictions** - Direct to predictions

### Mobile Optimization
- Buttons work perfectly on mobile
- App opens in Telegram's built-in browser
- Responsive design for all screen sizes

## Customization

### Update App URL
Change the `APP_URL` in your `.env` file to match your deployed app.

### Customize Messages
Edit the messages in `telegram-bot.js` to match your branding.

### Add More Commands
Add new command handlers in `telegram-bot.js`:

```javascript
bot.onText(/\/yourcommand/, async (msg) => {
  // Your command logic here
});
```

## Security Notes

- Keep your bot token secret
- Never commit `.env` files to git
- Use environment variables for sensitive data
- Consider rate limiting for production

## Troubleshooting

### Bot Not Responding
- Check if the bot is running
- Verify the token is correct
- Check console for error messages

### Buttons Not Working
- Ensure the APP_URL is correct
- Check if the app is accessible
- Verify HTTPS URLs

### Deployment Issues
- Ensure all dependencies are installed
- Check environment variables
- Verify port configuration

## Next Steps

1. **Deploy your app** to Netlify
2. **Set up the bot** with the instructions above
3. **Test the integration** by messaging your bot
4. **Share the bot** with your community!

## Support

If you need help:
1. Check the console logs for errors
2. Verify all environment variables are set
3. Test the bot commands one by one
4. Ensure your app is accessible via the APP_URL
