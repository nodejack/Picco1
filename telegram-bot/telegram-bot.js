const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

// Replace with your bot token from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { 
  polling: true,
  onlyFirstMatch: true, // Prevent multiple handler execution
  request: {
    agentOptions: {
      keepAlive: true,
      family: 4
    }
  }
});

// Your Netlify app URL (remove trailing slash if present)
const APP_URL = (
  process.env.APP_URL || "https://your-app-name.netlify.app"
).replace(/\/$/, "");

// Enhanced /start command handler with parameter support and error handling
bot.onText(/\/start(.*)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const username = msg.from.first_name;
  const startParam = match[1] ? match[1].trim() : null;
  
  // Enhanced logging for debugging
  console.log(`📱 /start command received from ${username} (${chatId})${startParam ? ` with param: ${startParam}` : ''}`);
  console.log(`📋 Full message object:`, JSON.stringify(msg, null, 2));
  
  try {
    await sendWelcomeMessage(chatId, username, startParam);
    console.log(`✅ Welcome message sent successfully to ${username} (${chatId})`);
  } catch (error) {
    console.error(`❌ Failed to send welcome message to ${username} (${chatId}):`, error);
    // Retry once with simpler message
    try {
      await bot.sendMessage(chatId, `🎯 Welcome to Picco, ${username}! Use the buttons below to get started.`, {
        reply_markup: {
          inline_keyboard: [
            [{
              text: "🚀 Launch Picco",
              web_app: { url: APP_URL }
            }]
          ]
        }
      });
      console.log(`✅ Fallback message sent successfully to ${username} (${chatId})`);
    } catch (retryError) {
      console.error(`❌ Fallback message also failed for ${username} (${chatId}):`, retryError);
    }
  }
});

// Handle any text message (auto-trigger welcome for new users)
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Skip if it's a command (already handled by onText handlers)
  if (messageText && messageText.startsWith("/")) {
    console.log(`🔄 Command ${messageText} handled by dedicated handler`);
    return;
  }

  // Skip if message is empty or not text
  if (!messageText) {
    return;
  }

  // For any other message, send the welcome message with buttons
  const username = msg.from.first_name;
  console.log(`💬 General message received from ${username} (${chatId}): "${messageText}"`);

  try {
    const welcomeMessage = `👋 Hey ${username}! Welcome to *Picco*!

🎯 *Crypto Prediction Platform*

Ready to start predicting crypto prices and compete on the leaderboard?

Tap the button below to launch the app! 🚀`;

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
        [
          {
            text: "ℹ️ Help",
            callback_data: "show_help",
          },
        ],
      ],
    };

    await bot.sendMessage(chatId, welcomeMessage, {
      parse_mode: "Markdown",
      reply_markup: keyboard,
    });
    console.log(`✅ General welcome message sent to ${username} (${chatId})`);
  } catch (error) {
    console.error(`❌ Failed to send general welcome message to ${username} (${chatId}):`, error);
  }
});

// Centralized welcome message service
const sendWelcomeMessage = async (chatId, username, referralCode = null) => {
  const welcomeMessage = `🎯 Welcome to *Picco*, ${username}!

🚀 *Crypto Prediction Platform*

Make predictions on cryptocurrency price movements and compete with other traders on our leaderboard.

📊 *Features:*
• Live market data from CoinGecko
• Real-time predictions and voting
• Global leaderboard competition
• User profiles and achievements
• Native Telegram integration

Launch the app to start predicting!${referralCode ? `\n\n🎁 *Referral Code:* ${referralCode}` : ''}`;

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

  return await bot.sendMessage(chatId, welcomeMessage, {
    parse_mode: "Markdown",
    reply_markup: keyboard,
  });
};

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
    case "show_help":
      const helpMessage = `🤖 *Picco Bot Commands*

/start - Launch the Picco app
/help - Show this help message
/leaderboard - View current leaderboard
/predictions - Make new predictions

💡 *Tips:*
• Use the inline buttons for quick access
• The app works best on mobile devices
• Join our community for updates!

🚀 Ready to start? Tap any button above!`;

      await bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, helpMessage, {
        parse_mode: "Markdown",
      });
      break;
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
  
  // Log successful handler registration
  console.log("✅ Command handlers registered: /start, /help, /leaderboard, /predictions");
  console.log("✅ General message handler registered");
  console.log("✅ Callback query handler registered");
  
  // Bot health monitoring
  let messageCount = 0;
  let commandCount = 0;
  
  // Monitor bot activity every 5 minutes
  setInterval(() => {
    if (messageCount > 0 || commandCount > 0) {
      console.log(`📊 Bot activity: ${messageCount} messages, ${commandCount} commands processed in last 5 minutes`);
    }
    messageCount = 0;
    commandCount = 0;
  }, 300000); // 5 minutes
});

module.exports = bot;
