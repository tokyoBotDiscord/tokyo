import { Client, CommandInteraction } from "eris";
import colors from "../../cogs/colors";
export = {
  name: "latency",
  opts: {
    name: "latency",
    description: "[Technical]: Shows the bot's latency.",
    type: 1
  },
  run: async (t: any, interaction: any, bot: Client) => {
    await interaction.acknowledge()
    /* lidar com os erros: */
    /* executar passo-a-passo: */
    const latency = interaction.channel.guild.shard.latency
    if (latency === Infinity) {
      let pong = Date.now()
      interaction.createMessage(`🏓 » **${await t("takeThat")}**`)
        .then((newMessage: any) => {
          pong = Math.round(Date.now() - pong)
          return setTimeout(async () => {
            newMessage.edit({
              content: String(),
              embed: {
                color: colors["default"],
                description: `🛰️ » ${await t("infinitySuccess", {pong})}`
              }
            })
              .catch(console.error)
          }, 1500)
        })
        .catch(console.error)
    } else {
      return interaction.createMessage({
        embed: {
          color: colors["default"],
          description: `📡 » WebSocket: **\`${latency}ms\`**`
        }
      })
    }
  }
}