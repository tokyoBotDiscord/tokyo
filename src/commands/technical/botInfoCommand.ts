import { Client, Message } from 'eris';
import c from '../../cogs/colors';
import e from '../../cogs/emojis';
import x from '../../cogs/listEmojis';

export = {
  name: 'botinfo',
  aliases: ['bi'],
  run: async (bot: Client, message: any) => {
    let embed = {
      title: 'Olá! Veja algumas informações sobre mim:',
      description: x.hello['1'] + ' » Heyoo! Eu sou a **Tokyo**, e fui criada por jovens brasileiros com **[TypeScript](https://typescriptlang.org)** e **[Eris](https://npmjs.com/eris)**.\n'

      + e.user + ' » Meus desenvolvedores:'
      + '\n \`Cauã#5683\`'
      + '\n \`ferb#9747\`'
      + '\n \`Pitzinho#0001\`',
      color: c['default'],
      footer: {
        text: 'Obrigada por me utilizar: ' + message.author.name, icon_url: 'https://images-ext-1.discordapp.net/external/Eg0AL_GN025yCGnsQqQ1X3NPkz2Bvj3NOKZPnvkNozM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/920072004357472291/8a7fd489cb2474ae2c636bd906347e21.png?width=480&height=480'
      }
    }

  return message.channel.createMessage({ embed: embed });
  }
}