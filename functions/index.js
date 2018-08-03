const Telegraf = require('telegraf')
const functions = require('firebase-functions')

//config

//https://api.telegram.org/bot630146731:AAHpiLYjCfSe--8Muf-Wu_uv07rtPJIP9eM/setWebhook?url=https://us-central1-project-5584199935189383235.cloudfunctions.net/bot
const TOKEN = '630146731:AAHpiLYjCfSe--8Muf-Wu_uv07rtPJIP9eM';
const WELCOME_WHEN = 20; // reply welcome mgs when xxx user joined
const WELCOME_MGS = "xin chao cac ban"; // reply welcome mgs when xxx user joined
const ADMIN = [508529165];

function isAdmin(ctx) {
    return ADMIN.includes(ctx.message.from.id);
}

//setwebhook
//https://api.telegram.org/bot630146731:AAHpiLYjCfSe--8Muf-Wu_uv07rtPJIP9eM/setWebhook?url=
const bot = new Telegraf(TOKEN);
bot.command('/cutdi', (ctx) => {
    if (TeleConfig.isAdmin(ctx)) {
        ctx.leaveChat();
    }
}).catch(err => console.log(err));
bot.on('new_chat_members', (ctx) => {
    memberJoined++;
    if (memberJoined / TeleConfig.WELCOME_WHEN === 0) {
        return ctx.reply(TeleConfig.WELCOME_MGS);
    }
}).catch(err => console.log(err));
bot.command('/team@MonoCapitalBot', (ctx) => {
    return ctx.reply('team');
}).catch(err => console.log(err));
bot.command('/ico@MonoCapitalBot', (ctx) => {
    return ctx.reply('ico');
}).catch(err => console.log(err));

exports.bot = functions.https.onRequest(
    (req, res) => {
        bot.handleUpdate(req.body, res);
        return 200;
    }
);