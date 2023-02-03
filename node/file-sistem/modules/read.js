const fs = require('fs').promises;

//função que vai ler o arquivo receve como paramtero o caminho do arquivo
module.exports = (path)=> fs.readFile(path, 'utf8');