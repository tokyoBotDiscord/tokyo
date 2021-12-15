import Eris from 'eris'
const { blue, cyan, magenta } = require('cli-color')

export = {
  execute: (tokyo: Eris.Client) => {
    tokyo.editStatus("online", [{name: "tk.ajuda", type: 2}])
    console.log(blue.bold("[TOKYO]: ") + `${cyan("Eris")} is ready as: ${magenta.bold(tokyo.user.username + '#' + tokyo.user.discriminator)}.`)
  }
}