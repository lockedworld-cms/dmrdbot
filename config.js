const ayarlar = require('./ayarlar.json')
const config = {
  "token": ayarlar.token,

  "dashboard" : {
    "oauthSecret": "xAB9AskIGIJuzkEzaUuhbtc6aZrp9fSl", // This is the `client` secret in your bot application page.
    "callbackURL": "https://lockedworld-xan.glitch.me/callback",
    "sessionSecret": "super-secret-session-thing",
    "domain": "https://lockedworld-xan.glitch.me",
    "port": 8000
  },
};

module.exports = config;
