import pkg from 'glob';
const { glob } = pkg;
import { promisify } from 'util';
const proGlob = promisify(glob);

async function loadFiles(dirName) {
    const Files = await proGlob(`${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.js`);
    return Files;
};

export default loadFiles;