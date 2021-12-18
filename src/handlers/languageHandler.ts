import fs from "fs"
export default {
  prepare: (folder: string, file: string) => {
    return {
      getString: async (target: string, args: any) => {
        /*async function translate(first: any, second: any) {
          return await translator(first, { from: "pt", to: second.slice(0, 2) })
        }*/
        if (!args) args = {}
        if (fs.existsSync(`../multiLanguage/${folder}/${file}Command`)) {
          let cache = require(`../multiLanguage/${folder}/${file}Command`)(args)[target]
          if (cache) return cache
        } else {
          /* try {
             let translated = await translate(require(`../multiLanguage/pt-BR/${file}Command`)(args)[target], folder)
             if (translated) return translated
             else return require(`../multiLanguage/pt-BR/${file}Command`)(args)[target]
           } catch (error) {
             return require(`../multiLanguage/pt-BR/${file}Command`)(args)[target]
           }*/
          if (fs.existsSync(`./src/multiLanguage/en-US/${file}Command.ts`)) {
            if(require(`../multiLanguage/en-US/${file}Command`)(args)[target]) return require(`../multiLanguage/en-US/${file}Command`)(args)[target]
            else return require(`../multiLanguage/pt-BR/${file}Command`)(args)[target]
          } else return require(`../multiLanguage/pt-BR/${file}Command`)(args)[target]
        }
      }
    }
  }
}