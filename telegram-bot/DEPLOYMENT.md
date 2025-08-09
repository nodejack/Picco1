# Deploy Picco Telegram Bot to Railway

## Quick Deployment Steps

### 1. Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project

### 2. Deploy from GitHub
1. **Connect Repository**: Choose "Deploy from GitHub repo"
2. **Select Repository**: Choose your Picco repository
3. **Set Root Directory**: Set to `telegram-bot`
4. **Deploy**: Railway will automatically deploy

### 3. Configure Environment Variables
In Railway dashboard:
1. Go to your deployed service
2. Click "Variables" tab
3. Add these variables:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   APP_URL=https://your-app-name.netlify.app
   ```

### 4. Test Your Bot
1. Message your bot on Telegram
2. Send `/start`
3. Click the launch button
4. Verify it opens your app

## Manual Deployment

### Option 1: Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy
cd telegram-bot
railway up
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Connect Railway to your repo
3. Set root directory to `telegram-bot`
4. Add environment variables
5. Deploy

## Environment Variables

Required variables in Railway:
- `TELEGRAM_BOT_TOKEN` - Your bot token from @BotFather
- `APP_URL` - Your Netlify app URL

## Monitoring

Railway provides:
- **Logs**: View real-time logs
- **Metrics**: CPU, memory usage
- **Deployments**: Automatic deployments on push
- **Health Checks**: Automatic restarts

## Troubleshooting

### Bot Not Responding
1. Check Railway logs
2. Verify environment variables
3. Ensure bot token is correct

### Deployment Fails
1. Check package.json is valid
2. Verify Node.js version (18+)
3. Check for syntax errors

### Environment Issues
1. Verify all variables are set
2. Check variable names match code
3. Restart deployment if needed

## Cost

Railway free tier includes:
- 500 hours/month
- 1GB RAM
- Shared CPU
- Perfect for bot deployment

## Next Steps

1. **Test locally first**:
   ```bash
   cd telegram-bot
   npm install
   cp .env.example .env
   # Edit .env with your values
   npm start
   ```

2. **Deploy to Railway** using the steps above

3. **Share your bot** with users!

## Support

If you need help:
1. Check Railway logs
2. Verify environment variables
3. Test bot commands
4. Check app accessibility
