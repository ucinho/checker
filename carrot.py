from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler

# Define a function to start the bot
def start(update, context):
    keyboard = [[InlineKeyboardButton("Mine Now", callback_data='mine')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text('Click the button to start mining:', reply_markup=reply_markup)

# Define a function to handle button clicks
def button(update, context):
    query = update.callback_query
    query.answer()
    query.edit_message_text(text="Mining...")

# Main function to run the bot
def main():
    # Replace 'YOUR_TOKEN' with your actual bot token
    updater = Updater("6587270924:AAEE_-fPSepKz62ThB9s7SNcUvuiMrBZ4JQ", use_context=True)

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # Define a command handler for the /start command
    dp.add_handler(CommandHandler("start", start))

    # Define a callback query handler for button clicks
    dp.add_handler(CallbackQueryHandler(button))

    # Start the Bot
    updater.start_polling()

    # Run the bot until you press Ctrl-C
    updater.idle()

if __name__ == '__main__':
    main()
