"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const logger_1 = require("./logger");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const client = new discord_js_1.Client();
client.once('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    client.user.setActivity('メンションで使い方を確認できます。');
    logger_1.logger.INFO('Bot is Ready!');
}));
client.on('message', (message) => {
    if (message.mentions.users.find((user) => user.bot && user === client.user) ||
        message.mentions.roles.find((role) => { var _a; return role.name === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.username); })) {
        message.reply('');
    }
});
client.login(process.env.BOT_TOKEN);
//# sourceMappingURL=app.js.map