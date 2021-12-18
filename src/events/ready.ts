import Eris from 'eris'
const { blue, cyan, magenta } = require('cli-color')

export = {
  execute: async (tokyo: any) => {
    let arrayOfCommands = Array()
    let map = Array.from(tokyo.slashes)
    for (let command of Object(map)) {
      command = command[1].opts
      arrayOfCommands.push(command)
    }
    tokyo.bulkEditCommands(arrayOfCommands)
    console.log(arrayOfCommands)
    tokyo.editStatus("online", [{ name: "tk.ajuda", type: 2 }])
    console.log(blue.bold("[TOKYO]: ") + `${cyan("Eris")} is ready as: ${magenta.bold(tokyo.user.username + '#' + tokyo.user.discriminator)}.`)
    //setInterval(() => {console.log('[RAM]: ' + (process.memoryUsage().heapUsed / 1024 / //1024).toFixed(1) + "MB")}, 20000)
  }
}