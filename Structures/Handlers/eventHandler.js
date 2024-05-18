import path from 'path';
import ascii from 'ascii-table';
import loadFiles from '../Functions/fileLoader.js';

async function loadEvents(client) {
    const table = new ascii().setHeading("Events", "Status");

    await client.events.clear();

    const Files = await loadFiles("Events");

    for (const file of Files) {
        const filePath = path.resolve(process.cwd(), file);
        const modulePath = new URL(`file://${filePath.replace(/\\/g, '/')}`);

        const module = await import(modulePath.href);
        const event = module.default;

        if (!event || !event.name || typeof event.execute !== 'function') {
            console.error(`Event file ${file} does not export correctly.`);
            continue;
        }

        const execute = (...args) => event.execute(...args, client);
        client.events.set(event.name, execute);

        if (event.rest) {
            if (event.once) {
                client.rest.on(event.name, execute);
            } else {
                client.rest.on(event.name, execute);
            }
        } else {
            if (event.once) {
                client.once(event.name, execute);
            } else {
                client.on(event.name, execute);
            }
        }

        table.addRow(event.name, "✅");
    }

    console.log(table.toString(), "\nLoaded Events.");
};

export default loadEvents;
