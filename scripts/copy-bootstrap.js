import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourceFile = path.join(__dirname, '../node_modules/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js');
const targetFile = path.join(__dirname, '../public/bootstrap-italia.bundle.min.js');

// Crea la cartella public se non esiste
if (!fs.existsSync(path.join(__dirname, '../public'))) {
  fs.mkdirSync(path.join(__dirname, '../public'));
}

// Copia il file
fs.copyFileSync(sourceFile, targetFile);
console.log('Bootstrap Italia JS file copied to public folder'); 