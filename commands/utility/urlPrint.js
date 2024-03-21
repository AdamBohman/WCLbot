const { SlashCommandBuilder} = require('discord.js');
const needle = require('needle');

var wcl = needle.get('https://sod.warcraftlogs.com/guild/rankings/733269/latest');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('urlprint')
		.setDescription('print url'),
	async execute(interaction) {
		await interaction.reply(wcl);
	},
};

