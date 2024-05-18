import { EmbedBuilder } from 'discord.js';

const name = "guildMemberRemove";
function execute(member) {
    const lostMemberEmbed = new EmbedBuilder()
        .setColor(process.env.EMBED_COLOR)
        .setTitle("A Member Has Left!")
        .setDescription(`<@${member.user.id}> has left!`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    member.guild.channels.cache.get(process.env.LEAVE_CHANNEL).send({ embeds: [lostMemberEmbed] });
}

export default { name, execute };