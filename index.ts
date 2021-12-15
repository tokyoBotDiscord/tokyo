import Eris from 'eris'
const { blue, cyan, magenta } = require('cli-color')
import { app } from './src/server/server'
import commandHandler from './src/handlers/commandHandler'
/* eris setup: */
const config = { token: String(process.env.TOKEN) }
const tokyo = new Eris.Client(`Bot ${config.token}`, {
  maxShards: "auto",
  intents: ["guilds", "guildMembers", "guildEmojis", "guildIntegrations", "guildPresences", "guildMessages", "guildMessageReactions", "guildMessageTyping", "directMessages", "directMessageReactions", "directMessageTyping"]
})
commandHandler.execute(tokyo)
/* webserver setup: */
app.get('/', (__, res) => {
  res.sendStatus(200)
});
app.listen(process.env.PORT, () => {
  console.log(blue.bold("[WEBSERVER]: ") + "WebServer is ready!")
})