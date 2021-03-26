import { Client } from 'discord.js';
import { logger } from './logger';
import { config } from 'dotenv';

config();

const client = new Client();

client.once('ready', async () => {
  client.user!.setActivity('メンションで使い方を確認できます。');
  logger.INFO('Bot is Ready!');
});

client.on('message', (message) => {
  if (
    message.mentions.users.find((user) => user.bot && user === client.user) ||
    message.mentions.roles.find((role) => role.name === client.user?.username)
  ) {
    message.reply('');
  }
});

client.login(process.env.BOT_TOKEN);
