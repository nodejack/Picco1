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
• Native Telegram integration

Launch the app to start predicting!`;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "🚀 Launch Picco",
          web_app: {
            url: APP_URL,
          },
        },
      ],
      [
        {
          text: "📊 Leaderboard",
          web_app: {
            url: `${APP_URL}/leaderboard`,
          },
        },
        {
          text: "🎯 Predictions",
          web_app: {
            url: `${APP_URL}/predictions`,
          },
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
          web_app: {
            url: `${APP_URL}/leaderboard`,
          },
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
          web_app: {
            url: `${APP_URL}/predictions`,
          },
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

// Simple HTTP server for Render health checks
const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "ok",
        bot: "running",
        timestamp: new Date().toISOString(),
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`🌐 HTTP server running on port ${PORT}`);
  console.log("🤖 Picco Telegram Bot is running...");
  console.log("📱 App URL:", APP_URL);
});

module.exports = bot;
