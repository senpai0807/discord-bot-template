import { ChatInputCommandInteraction } from 'discord.js';

const name = "interactionCreate";

function execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
        return interaction.reply({
            content: "This command is outdated.",
            ephemeral: true
        });

    command.execute(interaction, client);
}

export default { name, execute };