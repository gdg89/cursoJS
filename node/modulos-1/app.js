// importando modulo 1
// const mod1 = require('./modulo1');
// console.log(mod1);

//importando uma só uma chave
// const fala = require('./modulo1').falaNome;
// console.log(fala);

//via desestructuração
// const{nome, sobrenome, falaNome} = require('./modulo1');
// console.log(falaNome());

/**
 * Cuando importamos un modulos que nos criamos,  pasamos el caminho do modulo.
 *  cuando es un modulo proprio do node, ou instalado via npm, que vão parar no node_modules, pasamos o nome do modulo.
 */

//modulo criado
const {Pessoa} = require('./modulo1');
const p1 = new Pessoa('Anibal');
console.log(p1.nome);

//modulo do node
const path = require('path');
console.log(path);

//modulo do axios
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e));