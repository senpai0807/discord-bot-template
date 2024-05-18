import { EmbedBuilder } from 'discord.js';

const name = "guildMemberAdd";
async function execute(member) {
    const roleId = process.env.ROLE_ID;
    const addMemberEmbed = new EmbedBuilder()
        .setColor(process.env.EMBED_COLOR)
        .setTitle("New Member Has Joined!")
        .setDescription(`<@${member.user.id}> has joined ${member.guild.name}!`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    member.guild.channels.cache.get(process.env.WELCOME_CHANNEL).send({ embeds: [addMemberEmbed] });

    const role = member.guild.roles.cache.get(roleId);
    if (role) {
        await member.roles.add(role);
    };
}

export default { name, execute };