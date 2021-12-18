import { Client, CommandInteraction } from "eris";
import colors from "../../cogs/colors";
import emojis from "../../cogs/emojis";
import fs from "fs"
export = {
  name: "botinfo",
  opts: {
    name: "botinfo",
    description: "[Guides]: Shows you some info about me.",
    type: 1
  },
  run: async (t: any, interaction: any, bot: any) => {
    const data = {
      thumbnail: {
        url: bot.user.avatarURL,
      },
      color: colors["default"],
      title: `${emojis.decoration[4]} **Tokyo™** » Sobre mim:`,
      url: bot.utils.website,
      description: `Oi, oi!`,
      image: {
        url: 'attachment://viktor.png'
      }
    }

    return interaction.createMessage({
      embeds: [data]
    }, {
      file: fs.readFileSync('./src/utils/images/viktor.png'),
      name: 'viktor.png'
    })
  }
}