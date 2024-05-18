import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping The Discord Bot')
    .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands);

async function execute(interaction) {
    await interaction.deferReply({ fetchReply: true });
    const start = Date.now();
    const latency = Date.now() - start; 
    const apiLatency = interaction.client.ws.ping;
    const color = parseInt(process.env.EMBED_COLOR, 10) || 0xFFFFFF;

    const pingEmbed = new EmbedBuilder()
        .setColor(color)
        .setTitle("Ping Results")
        .setDescription(`API Latency: ${apiLatency}ms\nBot Latency: ${latency}ms`)
        .setTimestamp()
        .setFooter({ 
            text: interaction.guild ? interaction.guild.name : "No Guild", 
            iconURL: process.env.ICON_URL || "https://i.imgur.com/hUXt3kK.jpg" 
        });

    await interaction.editReply({ embeds: [ pingEmbed ] });
}

export default { data, execute };