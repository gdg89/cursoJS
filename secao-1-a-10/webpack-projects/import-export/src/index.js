/**
 * PARA IMPORTAR TUDO :
 *  import * as myModulo from './modulo1'
 */

import {nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1';

//importando default
import algumaCoisa from './modulo1';
console.log('REsultado do default: ', algumaCoisa(5, 2));

// caso ja tiver uma variavel com o mesmo nome que a variavel que esta sendo importada, posso importar ela usando outro nome ex(nome as nome2);
const nome = 'Graziela';




function test(message, nome,){
    console.log(message + nome + ' ' + sobrenome);
    
}

test('ALguma coisa: ', nome2, sobrenome);

console.log(soma(idade, + 70));

const cliente = new Pessoa('Mark', 'Twin');
console.log(cliente);

