//Variaveis:
// __dirname (nome da pasta atual com caminho absoluto)
//__filename (nome do arquivo atual com caminho absoluto)
console.log(__filename);
console.log(__dirname);


//Path
const path = require('path');

// nesse exemplo vou voltar duas pastas com cada '..'
//e logo entrar em pasta imagens dentro da pasta arquivos.
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));