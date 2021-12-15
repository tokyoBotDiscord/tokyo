import Eris from 'eris';

export = {
  execute: (tokyo: any) => {
    tokyo.utils = {
      website: "https://tokyobot.vercel.app/"
    }
    const path = "../events/"
    tokyo.connect()

    tokyo.once('ready', () => {
      require(path + "/ready").execute(tokyo)
    })

    tokyo.on('messageCreate', (message: Eris.Message<Eris.TextableChannel>) => {
      require(path + "messageCreate").execute(message, tokyo)
    })
    
  }
}