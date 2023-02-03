//valor default do module.exports
const multiplicacao = require('./A/B/C/mod');
console.log(multiplicacao(2, 8));

//especificando chave soma na importação do modulo.
const soma = require('./A/B/C/mod').soma;
console.log(soma(20, 52));


//especificando chave cachorro na importação do modulo.
const cachorro = require('./A/B/C/mod').cachorro;
const meuCachorro = new cachorro('tobias');
meuCachorro.latir();

//testando caminho da pasta Z
const mod2 = require('./Z/mod2');
mod2();


