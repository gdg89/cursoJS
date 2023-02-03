const fs = require('fs').promises;




//escrevendo o novo arquivo, pasando o path, conteudo e objeto,
// com flag w se o arquivo já existir apaga tudo antes de escrever o conteudo novo.
// com flag a, se o arquivo ja existir vai adicionar o conteudo novo.
// encoding(formato codificação de caracteres, por padraõ ele envia utf8, não é necesario enviar.)

module.exports = (path, data)=>{
    fs.writeFile(path, data, {flag: 'w', encoding: 'utf8'});
}


