const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const session = require('telegraf/session');
const TeleConfig = require('./src/config/TeleBotConfig');
const {reply} = Telegraf;

const bot = new Telegraf(TeleConfig.TOKEN);
let memberJoined;
bot.use(session());

bot.command('/cutdi', (ctx) => {
    if (TeleConfig.isAdmin(ctx)) {
        ctx.leaveChat();
    }
});
bot.on('new_chat_members', (ctx) => {
    memberJoined++;
    if (memberJoined / TeleConfig.WELCOME_WHEN === 0) {
        return ctx.reply(TeleConfig.WELCOME_MGS);
    }
});
bot.command('/team@MonoCapitalBot', (ctx) => {
    return ctx.reply('team');
});
bot.command('/ico@MonoCapitalBot', (ctx) => {
    return ctx.reply('ico');
});

//start bot
bot.startPolling();