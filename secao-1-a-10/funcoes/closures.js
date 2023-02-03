/**
 * Closures: 
 * uma função que faz referência 
 * a variáveis no escopo externo
 * a partir de seu escopo interno
 * 
 */

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Giuliano');
const funcao2 = retornaFuncao('Gra');

console.log(funcao());
console.log(funcao2());