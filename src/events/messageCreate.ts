const desacentuar = require("desacentuador")
import colors from "../cogs/colors"
import emojis from "../cogs/emojis"

export = {
  execute: (message: any, tokyo: any) => {
    const prefix = "tk."
    /* barrar algumas situações */
    //console.log(message.member.guild)
    if (!message.channel.guild) return
    if (message.author.bot) return
    if (!message.member) return
    /* finalmente operar: 
    1. responder menção */
    if (message.content === `<@!${tokyo.user.id}>`
      || message.content === `<@${tokyo.user.id}>`) {
      tokyo.createMessage(message.channel.id, {
        content: message.author.mention,
        embed: {
          url: tokyo.utils.website,
          title: emojis.decoration[4] + " " + "**Tokyo™** » Guia rápido:",
          description: "Para falar comigo, use o prefixo: **`tk.`**\
          \n**Precisa de ajuda?** Use: **`tk.ajuda`**",
          color: colors["default"],
          footer: {
            text: "Obrigada por me utilizar!"
          }
        }
      })
    }
  }
}