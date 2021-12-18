import lang from "../handlers/languageHandler";
export = {
  execute: (interaction: any, tokyo: any) => {
    if (interaction.type === 3) return
    let t = lang.prepare(interaction.channel.guild.preferredLocale, interaction.data.name).getString
    let cmd = tokyo.slashes.get(interaction.data.name)
    cmd.run(t, interaction, tokyo)
  }
}