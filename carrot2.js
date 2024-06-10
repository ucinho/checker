const { Telegraf, Markup } = require('telegraf');

// Create a new Telegraf instance with your bot token
const bot = new Telegraf('6587270924:AAEE_-fPSepKz62ThB9s7SNcUvuiMrBZ4JQ');

// Middleware to handle "/start" command
bot.start((ctx) => {
  // Create a custom keyboard with the "Mine" button
  const mineKeyboard = Markup.inlineKeyboard([
    Markup.button.url('Mine', 'https://t.me/TapLengendBot/checker'),
  ]);
  
  // Send a message with the "Mine" button keyboard
  ctx.reply('Welcome! Click the "Mine" button below to go to your dashboard.', mineKeyboard);
});

// Start the bot
bot.launch();
