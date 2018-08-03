const TOKEN = '630146731:AAHpiLYjCfSe--8Muf-Wu_uv07rtPJIP9eM';
const WELCOME_WHEN = 20; // reply welcome mgs when xxx user joined
const WELCOME_MGS = "xin chao cac ban"; // reply welcome mgs when xxx user joined
const ADMIN = [508529165];

function isAdmin(ctx) {
    return ADMIN.includes(ctx.message.from.id);
}

module.exports.TOKEN = TOKEN;
module.exports.ADMIN = ADMIN;
module.exports.WELCOME_WHEN = WELCOME_WHEN;
module.exports.WELCOME_MGS = WELCOME_MGS;
module.exports.isAdmin = isAdmin;
return module.exports;