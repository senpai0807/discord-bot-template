import ascii from 'ascii-table';
import loadFiles from '../Functions/fileLoader.js';
import path from 'path';
import { fileURLToPath } from 'url';

async function loadCommands(client) {
    const table = new ascii().setHeading("Commands", "Status");

    await client.commands.clear();
    let commandsArray = [];

    const Files = await loadFiles("Commands");
    const currentDir = path.dirname(fileURLToPath(import.meta.url));

    for (const file of Files) {
        const filePath = path.resolve(currentDir, '..', file);
        const fileURL = new URL(`file://${filePath}`);

        try {
            const module = await import(fileURL.href);
            const command = module.default;

            client.commands.set(command.data.name, command);
            commandsArray.push(command.data.toJSON());
            table.addRow(command.data.name, "✅");
        } catch (error) {
            console.error(`Failed to load command ${file}: ${error}`);
            table.addRow(file, "Failed to Load");
        }
    }

    await client.application.commands.set(commandsArray);
    console.log(table.toString(), "\nCommands Loaded.");
}

export default loadCommands;