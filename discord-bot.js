const discord = require("discord.js")
const client = new discord.Client()

const config = {
	"admin": [ 243498117767495681 ]
}

client.on("ready", () => {
	console.log("Ready")
	client.user.setActivity("ivo", { type: "WATCHING" })
})

client.on("message", (message) => {
	if (message.channel.type == "text") {
		if (message.content.includes("?") && message.content.includes(" or ")) {
			if (message.content == "yes") {
				message.channel.send("yes")
			}
			
		} else if (message.content.startsWith("rename ")) {
			msgParts = message.content.split("to ")
			mentions = message.mentions
			
			if (mentions.channels.first()) {
				mentions.channels.first().edit({ name: msgParts[1] })
				message.channel.send("yes")
			} else if (mentions.members.first()) {
				mentions.members.first().setNickname(msgParts[1])
				message.channel.send("yes")
			} else {
				message.channel.send("no")
			}
		}
	}
})

client.login(process.env.discord_api_token)
