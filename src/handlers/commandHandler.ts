import { readdirSync } from 'fs';
const { blue, cyan, magenta } = require('cli-color');
export = {
  execute: (tokyo: any) => {
    tokyo.commands = new Map()
    tokyo.aliases = new Map()
    let commandCounter = 0

    readdirSync("./src/commands/").forEach(dir => {
      const commands = readdirSync(`./src/commands/${dir}/`)
      commands.filter(file => file.endsWith(".ts"))
      for (let file of commands) {
        let pull = require(`../commands/${dir}/${file}`)
        if (pull.name) {
          commandCounter += 1
          tokyo.commands.set(pull.name, pull)
        } else {
          console.log(blue.bold(`[WARN]: `) + `${file} does not have a declared name!`)
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach(async function(alias: string) {
            tokyo.aliases.set(alias, pull.name)
          })
      }
      console.log(blue.bold('[COMMANDS]: ') + `${commandCounter} commands loaded.`)
      const eventHandler = require('../handlers/eventHandler')
      eventHandler.execute(tokyo)
    })
  }
}