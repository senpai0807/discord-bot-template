import 'dotenv/config';
import { connect } from 'mongoose';
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js';
import loadEvents from './Handlers/eventHandler.js';


const { Guilds, GuildMembers, GuildMessages, GuildMessageReactions, MessageContent, GuildVoiceStates, DirectMessages, DirectMessageTyping } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;
const client = new Client ({ 
    intents: [ Guilds, GuildMembers, GuildMessages, GuildMessageReactions, MessageContent, GuildVoiceStates, DirectMessages, DirectMessageTyping ],
    partials: [ User, Message, Channel, GuildMember, ThreadMember ] 
});

client.commands = new Collection();
client.events = new Collection();

/* connect(process.env.DATABASE_URL, {
}).then(() => console.log('The client is now connected to the database.')); */ // ----- IF YOU'D LIKE TO USE A DATABASE WITHIN YOUR DISCORD BOT/UNCOMMENT ----- \\

loadEvents(client);

client.login(process.env.DISCORD_TOKEN);