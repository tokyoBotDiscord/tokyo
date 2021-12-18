import { Client, CommandInteraction } from "eris";
const ytdl = require("ytdl-core")
export = {
  name: "play",
  opts: {
    name: "play",
    description: "[Music]: Plays music.",
    type: 1
  },
  run: async (t: any, interaction: any, bot: Client) => {
    await interaction.acknowledge()
    interaction.createMessage("Mensagem temporária.")
    /* lidar com os erros: */
    /* executar passo-a-passo: */
    let voiceChannelID = interaction.member.voiceState.channelID
    let voiceChannel = interaction.channel.guild.channels.find((found: any) => found.id === voiceChannelID)
    console.log(voiceChannelID)
    voiceChannel.join({ selfDeaf: true }).then(async (voiceConnection: any) => {
      voiceConnection.play(await ytdl("https://www.youtube.com/watch?v=_7pmUPMcOYk", {quality: "highestaudio", filter: "audio", highWaterMark: 1 << 25}), {format: "webm"})
      setInterval(() => {console.log(voiceConnection.current)}, 10000)
    })
  }
}