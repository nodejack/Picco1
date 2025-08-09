# Deploy Picco Telegram Bot

## Recommended Deployment Options

### Option 1: Render (Recommended - Free Tier Available)

#### Quick Deployment Steps

1. **Create Render Account**: Go to [render.com](https://render.com) and sign up
2. **Create Web Service**:
   - Connect your GitHub repository
   - Set **Root Directory** to `telegram-bot`
   - Set **Build Command** to `pnpm install`
   - Set **Start Command** to `pnpm start`
3. **Configure Environment Variables**:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   APP_URL=https://your-app-name.netlify.app
   ```
4. **Deploy**: Render will automatically build and deploy

### Option 2: Heroku (Paid but Reliable)

#### Deployment Steps

1. **Install Heroku CLI**: Download from [heroku.com](https://heroku.com)
2. **Login and Create App**:
   ```bash
   heroku login
   heroku create your-bot-name
   ```
3. **Configure Environment Variables**:
   ```bash
   heroku config:set TELEGRAM_BOT_TOKEN=your_bot_token_here
   heroku config:set APP_URL=https://your-app-name.netlify.app
   ```
4. **Deploy**:
   ```bash
   cd telegram-bot
   git init
   git add .
   git commit -m "Initial commit"
   heroku git:remote -a your-bot-name
   git push heroku main
   ```

### Option 3: DigitalOcean App Platform

#### Deployment Steps

1. **Create DigitalOcean Account**: Sign up at [digitalocean.com](https://digitalocean.com)
2. **Create App**:
   - Connect GitHub repository
   - Set source directory to `telegram-bot`
   - Choose Node.js environment
3. **Configure Environment Variables** in the dashboard
4. **Deploy**: Automatic deployment from GitHub

## Environment Variables

Required variables for all platforms:

- `TELEGRAM_BOT_TOKEN` - Your bot token from @BotFather
- `APP_URL` - Your Netlify app URL

## Monitoring & Features by Platform

### Render

- **Free Tier**: 750 hours/month
- **Logs**: Real-time log viewing
- **Auto-deploy**: GitHub integration
- **Health Checks**: Automatic restarts
- **SSL**: Free HTTPS

### Heroku

- **Paid Plans**: Starting $7/month
- **Excellent Logs**: Heroku CLI access
- **Add-ons**: Extensive ecosystem
- **Scaling**: Easy horizontal scaling
- **Reliability**: Industry standard

### DigitalOcean

- **Free Tier**: $0 for static sites, $5/month for apps
- **Simple Interface**: Easy to use dashboard
- **GitHub Integration**: Auto-deploy on push
- **Good Performance**: Fast deployment

## Troubleshooting

### Bot Not Responding

1. Check platform logs (Render/Heroku/DO dashboard)
2. Verify environment variables are set correctly
3. Ensure bot token is valid and active
4. Test bot locally first

### Deployment Fails

1. Check package.json is valid JSON
2. Verify Node.js version compatibility (18+)
3. Check for syntax errors in telegram-bot.js
4. Ensure all dependencies are listed

### Environment Issues

1. Verify all required variables are set
2. Check variable names match exactly
3. Restart deployment after variable changes
4. Test APP_URL accessibility

## Cost Comparison

### Free Options

- **Render**: 750 hours/month free
- **DigitalOcean**: $0 for static sites

### Paid Options

- **Heroku**: $7/month (reliable, feature-rich)
- **DigitalOcean Apps**: $5/month (good value)

## Next Steps

1. **Test locally first**:

   ```bash
   cd telegram-bot
   pnpm install
   cp .env.example .env
   # Edit .env with your values
   pnpm start
   ```

2. **Choose deployment platform** based on your needs:

   - **Render** for free hosting with good features
   - **Heroku** for production reliability
   - **DigitalOcean** for simple, affordable hosting

3. **Deploy using the steps above**

4. **Test your bot** thoroughly before sharing

5. **Share your bot** with users!

## Support

If you need help:

1. Check your chosen platform's logs
2. Verify all environment variables
3. Test bot commands individually
4. Ensure your app URL is accessible
5. Check Telegram bot token validity
