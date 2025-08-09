const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

// Replace with your bot token from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Your Netlify app URL (remove trailing slash if present)
const APP_URL = (
  process.env.APP_URL || "https://your-app-name.netlify.app"
).replace(/\/$/, "");

// Handle /start command
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.first_name;

  const welcomeMessage = `🎯 Welcome to *Picco*, ${username}!

🚀 *Crypto Prediction Platform*

Make predictions on cryptocurrency price movements and compete with other traders on our leaderboard.

📊 *Features:*
• Live market data from CoinGecko
• Real-time predictions and voting
• Global leaderboard competition
• User profiles and achievements
• Mobile-optimized interface

Click the button below to launch the app!`;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "🚀 Launch Picco App",
          url: APP_URL,
        },
      ],
      [
        {
          text: "📊 View Leaderboard",
          url: `${APP_URL}/leaderboard`,
        },
      ],
      [
        {
          text: "🎯 Make Predictions",
          url: `${APP_URL}/predictions`,
        },
      ],
    ],
  };

  await bot.sendMessage(chatId, welcomeMessage, {
    parse_mode: "Markdown",
    reply_markup: keyboard,
  });
});

// Handle /help command
bot.onText(/\/help/, async (msg) => {
  const chatId = msg.chat.id;

  const helpMessage = `🤖 *Picco Bot Commands*

/start - Launch the Picco app
/help - Show this help message
/leaderboard - View current leaderboard
/predictions - Make new predictions
/profile - View your profile

💡 *Tips:*
• Use the inline buttons for quick access
• The app works best on mobile devices
• Join our community for updates!`;

  await bot.sendMessage(chatId, helpMessage, {
    parse_mode: "Markdown",
  });
});

// Handle /leaderboard command
bot.onText(/\/leaderboard/, async (msg) => {
  const chatId = msg.chat.id;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "🏆 View Leaderboard",
          url: `${APP_URL}/leaderboard`,
        },
      ],
    ],
  };

  await bot.sendMessage(
    chatId,
    "🏆 *Check out the current leaderboard!*\n\nSee who's leading the crypto prediction game.",
    {
      parse_mode: "Markdown",
      reply_markup: keyboard,
    }
  );
});

// Handle /predictions command
bot.onText(/\/predictions/, async (msg) => {
  const chatId = msg.chat.id;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "🎯 Make Predictions",
          url: `${APP_URL}/predictions`,
        },
      ],
    ],
  };

  await bot.sendMessage(
    chatId,
    "🎯 *Ready to make some predictions?*\n\nVote on crypto price movements and compete with other traders!",
    {
      parse_mode: "Markdown",
      reply_markup: keyboard,
    }
  );
});

// Handle callback queries (button clicks)
bot.on("callback_query", async (callbackQuery) => {
  const data = callbackQuery.data;
  const chatId = callbackQuery.message.chat.id;

  switch (data) {
    case "launch_app":
      await bot.answerCallbackQuery(callbackQuery.id, {
        url: APP_URL,
      });
      break;
    case "leaderboard":
      await bot.answerCallbackQuery(callbackQuery.id, {
        url: `${APP_URL}/leaderboard`,
      });
      break;
    case "predictions":
      await bot.answerCallbackQuery(callbackQuery.id, {
        url: `${APP_URL}/predictions`,
      });
      break;
  }
});

// Error handling
bot.on("error", (error) => {
  console.error("Bot error:", error);
});

bot.on("polling_error", (error) => {
  console.error("Polling error:", error);
});

console.log("🤖 Picco Telegram Bot is running...");
console.log("📱 App URL:", APP_URL);

module.exports = bot;
