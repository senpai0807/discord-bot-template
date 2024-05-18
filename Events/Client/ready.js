import loadCommands from '../../Structures/Handlers/commandHandler.js';

const name = 'ready';
const once = true;
function execute(client) {
    console.log(`Logged in as ${client.user.username}`);
    client.user.setActivity(`Lunar Tools Users`, { type: "Watching" });
    loadCommands(client);
}

export default { name, once, execute };