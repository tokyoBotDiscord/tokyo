import Eris from "eris"
import mainLoader from "./src/handlers/commandHandler"
import eventHandler from "./src/handlers/eventHandler"
const tokyo = new Eris.Client(`Bot ${process.env.TOKEN}`, {
  maxShards: "auto",
  intents: ["guilds", "guildMembers", "guildEmojis", "guildIntegrations", "guildPresences", "guildMessages", "guildMessageReactions", "guildMessageTyping", "directMessages", "directMessageReactions", "directMessageTyping"]
})
mainLoader.execute(tokyo)
eventHandler.execute(tokyo)
tokyo.connect()