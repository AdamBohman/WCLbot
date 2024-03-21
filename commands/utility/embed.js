const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { execute } = require('./ping');
//const { client } = require('../../index.js');

//module.exports = {
//	data: new EmbedBuilder()
	
//};

const embedWCL = new EmbedBuilder()
.setTitle('embed')
.setDescription('embedo')
.setURL('https://sod.warcraftlogs.com/guild/rankings/733269/latest')
.setThumbnail('https://i.imgur.com/pLvTPbD.jpeg')

module.exports = {
data: embed = new SlashCommandBuilder()
	.setName('embed')
	.setDescription('Embed description'),

//interactionCreate.reply({ embeds: [embed]});
async execute(interaction) {
	await interaction.reply({ embeds: [embedWCL]});
}
}