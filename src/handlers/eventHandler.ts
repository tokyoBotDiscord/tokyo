export = {
  execute: (tokyo: any) => {
    tokyo.utils = {
      website: "https://tokyobot.vercel.app/"
    }
    
    const path = "../events/"

    tokyo.once('ready', () => {
      require(path + "/ready").execute(tokyo)
    })

    tokyo.on('messageCreate', (message: any) => {
      require(path + "messageCreate").execute(message, tokyo)
    })

    tokyo.on('interactionCreate', (interaction: any) => {
      require(path + "interactionCreate").execute(interaction, tokyo)
    })    
  }
}