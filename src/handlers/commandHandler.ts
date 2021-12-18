import { readdirSync } from 'fs'
require('../server/server').run()
const { blue } = require('cli-color')
export = {
  execute: (tokyo: any) => {
    tokyo.slashes = new Map()
    let slashCounter = 0
    readdirSync("./src/commands/").forEach(dir => {
      let commands = readdirSync(`./src/commands/${dir}/`)
      commands.filter(file => file.endsWith(".ts"))
      for (let file of commands) {
        let pull = require(`../commands/${dir}/${file}`)
        if (pull.name) {
          slashCounter += 1
          tokyo.slashes.set(pull.name, pull)
        } else {
          console.log(blue.bold(`[WARN]: `) + `the command ${file} does not have a declared name!`)
          continue;
        }
      }
      console.log(blue.bold('[LOADER]: ') + `${slashCounter} commands loaded.`)
    })
  }
}