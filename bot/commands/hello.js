const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Say hello to someone')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to greet')
    ),
  async execute(interaction) {
    const target = interaction.options.getUser('user') || interaction.user;
    await interaction.reply(`Hey ${target}! Welcome to Crafty Cults!`);
  },
};
